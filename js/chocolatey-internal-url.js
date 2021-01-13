(function() {
    $(function () {
        $("code:contains('STEP 3 URL')").html(function (_, html) {
            $(this).parent().next().remove();
            return html.replace(/(STEP 3 URL)/g, '<span class="stepThreeUrl">$1</span>');
        });
        $('[id*="stepThreeUrl"]').keyup(function () {
            var value = $(this).val();
            var defaultUrl = "http://internal/odata/repo";
    
            $('.stepThreeUrl').text(value);
            if (value == 0) {
                $('.stepThreeUrl').text(defaultUrl);
                $('.stepThree .tab-pane').prepend('<p class="step-three-danger text-danger fw-bold small">You must enter your internal repository url in Step 3 before proceeding.</p>');
                $('#install-step4 .code-toolbar').prepend('<p class="step-three-danger text-danger fw-bold small">You must enter your internal repository url in Step 3 before proceeding.</p>');
            }
            else {
                $('.step-three-danger').remove();
            }
        }).keyup();
    });
})();