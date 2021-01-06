(function() {
    // Wraps markdown task list items for styling
    $.each($('.task-list-item [type="checkbox"]'), function () {
        $(this)
            .addClass('form-check-input')
            .wrap('<div class="form-check"></div>')
            .after('<label class="form-check-label"></label>');
    });

    // Style markdown blockquotes with emojis
    $.each($('blockquote'), function () {
        var warningEmoji = "⚠️";

        if ($(this).text().indexOf(warningEmoji) >= 0) {
            // Contains warning emoji
            $(this).addClass('blockquote-warning');
        }
    });
})();