export const toId = (str: string): string => {
    const id = str
        .toLowerCase()
        .replaceAll(' ', '-')           // Replace all spaces with hyphens
        .replaceAll('.', '')            // Remove all dots
        .replaceAll('@', '')            // Remove all @ signs
        .replaceAll('/', '')            // Remove all / signs
        .replace(/^-+|-+$/g, '');       // Trim leading/trailing hyphens

    // if (!/^[a-z]/.test(id)) id = `id-${id}`; // Ensure starts with letter

    return id;
};
