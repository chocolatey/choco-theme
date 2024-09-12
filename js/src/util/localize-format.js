export const localizeFormat = (str, ...args) => {
    let formattedStr = str;
    for (let i = args.length - 1; i >= 0; i--) {
        formattedStr = formattedStr.replace(new RegExp(`\\{${i}\\}`, 'gm'), args[i]);
    }
    return formattedStr;
};
