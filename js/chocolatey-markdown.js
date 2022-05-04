(function() {
    // Wraps markdown task list items for styling
    var taskListItems = document.querySelectorAll('.task-list-item [type="checkbox"]');

    if (taskListItems) {
        taskListItems.forEach(function (el) {
            el.classList.add('form-check-input');
            el.outerHTML = '<div class="form-check">' + el.outerHTML + '<label class="form-check-label"></label></div>';
        });
    }

    // Style markdown blockquotes with emojis
    var calloutBlockquotes = document.querySelectorAll('blockquote');

    if (calloutBlockquotes) {
        calloutBlockquotes.forEach(function (el) {
            var warningEmoji = "⚠️";
    
            if (el.innerText.includes(warningEmoji)) {
                // Contains warning emoji
                el.classList.add('blockquote-warning');
            }
        });
    }
    
})();