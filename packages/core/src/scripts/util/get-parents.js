export const getParents = el => {
    const parents = [];
    let node = el;

    while (node != document) {
        parents.push(node.parentNode);
        node = node.parentNode;
    }

    return parents;
};
