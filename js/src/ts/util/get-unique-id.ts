export const getUniqueId = (baseId: string, idCounts: Record<string, number>) => {
    if (!idCounts[baseId]) {
        idCounts[baseId] = 1;
        return baseId;
    } else {
        const newId = `${baseId}-${idCounts[baseId]}`;
        idCounts[baseId]++;
        return newId;
    }
};
