export const findBannerAccentColor = accentColorKey => {
    let accentColor = '';

    switch (accentColorKey) {
        case 0:
            accentColor = 'red';
            break;
        case 1:
            accentColor = 'yellow';
            break;
        case 2:
            accentColor = 'green';
            break;
        case 3:
            accentColor = 'blue';
            break;
        case 4:
            accentColor = 'purple';
            break;
        case 5:
            accentColor = 'orange';
            break;
        case 6:
            accentColor = 'pink';
            break;
        default:
            accentColor = accentColorKey;
            break;
    }

    return accentColor;
};
