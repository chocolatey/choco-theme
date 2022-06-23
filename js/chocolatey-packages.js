(function() {
    // Community Disclaimer
    var cookieDisclaimerName = 'chocolatey_hide_packages_disclaimer';
    if (!getCookie(cookieDisclaimerName)) {
        // Display modal
        var disclaimer = document.getElementById('package-disclaimer');

        if (disclaimer) {
            disclaimerModal = Modal.getInstance(disclaimer) ? Modal.getInstance(disclaimer) : new Modal(disclaimer, { keyboard: false, backdrop: 'static' });
        
            disclaimerModal.show();

            disclaimer.addEventListener('hidden.bs.modal', function () {
                document.cookie = cookieDisclaimerName + '=true;' + setCookieExpirationNever() + 'path=/;';
            });
        }
    }

    // Package Warning Disclaimer
    var packageWarning = document.getElementById('package-warning');
    if (packageWarning) {
        var cookiePackageWarningName = 'chocolatey_hide_packages_warning', 
            packageWarningCallout = Collapse.getInstance(packageWarning) ? Collapse.getInstance(packageWarning) : new Collapse(packageWarning, { toggle: false });

        if (!getCookie(cookiePackageWarningName)) {
            var packageWarningBtn = document.querySelector('#callout-package-warning .btn');

            packageWarningCallout.show();
            packageWarningBtn.textContent = packageWarningBtn.textContent.replace('Show', 'Hide');
        }

        packageWarning.addEventListener('shown.bs.collapse', function () {
            document.cookie = cookiePackageWarningName + '=true';
        });
    }
    
    // Save and Show Preferences
    var btnPreferences = document.querySelector('.btn-preferences');
    if (btnPreferences) {
        var preferenceGridView = document.getElementById('preferenceGridView'),
            gridView = getCookie("preferenceGridView"),
            preferenceModView = document.getElementById('preferenceModView'),
            modView = getCookie("preferenceModView");

        if (gridView) {
            preferenceGridView.checked = true;
        }

        if (modView) {
            preferenceModView.checked = true;
        }

        btnPreferences.addEventListener('click', function() {
            if (preferenceGridView.checked) {
                document.cookie = "preferenceGridView=true";
            } else if (!preferenceGridView.checked) {
                document.cookie = "preferenceGridView=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }

            if (preferenceModView) {
                if (preferenceModView.checked) {
                    document.cookie = "preferenceModView=true";
                } else if (!preferenceModView.checked) {
                    document.cookie = "preferenceModView=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
            }
            
            location.reload();
        }, false);
    }

    // Set tag links on list page
    var packageTags = document.querySelectorAll('.package-tag');
    packageTags.forEach(function (el) {
        var tag = el.getAttribute('data-package-tag'),
            query;

        if (window.location.search) {
            // Only search in approved packages
            if (window.location.search.includes('moderatorQueue=true')) {
                query = window.location.search.replace('moderatorQueue=true', 'moderatorQueue=false');
            } else {
                query = window.location.search;
            }
        } else {
            query = '?';
        }

        // Only append tag to query if it doesn't already exist
        if (query.includes('tags=' + tag + '&')) {
            el.href = '/packages' + query;
        } else if (query.endsWith('tags=' + tag)) {
            el.href = '/packages' + query;
        } else {
            el.href = '/packages' + query + '&tags=' + tag;
        }
    });

    // Package Filtering
    /*var packageFilters = document.querySelectorAll('.package-filter'),
        packageSearchTerms = document.querySelectorAll('.selected-search-term');

    if (packageFilters) {
        for (var i of packageFilters) {
            i.onchange = function() {submitPackageFilterForm(i)};
        }   
    }

    if (packageSearchTerms) {
        for (var i of packageSearchTerms) {
            i.onchange = function() {submitPackageFilterForm(i)};
        }   
    }

    function submitPackageFilterForm(filter) {
        filter.closest('form').submit();
    }*/

    jQuery("#sortOrder,#prerelease,#moderatorQueue,#moderationStatus,.selected-search-term").change(function () {
        jQuery(this).closest("form").submit();
    });
    
    // Prism for Description section
    var descriptionCode = document.querySelectorAll('#description pre');
    if (descriptionCode) {
        descriptionCode.forEach(function (el) {
            el.classList.add('line-numbers', 'border');
            el.innerHTML = '<code>' + el.innerHTML + '</code>';

            Prism.highlightAllUnder(document.getElementById('description'));
        });
    }

    // Package Communication Area
    // Below is a WIP function to replace the comments list jQuery function below
    /*var commentsLists = document.querySelectorAll('.comments-list');
    if (commentsLists) {
        commentsLists.forEach(function (el) {
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
                newDate.innerText = 'on ' + commentDate;

                i.after(newDate);
            }
            
            var commentBodies = el.querySelectorAll('*:not(.comment-title):not(.comment-date)');

            for (var i of commentBodies) {
                i.classList.add('comment-body');
            }
        });
    }*/

    jQuery(".comments-list").each(function () {
        var commentList = jQuery(this);

        commentList.find("h4:contains('(maintainer)')").addClass('comment-title comment-maintainer');
        commentList.find("h4:contains('(reviewer)')").addClass('comment-title comment-reviewer');
        commentList.children().not('.comment-title').addClass("comment-body");
        
        // Style Code
    	jQuery('.comments-list pre').contents().unwrap().wrap('<p></p>');

        commentList.find(".comment-title").each(function () {
            var h4 = jQuery(this),
                text = h4.text(),
                textParts = text.split(' on');

            // Wrap comment in span to form bubble
            h4.nextUntil('.comment-title').addBack().wrapAll('<span class="comment-group"></span>');
            // Disect date and wrap
            if (textParts.length == 2) {
                h4.text(textParts[0]).after('<h6 class="comment-date">on ' + textParts[1] + '</h6>');
            }
        });

        // Define left or right chat position
        var commentMaintainer = commentList.find(".comment-maintainer").parent();
        var commentReviewer = commentList.find(".comment-reviewer").parent();

        if (commentList.hasClass("user-unknown")) {
            commentMaintainer.addClass("chat-left");
            commentReviewer.addClass("chat-right");
        }
        if (commentList.hasClass("user-maintainer")) {
            commentMaintainer.addClass("chat-right");
            commentReviewer.addClass("chat-left");
        }
        if (commentList.hasClass("user-moderator")) {
            commentMaintainer.addClass("chat-left");
            commentReviewer.addClass("chat-right");
        }

        // Scroll to bottom of container to show newest comments first
        commentList.parent().scrollTop(commentList.parent()[0].scrollHeight - commentList.parent()[0].clientHeight);
    });

    // Files Section
    
    // Files hidden on load and toggled
    var filePathCollapseHighlight = document.querySelectorAll('[class*="file-path-"]');
    if (filePathCollapseHighlight) {
        filePathCollapseHighlight.forEach(function (el) {
            if (!el.querySelector('pre').classList.contains('line-numbers')) {
                el.addEventListener('show.bs.collapse', function () {
                    var langBrush = el.previousElementSibling.innerText;

                    if (langBrush.includes('\\')) {
                        // Find everything after last \ if there is one
                        langBrush = langBrush.substring(langBrush.lastIndexOf('\\') + 1);
                    }

                    // Find everything after first . (file extension)
                    langBrush = langBrush.substring(langBrush.indexOf('.') + 1)

                    switch (langBrush) {
                        case "ps1":
                        case "psm1":
                            langBrush = "powershell";
                            break;
                        case "xml":
                        case "config":
                        case "nuspec":
                        case "nuspec.template":
                            langBrush = "xml";
                            break;
                        case "js":
                        case "json":
                            langBrush = "js";
                            break;
                        default:
                            langBrush = "none";
                    }

                    el.querySelector('pre').classList.add('line-numbers');
                    el.querySelector('code').classList.add('language-' + langBrush);

                    Prism.highlightElement(el.querySelector('code'));
                });
            }
        }); 
    }

    // Expand or Show all files
    var btnCollapseFiles = document.querySelector('#files .btn-collapse-files');
    if (btnCollapseFiles) {
        btnCollapseFiles.addEventListener('click', function() {
            var btnCollapseIndividualFile = document.querySelectorAll('#files .btn'),
                fileCollapse = document.querySelectorAll('.moderation-view [class*="file-path-"]');

            if (btnCollapseFiles.classList.contains('btn-success')) {
                btnCollapseFiles.innerText = btnCollapseFiles.innerText.replace('Expand', 'Collapse');
                btnCollapseFiles.classList.remove('btn-success');
                btnCollapseFiles.classList.add('btn-danger');

                for (var i of btnCollapseIndividualFile) {
                    i.innerText = i.innerText.replace('Show', 'Hide');
                }
                
                for (var i of fileCollapse) {
                    var fileCollapseTarget = Collapse.getInstance(i) ? Collapse.getInstance(i) : new Collapse(i, { toggle: false });

                    fileCollapseTarget.show();
                }  
            } else if (btnCollapseFiles.classList.contains('btn-danger')) {
                btnCollapseFiles.innerText = btnCollapseFiles.innerText.replace('Collapse', 'Expand');
                btnCollapseFiles.classList.remove('btn-danger');
                btnCollapseFiles.classList.add('btn-success');

                for (var i of btnCollapseIndividualFile) {
                    i.innerText = i.innerText.replace('Hide', 'Show');
                }

                for (var i of fileCollapse) {
                    var fileCollapseTarget = Collapse.getInstance(i) ? Collapse.getInstance(i) : new Collapse(i, { toggle: false });
                    
                    fileCollapseTarget.hide();
                }  
            }
            
        }, false);
    }
    
    // Initialize Text Editor
    var textEditors = document.querySelectorAll('.text-editor');
    if (textEditors) {
        textEditors.forEach(function (el) {
            var placeholder;

            switch (el.id) {
                case 'NewReviewComments':
                    placeholder = 'Add to Review Comments';
                    break;
                case 'ExemptedFromVerificationReason':
                    placeholder = 'Verification Exempted Reason';
                    break;
                case 'ExemptedFromScannerReason':
                    placeholder = 'Scanner Exempted Reason';
                    break;
                case 'ExemptedFromValidatorReason': 
                    placeholder = 'Validator Exempted Reason';
            }

            var easymde = new EasyMDE({
                element: el,
                autoDownloadFontAwesome: false,
                placeholder: placeholder,
                toolbar: ["bold", "italic", "heading", "strikethrough", "|", "quote", "unordered-list", "ordered-list", "code", "|", "link", "image", "|", "side-by-side", "fullscreen", "|", "preview"]
            });

            easymde.render();

            var btnPreview = document.createElement('SPAN');
            btnPreview.classList.add('ms-1');
            btnPreview.innerText = ' Preview';

            el.nextSibling.querySelector('button.preview').classList.add('fw-bold', 'text-primary');
            el.nextSibling.querySelector('button.preview').style.width = "90px";
            el.nextSibling.querySelector('.fa-eye').after(btnPreview);

            // Below snippet added to allow content to be shown inside of collapsed or hidden items without having to click on the textarea. See https://github.com/Ionaru/easy-markdown-editor/issues/208#issuecomment-645656131.
            easymde.element.cmirror = easymde.codemirror;
        });
    }

    // Below snippet added to allow content to be shown inside of collapsed or hidden items without having to click on the textarea. See https://github.com/Ionaru/easy-markdown-editor/issues/208#issuecomment-645656131.
    var textEditorRefresh = document.querySelectorAll('.text-editor-refresh');
    if (textEditorRefresh) {
        textEditorRefresh.forEach(function (el) {
            el.addEventListener('shown.bs.collapse', function () {
                if (!el.classList.contains('.text-editor-refreshed')) {
                    document.querySelector('#' + el.id + ' textarea').cmirror.refresh();
                    document.getElementById(el.id).classList.add('text-editor-refreshed');
                }
            });
        });
    }

    // Hide comment instructions
    var commentInstructions = document.getElementById('instructions');
    if (commentInstructions) {
        var cookieCommentInstructionsName = 'chocolatey_hide_comment_instructions';

        commentInstructions.addEventListener('hidden.bs.collapse', function () {
            if (!getCookie('chocolatey_hide_comment_instructions')) {
                document.cookie = cookieCommentInstructionsName + '=true;path=/';
            }
        });
        commentInstructions.addEventListener('shown.bs.collapse', function () {
            if (getCookie('chocolatey_hide_comment_instructions')) {
                document.cookie = cookieCommentInstructionsName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            }
        });
    }
})();
