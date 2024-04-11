import jQuery from 'jquery';
import EasyMDE from 'easymde';
import { Collapse, Modal } from 'bootstrap';
import { getCookie, setCookieExpirationNever, truncateResults } from './util/functions';

(() => {
    // Community Disclaimer
    const cookieDisclaimerName = 'chocolatey_hide_packages_disclaimer';
    if (!getCookie(cookieDisclaimerName)) {
        // Display modal
        const disclaimer = document.getElementById('package-disclaimer');

        if (disclaimer) {
            const disclaimerModal = Modal.getOrCreateInstance(disclaimer, { keyboard: false, backdrop: 'static' });

            disclaimerModal.show();

            disclaimer.addEventListener('hidden.bs.modal', () => {
                document.cookie = `${cookieDisclaimerName}=true; ${setCookieExpirationNever()} path=/;`;
            });
        }
    }

    // Package Warning Disclaimer
    const packageWarning = document.getElementById('package-warning');
    if (packageWarning) {
        const cookiePackageWarningName = 'chocolatey_hide_packages_warning';
        const packageWarningCallout = Collapse.getOrCreateInstance(packageWarning, { toggle: false });

        if (!getCookie(cookiePackageWarningName)) {
            const packageWarningBtn = document.querySelector('#callout-package-warning .btn');

            packageWarningCallout.show();
            packageWarningBtn.textContent = packageWarningBtn.textContent.replace('Show', 'Hide');
        }

        packageWarning.addEventListener('shown.bs.collapse', () => {
            document.cookie = `${cookiePackageWarningName}=true`;
        });
    }

    // Save and Show Preferences
    const btnPreferences = document.querySelector('.btn-preferences');
    if (btnPreferences) {
        const preferenceGridView = document.getElementById('preferenceGridView');
        const gridView = getCookie('preferenceGridView');
        const preferenceModView = document.getElementById('preferenceModView');
        const modView = getCookie('preferenceModView');

        if (gridView) {
            preferenceGridView.checked = true;
        }

        if (modView) {
            preferenceModView.checked = true;
        }

        btnPreferences.addEventListener('click', () => {
            if (preferenceGridView.checked) {
                document.cookie = 'preferenceGridView=true';
            } else if (!preferenceGridView.checked) {
                document.cookie = 'preferenceGridView=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            }

            if (preferenceModView) {
                if (preferenceModView.checked) {
                    document.cookie = 'preferenceModView=true';
                } else if (!preferenceModView.checked) {
                    document.cookie = 'preferenceModView=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                }
            }

            location.reload();
        }, false);
    }

    // Prism for Description section
    const descriptionCode = document.querySelectorAll('#description pre');
    if (descriptionCode) {
        descriptionCode.forEach(el => {
            el.classList.add('line-numbers', 'border');
            el.innerHTML = `<code>${el.innerHTML}</code>`;

            Prism.highlightAllUnder(document.getElementById('description'));
        });
    }

    // Package Communication Area
    // Below is a WIP function to replace the comments list jQuery function below
    /* var commentsLists = document.querySelectorAll('.comments-list');
    if (commentsLists) {
        commentsLists.forEach(el => {
            // Add classes to comments
            var commentTitles = el.querySelectorAll('h4');

            for (var i of commentTitles) {
                var commentTitle = i.innerText.split(' on ')[0],
                    commentDate = i.innerText.split(' on ')[1];

                i.innerText = commentTitle;
                i.classList.add('comment-title');

                if (i.id.includes('maintainer')) {
                    i.classList.add('comment-maintainer');
                }

                if (i.id.includes('reviewer')) {
                    i.classList.add('comment-reviewer');
                }

                var newDate = document.createElement('h6');
                newDate.classList.add('comment-date');
                newDate.innerText = `on ${commentDate}`;

                i.after(newDate);
            }

            var commentBodies = el.querySelectorAll('*:not(.comment-title):not(.comment-date)');

            for (var i of commentBodies) {
                i.classList.add('comment-body');
            }
        });
    } */

    jQuery('.comments-list').each((index, element) => {
        const commentList = jQuery(element);

        commentList.find(':contains(\'(maintainer)\')').addClass('comment-title comment-maintainer');
        commentList.find('h4:contains(\'(reviewer)\')').addClass('comment-title comment-reviewer');
        commentList.children().not('.comment-title').addClass('comment-body');

        // Style Code
        jQuery('.comments-list pre').contents().unwrap().wrap('<p></p>');

        commentList.find('.comment-title').each((index, element) => {
            const h4 = jQuery(element);
            const text = h4.text();
            const textParts = text.split(' on');

            // Wrap comment in span to form bubble
            h4.nextUntil('.comment-title').addBack().wrapAll('<span class="comment-group"></span>');
            // Disect date and wrap
            if (textParts.length == 2) {
                h4.text(textParts[0]).after(`<h6 class="comment-date">on ${textParts[1]}</h6>`);
            }
        });

        // Define left or right chat position
        const commentMaintainer = commentList.find('.comment-maintainer').parent();
        const commentReviewer = commentList.find('.comment-reviewer').parent();

        if (commentList.hasClass('user-unknown')) {
            commentMaintainer.addClass('chat-left');
            commentReviewer.addClass('chat-right');
        }
        if (commentList.hasClass('user-maintainer')) {
            commentMaintainer.addClass('chat-right');
            commentReviewer.addClass('chat-left');
        }
        if (commentList.hasClass('user-moderator')) {
            commentMaintainer.addClass('chat-left');
            commentReviewer.addClass('chat-right');
        }

        // Scroll to bottom of container to show newest comments first
        commentList.parent().scrollTop(commentList.parent()[0].scrollHeight - commentList.parent()[0].clientHeight);
    });

    // Files Section
    // Files hidden on load and toggled
    const filePathCollapseHighlight = document.querySelectorAll('[class*="file-path-"]');
    if (filePathCollapseHighlight) {
        filePathCollapseHighlight.forEach(el => {
            if (!el.querySelector('pre').classList.contains('line-numbers')) {
                el.addEventListener('show.bs.collapse', () => {
                    let langBrush = el.previousElementSibling.innerText;

                    if (langBrush.includes('\\')) {
                        // Find everything after last \ if there is one
                        langBrush = langBrush.substring(langBrush.lastIndexOf('\\') + 1);
                    }

                    // Find everything after first . (file extension)
                    langBrush = langBrush.substring(langBrush.indexOf('.') + 1);

                    switch (langBrush) {
                        case 'ps1':
                        case 'psm1':
                            langBrush = 'powershell';
                            break;
                        case 'xml':
                        case 'config':
                        case 'nuspec':
                        case 'nuspec.template':
                            langBrush = 'xml';
                            break;
                        case 'js':
                        case 'json':
                            langBrush = 'js';
                            break;
                        default:
                            langBrush = 'none';
                    }

                    el.querySelector('pre').classList.add('line-numbers');
                    el.querySelector('code').classList.add(`language-${langBrush}`);

                    Prism.highlightElement(el.querySelector('code'));
                });
            }
        });
    }

    // Expand or Show all files
    const btnCollapseFiles = document.querySelector('#files .btn-collapse-files');
    if (btnCollapseFiles) {
        btnCollapseFiles.addEventListener('click', () => {
            const btnCollapseIndividualFile = document.querySelectorAll('#files .btn');
            const fileCollapse = document.querySelectorAll('.moderation-view [class*="file-path-"]');

            if (btnCollapseFiles.classList.contains('btn-success')) {
                btnCollapseFiles.innerText = btnCollapseFiles.innerText.replace('Expand', 'Collapse');
                btnCollapseFiles.classList.remove('btn-success');
                btnCollapseFiles.classList.add('btn-danger');

                for (const i of btnCollapseIndividualFile) {
                    i.innerText = i.innerText.replace('Show', 'Hide');
                }

                for (const i of fileCollapse) {
                    const fileCollapseTarget = Collapse.getOrCreateInstance(i, { toggle: false });

                    fileCollapseTarget.show();
                }
            } else if (btnCollapseFiles.classList.contains('btn-danger')) {
                btnCollapseFiles.innerText = btnCollapseFiles.innerText.replace('Collapse', 'Expand');
                btnCollapseFiles.classList.remove('btn-danger');
                btnCollapseFiles.classList.add('btn-success');

                for (const i of btnCollapseIndividualFile) {
                    i.innerText = i.innerText.replace('Hide', 'Show');
                }

                for (const i of fileCollapse) {
                    const fileCollapseTarget = Collapse.getOrCreateInstance(i, { toggle: false });

                    fileCollapseTarget.hide();
                }
            }
        }, false);
    }

    // Initialize Text Editor
    const textEditors = document.querySelectorAll('.text-editor');
    if (textEditors) {
        textEditors.forEach(el => {
            let placeholderText;

            switch (el.id) {
                case 'NewReviewComments':
                    placeholderText = 'Add to Review Comments';
                    break;
                case 'ExemptedFromVerificationReason':
                    placeholderText = 'Verification Exempted Reason';
                    break;
                case 'ExemptedFromScannerReason':
                    placeholderText = 'Scanner Exempted Reason';
                    break;
                case 'ExemptedFromValidatorReason':
                    placeholderText = 'Validator Exempted Reason';
            }

            const easymde = new EasyMDE({
                element: el,
                autoDownloadFontAwesome: false,
                placeholder: placeholderText,
                toolbar: ['bold', 'italic', 'heading', 'strikethrough', '|', 'quote', 'unordered-list', 'ordered-list', 'code', '|', 'link', 'image', '|', 'side-by-side', 'fullscreen', '|', 'preview']
            });

            easymde.render();

            const btnPreview = document.createElement('SPAN');
            btnPreview.classList.add('ms-1');
            btnPreview.innerText = ' Preview';

            el.nextSibling.querySelector('button.preview').classList.add('fw-bold', 'text-primary');
            el.nextSibling.querySelector('button.preview').style.width = '90px';
            el.nextSibling.querySelector('.fa-eye').after(btnPreview);

            // Below snippet added to allow content to be shown inside of collapsed or hidden items without having to click on the textarea. See https://github.com/Ionaru/easy-markdown-editor/issues/208#issuecomment-645656131.
            easymde.element.cmirror = easymde.codemirror;
        });
    }

    // Below snippet added to allow content to be shown inside of collapsed or hidden items without having to click on the textarea. See https://github.com/Ionaru/easy-markdown-editor/issues/208#issuecomment-645656131.
    const textEditorRefresh = document.querySelectorAll('.text-editor-refresh');
    if (textEditorRefresh) {
        textEditorRefresh.forEach(el => {
            el.addEventListener('shown.bs.collapse', () => {
                if (!el.classList.contains('.text-editor-refreshed')) {
                    document.querySelector(`#${el.id} textarea`).cmirror.refresh();
                    document.getElementById(el.id).classList.add('text-editor-refreshed');
                }
            });
        });
    }

    // Hide comment instructions
    const commentInstructions = document.getElementById('instructions');
    if (commentInstructions) {
        const cookieCommentInstructionsName = 'chocolatey_hide_comment_instructions';

        commentInstructions.addEventListener('hidden.bs.collapse', () => {
            if (!getCookie('chocolatey_hide_comment_instructions')) {
                document.cookie = `${cookieCommentInstructionsName}=true;path=/`;
            }
        });
        commentInstructions.addEventListener('shown.bs.collapse', () => {
            if (getCookie('chocolatey_hide_comment_instructions')) {
                document.cookie = `${cookieCommentInstructionsName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            }
        });
    }

    // Show or hide truncated version history table results on click
    truncateResults(document.querySelector('#versionTableTruncateResults'));
})();
