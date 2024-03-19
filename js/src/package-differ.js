(() => {
    const diffContainer = document.querySelector('#diffs');

    // Only continue if diffs are available
    if (diffContainer) {
        const diffContent = document.querySelector('#diffContent');
        const diffSelector = document.querySelector('#diffSelector');
        const anyPackageRole = (document.querySelector('#anyPackageRole').value.toLowerCase() === 'true');

        const callEndpoint = async url => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        };

        const getDiffFiles = diffFolder => {
            // Remove any diffs that might already be there
            diffContent.innerHTML = '';

            return callEndpoint(`${window.location.protocol}//${window.location.host}/json/JsonApi?invoke&action=GetDiffFileUrls&folderName=${diffFolder}`).then(filePaths => {
                filePaths.forEach(filePath => {
                    let diffFilePath = filePath.replaceAll('\\', '/').replace('.patch', '').trim();
                    diffFilePath = diffFilePath.split('/').slice(3);
                    diffFilePath = diffFilePath.join('\\');

                    const diffFileName = /[^\\]*$/.exec(diffFilePath)[0];
                    const diffTarget = `diff-path-${diffFileName.replaceAll('.', '-')}`;

                    // Find file extension for syntax highlighting
                    let diffLanguage = 'language-diff';

                    if (diffFileName.includes('.ps1') || diffFileName.includes('.psm1')) {
                        diffLanguage = 'language-diff-powershell';
                    } else if (diffFileName.includes('.xml') || diffFileName.includes('.config') || diffFileName.includes('.nuspec')) {
                        diffLanguage = 'language-diff-xml';
                    } else if (diffFileName.includes('.json')) {
                        diffLanguage = 'language-diff-json';
                    } else if (diffFileName.includes('.js')) {
                        diffLanguage = 'language-diff-js';
                    }

                    // Create diff containers
                    let fileContainer = '';

                    // Display containers based on roles
                    // Logged out
                    let diffCollapseShow = '';
                    let diffCollapseExpanded = 'false';
                    let diffBtnText = 'Show';

                    // Logged in
                    if (anyPackageRole) {
                        diffCollapseShow = 'show';
                        diffCollapseExpanded = 'true';
                        diffBtnText = 'Hide';
                    }

                    fileContainer =
                    `<div class="mb-1" data-file-path="${filePath}">
                        <div class="p-2 border border-start border-end text-bg-body-secondary d-flex align-items-center">
                            <button class="btn btn-sm btn-secondary btn-show-hide me-2" type="button" data-bs-toggle="collapse" data-bs-target=".${diffTarget}" aria-expanded="${diffCollapseExpanded}" aria-controls="${diffTarget}">${diffBtnText}</button>
                            <span>${diffFilePath}</span>
                        </div>
                        <div class="collapse ${diffCollapseShow} ${diffTarget}">
                            <pre class="mt-0 border-top-0 ps-0 pe-0"><code class="${diffLanguage} diff-highlight"></code></pre>
                        </div>
                    </div>`;

                    // Add diffs
                    diffContent.insertAdjacentHTML('beforeend', fileContainer);

                    // Initialize content
                    const getDiffContent = filePath => {
                        callEndpoint(`${window.location.protocol}//${window.location.host}/json/JsonApi?invoke&action=GetDiffContent&key=${filePath}`).then(fileContent => {
                            const diffItems = document.querySelectorAll('[data-file-path]');
                            let isDuplicate = false;

                            if (!isDuplicate) {
                                diffItems.forEach(el => {
                                    if (el.getAttribute('data-file-path') == filePath) {
                                        const elPre = el.querySelector('pre');
                                        const elCode = el.querySelector('code');

                                        // TODO: Move this to functions after choco-theme milestone 0.1.0
                                        const htmlEntities = {
                                            nbsp: ' ',
                                            cent: '¢',
                                            pound: '£',
                                            yen: '¥',
                                            euro: '€',
                                            copy: '©',
                                            reg: '®',
                                            lt: '<',
                                            gt: '>',
                                            quot: '"',
                                            amp: '&',
                                            apos: '\''
                                        };

                                        const unescapeHTML = str => {
                                            // eslint-disable-next-line
                                            return str.replace(/\&([^;]+);/g, (entity, entityCode) => {
                                                let match;

                                                if (entityCode in htmlEntities) {
                                                    return htmlEntities[entityCode];
                                                    // eslint-disable-next-line
                                                } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
                                                    return String.fromCharCode(parseInt(match[1], 16));
                                                    // eslint-disable-next-line
                                                } else if (match = entityCode.match(/^#(\d+)$/)) {
                                                    return String.fromCharCode(~~match[1]);
                                                } else {
                                                    return entity;
                                                }
                                            });
                                        };

                                        // Insert content into containers
                                        elCode.insertAdjacentText('afterbegin', unescapeHTML(fileContent));

                                        const extendDiffHighlight = () => {
                                            // TODO: Move to functions.js after ES6 migration
                                            const isOverflowing = element => {
                                                return element.scrollWidth > element.offsetWidth;
                                            };

                                            // Add widths to tokens that overflow so they can be properly syntax highlighted
                                            if (isOverflowing(elPre)) {
                                                const elPreStyle = window.getComputedStyle(elPre);
                                                const elPrePadding = parseInt(elPreStyle.getPropertyValue('padding-left'));
                                                const elPreScrollWidth = elPre.scrollWidth - elPrePadding;
                                                const insertedToken = elPre.querySelectorAll('.token.inserted-sign.inserted');
                                                const deletedToken = elPre.querySelectorAll('.token.deleted-sign.deleted');
                                                const coordToken = elPre.querySelectorAll('.token.coord');

                                                for (const i of insertedToken) {
                                                    i.style.width = `${elPreScrollWidth}px`;
                                                }

                                                for (const i of deletedToken) {
                                                    i.style.width = `${elPreScrollWidth}px`;
                                                }

                                                for (const i of coordToken) {
                                                    i.style.width = `${elPreScrollWidth}px`;
                                                }
                                            }
                                        };

                                        // Syntax highlight
                                        Prism.highlightElement(elCode, false, extendDiffHighlight);

                                        // Ensure data does not get overriden
                                        isDuplicate = true;
                                    }
                                });
                            }
                        });
                    };

                    // Initialize show/hide buttons
                    const btnShowHide = diffContent.querySelector('[data-file-path]:last-child .btn-show-hide');
                    let isInitilized = false;

                    btnShowHide.addEventListener('click', () => {
                        if (btnShowHide.textContent.includes('Show')) {
                            btnShowHide.textContent = btnShowHide.textContent.replace('Show', 'Hide');
                        } else {
                            btnShowHide.textContent = btnShowHide.textContent.replace('Hide', 'Show');
                        }

                        // Ensure this is only ran once to prevent multiple content fetches
                        if (!anyPackageRole && !isInitilized) {
                            getDiffContent(filePath);
                            isInitilized = true;
                        }
                    });

                    if (anyPackageRole) {
                        getDiffContent(filePath);
                    }
                });
            }).catch(error => {
                console.error(error.message);
            });
        };

        const initDiffSelector = () => {
            diffSelector.addEventListener('change', e => {
                const diffFolder = e.target.value;

                // Make sure we don't send in the first default option
                if (diffFolder !== 'default') {
                    getDiffFiles(diffFolder);
                }
            });
        };

        // Check to see if Diff container is expanded or hidden
        const isDiffContainerExpanded = diffContainer.classList.contains('show') || window.location.hash == `#${diffContainer.id}`;
        let isDiffContainerExpandedClick = false;

        if (isDiffContainerExpanded && diffSelector.nodeName == 'INPUT') {
            // Expanded by default with 1 diff
            getDiffFiles(diffSelector.value);
        } else if (isDiffContainerExpanded && diffSelector.nodeName == 'SELECT') {
            // Expanded by default with multiple diffs
            initDiffSelector();
        } else {
            // Hidden by default
            diffContainer.addEventListener('show.bs.collapse', () => {
                if (!isDiffContainerExpandedClick) {
                    if (diffSelector.nodeName === 'INPUT') {
                        getDiffFiles(diffSelector.value);
                    } else {
                        initDiffSelector();
                    }
                }

                // Only do the above actions on load
                isDiffContainerExpandedClick = true;
            });
        }
    }
})();
