// Package List 
// Package Preferences
(function() {
    var cookieDisclaimerName = 'chocolatey_hide_packages_disclaimer',
        preferenceGridView = jQuery('#preferenceGridView'),
        gridView = getCookie("preferenceGridView"),
        preferenceModView = jQuery('#preferenceModView'),
        modView = getCookie("preferenceModView");

    // Community Disclaimer
    if (!getCookie(cookieDisclaimerName)) {
        // Display modal
        var disclaimer = document.getElementById('package-disclaimer')
        var disclaimerModal = Modal.getInstance(disclaimer) ? Modal.getInstance(disclaimer) : new Modal(disclaimer, { keyboard: false, backdrop: 'static' });
        
        disclaimerModal.show();

        disclaimer.addEventListener('hidden.bs.modal', function () {
            document.cookie = cookieDisclaimerName + '=true;' + setCookieExpirationNever() + 'path=/;';
        });
    }

    // Show preferred package layout
    if (gridView) {
        preferenceGridView.prop("checked", true);
    }
    if (modView) {
        preferenceModView.prop("checked", true);
    }

    // Save Preferences
    jQuery('.btn-preferences').click(function () {
        if (preferenceGridView.prop("checked") == true) {
            document.cookie = "preferenceGridView=true";
        }
        else if (preferenceGridView.prop("checked") == false) {
            document.cookie = "preferenceGridView=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        if (preferenceModView.prop("checked") == true) {
            document.cookie = "preferenceModView=true";
        }
        else if (preferenceModView.prop("checked") == false) {
            document.cookie = "preferenceModView=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        location.reload();
    });

    // Package warning callout
    jQuery('#callout-package-warning a[data-bs-toggle="collapse"]').click(function () {
        document.cookie = "chocolatey_hide_packages_warning=true";
    });

    // Package Filtering
    jQuery("#sortOrder,#prerelease,#moderatorQueue,#moderationStatus").change(function () {
        jQuery(this).closest("form").submit();
    });

    // Package Details
    // Prism for Description section
    // Description Area
    if (jQuery('#description pre').length) {
        jQuery('#description').find("pre").addClass('line-numbers border').wrapInner('<code class="language-powershell"></code>');
        Prism.highlightAllUnder(jQuery('#description')[0]);
    }

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
    var fileCollapse = jQuery('.moderation-view [class*="file-path-"]');
    // Files hidden on load and toggled
    jQuery('[class*="file-path-"]').on('show.bs.collapse', function () {
        if (!jQuery(this).find('pre').hasClass('line-numbers')) {
            var langBrush = jQuery(this).parent().find('span').first().text();
            if (langBrush.indexOf("\\") >= 0) {
                // Find everything after last \ if there is one
                langBrush = langBrush.substr(langBrush.lastIndexOf("\\") + 1);
            }
            // Find everything after first . (file extension)
            langBrush = langBrush.substring(langBrush.indexOf('.') + 1);
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
            jQuery(this).find('pre').addClass('line-numbers').find("code").addClass('language-' + langBrush);
            Prism.highlightElement(jQuery(this).find('code')[0]);
        }
    });
    // Expand or Show all files
    jQuery('#files .btn-collapse-files').click(function () {
        var btnCollapseAll = jQuery(this);
        var btnCollapseAllText = btnCollapseAll.text();
        if (btnCollapseAll.hasClass('btn-success')) {
            btnCollapseAll.text(btnCollapseAllText.replace('Expand', 'Collapse'));
            btnCollapseAll.removeClass('btn-success').addClass('btn-danger');
            jQuery('#files .btn:contains("Show")').html('Hide');
            fileCollapse.collapse('show');
        } else if (btnCollapseAll.hasClass('btn-danger')) {
            btnCollapseAll.text(btnCollapseAllText.replace('Collapse', 'Expand'));
            btnCollapseAll.removeClass('btn-danger').addClass('btn-success');
            jQuery('#files .btn:contains("Hide")').html('Show');
            fileCollapse.collapse('hide');
        }
    });
    
    // Initialize Text Editor
    jQuery('.text-editor').each(function () {
        var placeholder = "";

        if (jQuery(this).is('#NewReviewComments')) {
            placeholder = "Add to Review Comments";
        }
        else if (jQuery(this).is('#ExemptedFromVerificationReason')) {
            placeholder = "Verification Exempted Reason";
        }
        else if (jQuery(this).is('#ExemptedFromScannerReason')) {
            placeholder = "Scanner Exempted Reason";
        }
        else if (jQuery(this).is('#ExemptedFromValidatorReason')) {
            placeholder = "Validator Exempted Reason";
        }
        var easymde = new EasyMDE({
            element: this,
            autoDownloadFontAwesome: false,
            placeholder: placeholder,
            toolbar: ["bold", "italic", "heading", "strikethrough", "|", "quote", "unordered-list", "ordered-list", "code", "|", "link", "image", "|", "side-by-side", "fullscreen", "|", "preview"]
        });
        easymde.render();
        jQuery('<span class="ms-1"> Preview</span>').insertAfter(jQuery(this).next().find('.fa-eye')).parent().addClass('fw-bold text-primary').attr('style', 'width:90px');
        // Below snippet added to allow content to be shown inside of collapsed or hidden items without having to click on the textarea. See https://github.com/Ionaru/easy-markdown-editor/issues/208#issuecomment-645656131.
        easymde.element.cmirror = easymde.codemirror;
    });
    // Below snippet added to allow content to be shown inside of collapsed or hidden items without having to click on the textarea. See https://github.com/Ionaru/easy-markdown-editor/issues/208#issuecomment-645656131.
    jQuery('.text-editor-refresh').each(function () {
        jQuery(this).on('shown.bs.collapse', function () {
            if (!jQuery(this).hasClass('text-editor-refreshed')) {
                var easymdeRefresh = jQuery(this).attr('id');

                jQuery('#' + easymdeRefresh + ' textarea')[0].cmirror.refresh();
                jQuery('#' + easymdeRefresh).addClass('text-editor-refreshed');
            }
        });
    });

    // Hide comment instructions
    jQuery('#instructions').on('hidden.bs.collapse', function () {
        if (!getCookie('chocolatey_hide_comment_instructions')) {
            document.cookie = "chocolatey_hide_comment_instructions=true;path=/";
        }
    });
    jQuery('#instructions').on('shown.bs.collapse', function () {
        if (getCookie('chocolatey_hide_comment_instructions')) {
            document.cookie = "chocolatey_hide_comment_instructions=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    });
})();