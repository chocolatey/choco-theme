export const removeLineBreaks = str => {
    return str.split(/\r?\n/) // Split input text into an array of lines
        .filter(line => line.trim() !== '') // Filter out lines that are empty or contain only whitespace
        .join('\n'); // Join line array into a string
};
