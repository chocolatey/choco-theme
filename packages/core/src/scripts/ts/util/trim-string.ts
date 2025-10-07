export const trimString = (item: { innerHTML: string; }) => {
    item.innerHTML = item.innerHTML.trim();
};
