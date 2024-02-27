(() => {
    // Wraps markdown task list items for styling
    const taskListItems = document.querySelectorAll('.task-list-item [type="checkbox"]');

    if (taskListItems) {
        taskListItems.forEach(el => {
            el.classList.add('form-check-input');
            el.outerHTML = `<div class="form-check">${el.outerHTML}<label class="form-check-label"></label></div>`;
        });
    }

    // Style markdown blockquotes with emojis
    const calloutBlockquotes = document.querySelectorAll('blockquote');

    if (calloutBlockquotes) {
        calloutBlockquotes.forEach(el => {
            const warningEmoji = '⚠️';
            const exclamationEmoji = '❗';

            if (el.innerText.includes(warningEmoji)) {
                el.classList.add('blockquote-warning');
            } else if (el.innerText.includes(exclamationEmoji)) {
                el.classList.add('blockquote-danger');
            }
        });
    }
})();
