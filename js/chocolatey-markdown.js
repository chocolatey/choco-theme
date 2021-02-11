(function() {
    // Wraps markdown task list items for styling
    jQuery.each(jQuery('.task-list-item [type="checkbox"]'), function () {
        jQuery(this)
            .addClass('form-check-input')
            .wrap('<div class="form-check"></div>')
            .after('<label class="form-check-label"></label>');
    });

    // Style markdown blockquotes with emojis
    jQuery.each(jQuery('blockquote'), function () {
        var warningEmoji = "⚠️";

        if (jQuery(this).text().indexOf(warningEmoji) >= 0) {
            // Contains warning emoji
            jQuery(this).addClass('blockquote-warning');
        }
    });
})();