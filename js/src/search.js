import autoComplete from '@tarekraafat/autocomplete.js';
import { setCookieExpirationNever } from './util/set-cookie-expiration-never';
import { getCookie } from './util/get-cookie';
import Mousetrap from 'mousetrap';

(() => {
    const autoCompleteInput = document.querySelector('#autoComplete');

    if (autoCompleteInput) {
        autoCompleteInput.addEventListener('init', () => {
            // Hiding the input until it is ready to avoid showing it unstyled
            document.querySelector('.search-box').style.opacity = 1;
        });

        const autoCompleteJS = new autoComplete({
            name: 'autoComplete',
            placeHolder: 'Search packages or get suggestions...',
            submit: false,
            debounce: 300,
            data: {
                src: async query => {
                    try {
                        // Fetch Data from external Source
                        const source = await fetch(`${window.location.protocol}//${window.location.host}/json/JsonApi?invoke&action=GetSuggestions&SearchTerm=${query}`);

                        // Data should be an array of `Objects` or `Strings`
                        const data = await source.json();

                        return data;
                    } catch (error) {
                        return error;
                    }
                },
                keys: ['PackageId'] // Data source 'Object' key to be searched
            },
            resultsList: {
                element: (list, data) => {
                    const templateHeader = document.createElement('div');
                    const templateNoSuggestions = document.createElement('li');
                    let templateEnter = '';
                    const prefixed = ['tag:', 'author:', 'id:'];

                    templateHeader.classList.add('autocomplete-header');
                    templateNoSuggestions.classList.add('autocomplete-no-suggestions', 'mt-4');

                    const templateHelpCookie = 'chocolatey_show_search_help';
                    let templateHelpLinkClass;
                    let templateHelpContainerClass;
                    let isTemplateHelpExpanded;
                    let templateHelpText;
                    if (getCookie(templateHelpCookie)) {
                        templateHelpLinkClass = '';
                        templateHelpContainerClass = 'show';
                        isTemplateHelpExpanded = true;
                        templateHelpText = 'hide';
                    } else {
                        templateHelpLinkClass = 'collapsed';
                        templateHelpContainerClass = '';
                        isTemplateHelpExpanded = false;
                        templateHelpText = 'view';
                    }
                    // Check if any of the keys in 'prefixed' array are present in the user input
                    const containsPrefixedKey = prefixed.some(key => data.query.includes(key));

                    if (containsPrefixedKey) {
                        templateNoSuggestions.innerHTML = '<p class="mb-0">Searching with a prefix of <strong>id:</strong>, <strong>tag:</strong>, or <strong>author:</strong> will not display suggestions. Press <kbd>Enter</kbd> to do a full search.</p>';
                    } else if (data.results.length === 0) {
                        templateNoSuggestions.innerHTML = `<p class="mb-0">No suggestions for package id "<strong>${data.query}</strong>". Press <kbd>Enter</kbd> to do a full search.</p>`;
                    }

                    if (data.results.length !== 0) {
                        templateEnter = `
<div class="d-flex align-items-center justify-content-sm-center text-bg-body-secondary px-3 py-2 small border-bottom">
    <p class="mb-0">Press <kbd>Enter</kbd> to do a full search or select a suggestion below.</p>
</div>
<p class="text-primary ps-4 pe-3 mt-4 mb-2"><strong>Suggestions</strong></p>`;
                    }

                    templateHeader.innerHTML = `
<div class="d-flex justify-content-between align-items-center text-center text-bg-body-tertiary p-3 small border-bottom">
    <p class="mb-0"><strong>id:searchValue</strong><br />search by id</p>
    <p class="mb-0 mx-3"><strong>tag:searchValue</strong><br />search by tag</p>
    <p class="mb-0"><strong>author:searchValue</strong><br />search by author</p>
</div>
<div class="p-3 border-bottom">
    <a class="d-hash-none text-sm-center d-block small ${templateHelpLinkClass}" data-bs-toggle="collapse" href="#collapseTemplateHelp" role="button" aria-expanded="${isTemplateHelpExpanded}" aria-controls="collapseTemplateHelp">
        <i class="fa-solid fa-circle-question text-primary me-1"></i>Click to <span id="collapseTemplateHelpTextContainer">${templateHelpText}</span> search help and examples.
    </a>
    <div class="collapse ${templateHelpContainerClass}" id="collapseTemplateHelp">
        <div class="card card-body text-bg-body mt-2 rounded">
           <p class="mb-0">&bull; <strong>Search for multiple tags:</strong> tag:searchValue tag:searchValue</p>
           <p>&bull; <strong>Combine prefixes:</strong> tag:searchValue author:searchValue</p>
           <p class="mb-1"><strong>Example:</strong></p>
<pre><code class="search-help-example-1 language-markup">author:Chocolatey tag:admin tag:foss</code></pre>
        </div>
    </div>
</div>
${templateEnter}`;

                    if (data.results.length === 0) {
                        list.insertBefore(templateNoSuggestions, templateHeader.nextSibling);
                    }

                    list.prepend(templateHeader);
                    Prism.highlightElement(document.querySelector('.search-help-example-1'));

                    const collapseTemplateHelp = document.getElementById('collapseTemplateHelp');
                    const collapseTemplateHelpTextContainer = document.getElementById('collapseTemplateHelpTextContainer');
                    collapseTemplateHelp.addEventListener('show.bs.collapse', () => {
                        document.cookie = `${templateHelpCookie}=true; ${setCookieExpirationNever()}path=/;`;
                        collapseTemplateHelpTextContainer.innerText = 'hide';
                    });

                    collapseTemplateHelp.addEventListener('hide.bs.collapse', () => {
                        document.cookie = `${templateHelpCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                        collapseTemplateHelpTextContainer.innerText = 'view';
                    });
                },
                noResults: true,
                maxResults: 5,
                tabSelect: true
            },
            resultItem: {
                element: (item, data) => {
                    item.innerHTML = `
<p class="mb-0">${data.match}</p>
<p class="mb-0 text-end autocomplete-downloads"><small>${data.value.DownloadCount} downloads</small></p>`;
                },
                highlight: true
            },
            events: {
                input: {
                    selection: event => {
                        const selection = event.detail.selection.value.PackageId;

                        window.location.href = `${window.location.protocol}//${window.location.host}/packages/${selection}`;
                    },
                    focus: event => {
                        if (event.target.value) {
                            autoCompleteJS.start(event.target.value);
                        }
                    }
                }
            }
        });
    }

    // Insert search keys in input field
    const isMac = navigator.userAgent.indexOf('Mac OS X') != -1;
    const searchInput = document.querySelector('.search-box .search-input');
    const topNav = document.querySelector('#topNav');
    const searchKey = document.querySelector('.search-key');

    const searchActive = () => {
        topNav.style.height = `${topNav.offsetHeight}px`;
        topNav.classList.add('active-search');
        searchInput.focus();
    };

    const searchInactive = () => {
        topNav.style.height = '';
        topNav.classList.remove('active-search');
    };

    if (topNav) {
        const topNavBtnSearch = topNav.querySelector('.btn-search');
        const topNavBtnSearchClose = topNav.querySelector('.btn-search-close');

        if (topNavBtnSearch) {
            topNavBtnSearch.addEventListener('click', searchActive);
            topNavBtnSearchClose.addEventListener('click', searchInactive);
        }
    }

    const searchKeys = () => {
        if (topNav) {
            const topNavBtnSearch = topNav.querySelector('.btn-search');

            if (topNavBtnSearch) {
                if (topNav.classList.contains('active-search')) {
                    searchInput.focus();
                } else {
                    searchActive();
                }
            } else {
                searchInput.focus();
            }
        }
    };

    if (isMac && searchKey) {
        searchKey.innerHTML = '&#8984;';
        Mousetrap.bind('command+k', () => {
            searchKeys();
            return false;
        });
    } else if (!isMac && searchKey) {
        searchKey.innerHTML = 'ctrl';
        Mousetrap.bind('ctrl+k', () => {
            searchKeys();
            return false;
        });
    }

    // Package filtering
    // Set tag links on list page
    const packageTags = document.querySelectorAll('.package-tag');
    packageTags.forEach(el => {
        const tag = el.getAttribute('data-package-tag');
        let query;

        if (window.location.search) {
            const searchParams = new URLSearchParams(window.location.search);

            // Only search in approved packages
            if (searchParams.get('moderatorQueue') === 'true') {
                searchParams.set('moderatorQueue', 'false');
            }

            // Reset paging back to 1
            if (searchParams.has('page')) {
                // Replace the existing "page" parameter with "page=1"
                searchParams.delete('page');
            }

            query = `?${searchParams.toString()}`;
        } else {
            query = '?';
        }

        // Only append tag to query if it doesn't already exist
        if (query.includes(`tags=${tag}&`)) {
            el.href = `/packages${query}`;
        } else if (query.endsWith(`tags=${tag}`)) {
            el.href = `/packages${query}`;
        } else {
            el.href = `/packages${query}&tags=${tag}`;
        }
    });

    const sortOrderOptions = {
        relevance: 'relevance',
        popularity: 'package-download-count',
        alphabetical: 'package-title',
        recent: 'package-created'
    };

    // Trigger search and selection
    const searchTriggers = document.querySelectorAll('.trigger-search');
    searchTriggers.forEach(trigger => {
        trigger.addEventListener('change', e => {
            const currentForm = e.target.closest('form');
            const hiddenSortOrder = currentForm.querySelector('[name="sortOrder"]');
            const hiddenPageNumber = currentForm.querySelector('[name="page"]');

            // If no search term, and the "relevance" sort order is selected
            if (e.target.classList.contains('selected-search-term-query') && hiddenSortOrder.value === sortOrderOptions.relevance) {
                // Change the attribute name so that it doesn't submit with the form and the value defaults to what is set by the db
                hiddenSortOrder.setAttribute('name', '');
            }

            if (hiddenPageNumber && hiddenPageNumber.value !== 1) {
                // Change the attribute name so that it doesn't submit with the form and the value defaults to what is set by the db
                hiddenPageNumber.setAttribute('name', '');
            }

            currentForm.submit();
        });
    });

    // Trigger search on enter in search box
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('keydown', e => {
        if (e.key !== 'Enter') {
            return;
        }

        const currentQuery = window.location.search || '';
        const currentQueryParams = new URLSearchParams(currentQuery);
        const existingQuery = currentQueryParams.get('q') || '';
        const existingSortOrder = currentQueryParams.get('sortOrder') || '';
        const inputValue = e.target.value.trim();

        if (existingQuery !== inputValue) {
            currentQueryParams.set('q', inputValue);

            // If no search term, and the "relevance" sort order is selected
            if (inputValue === '' && existingSortOrder === sortOrderOptions.relevance) {
                // Delete this so the value defaults to what is set by the db
                currentQueryParams.delete('sortOrder');
            }
        }

        // Reset the paging back to the first page
        currentQueryParams.delete('page');

        // Manually construct the query string to ensure 'q=' comes first
        let newQuery = `q=${currentQueryParams.get('q')}`;
        currentQueryParams.delete('q');

        if (currentQueryParams.toString() !== '') {
            newQuery += `&${currentQueryParams.toString()}`;
        }

        const newUrl = `${window.location.protocol}//${window.location.host}/packages?${newQuery}`;

        window.location.href = newUrl;
    });
})();
