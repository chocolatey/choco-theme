export const outerHeightTrue = el => {
    const rect = el.getBoundingClientRect();

    return rect.height;
};
