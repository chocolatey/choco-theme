export const popoverDismissible = () => {
    const popovers = document.querySelectorAll('.popover-dismissible');

    // eslint-disable-next-line no-unused-vars
    const popoversInit = [...popovers].map(popover => new bootstrap.Popover(popover, { trigger: 'focus' }));
};
