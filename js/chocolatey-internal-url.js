(function() {
    jQuery(function () {
        jQuery("code:contains('STEP 3 URL')").html(function (_, html) {
            jQuery(this).parent().next().remove();
            return html.replace(/(STEP 3 URL)/g, '<span class="stepThreeUrl">$1</span>');
        });
        jQuery('[id*="stepThreeUrl"]').keyup(function () {
            var value = jQuery(this).val();
            var defaultUrl = "http://internal/odata/repo";
    
            jQuery('.stepThreeUrl').text(value);
            if (value == 0) {
                jQuery('.stepThreeUrl').text(defaultUrl);
                jQuery('.stepThree .tab-pane').prepend('<p class="step-three-danger text-danger fw-bold small">You must enter your internal repository url in Step 3 before proceeding.</p>');
                jQuery('#install-step4 .code-toolbar').prepend('<p class="step-three-danger text-danger fw-bold small">You must enter your internal repository url in Step 3 before proceeding.</p>');
            }
            else {
                jQuery('.step-three-danger').remove();
            }
        }).keyup();
    });
})();