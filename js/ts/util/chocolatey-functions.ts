// Trims off spaces from the beginning and end of a string and replaces it
export const trimString = (item: { innerHTML: string; }) => {
    item.innerHTML = item.innerHTML.trim();
};
