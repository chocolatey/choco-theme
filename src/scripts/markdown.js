(() => {
    // Wraps markdown task list items for styling
    const taskListItems = document.querySelectorAll('.task-list-item [type="checkbox"]');

    if (taskListItems) {
        taskListItems.forEach(el => {
            el.classList.add('form-check-input');
            el.outerHTML = `<div class="form-check">${el.outerHTML}<label class="form-check-label"></label></div>`;
        });
    }
})();
