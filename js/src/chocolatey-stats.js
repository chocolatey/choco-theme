import jQuery from 'jquery';

const animateStats = (el, v) => {
    v = v || '';
    const parent = el.parent();

    el.stop(true, true).animate({ top: 0.3 * parseInt(parent.height()) }, 350, 'linear', () => {
        jQuery(this).html(v).css({ top: -0.8 * parseInt(parent.height()) }).animate({ top: 0 }, 350, 'linear');
    });
};

const updateStats = (data, currData, key) => {
    const currentValue = currData[key] || '';
    const value = data[key].toString();
    const self = jQuery(`#${key}`);

    if (currentValue != value) {
        currData[key] = value;
        const length = value.length;
        const currLength = currentValue.length;

        let items = self.children('span');

        if (currLength > length) {
            items.slice(0, currLength - length).remove();
            items = items.slice(currLength - length);
        }

        if (currLength) {
            // Do not animate the first time around.
            jQuery.each(value.split('').reverse(), (index, element) => {
                const c = (index <= currLength) ? currentValue.charAt(currLength - index - 1) : '';

                if (c != element) {
                    const el = jQuery(items[length - index - 1]);

                    animateStats(el, element);
                }
            });
        }
        if (currLength < length) {
            for (let i = currLength; i < length; i++) {
                self.prepend(`<span>${value.charAt(length - i - 1)}</span>`);
            }

            items = self.children('span');
        }
    }
};

const getStats = currData => {
    currData = currData || {};

    jQuery.get('https://community.chocolatey.org/stats', data => {
        const section = jQuery('section.aggstats');

        section.show();

        updateStats(data, currData, 'UniquePackages');
        updateStats(data, currData, 'Downloads');
        updateStats(data, currData, 'TotalPackages');
        updateStats(data, currData, 'PackagesReadyForReviewModeration');
        updateStats(data, currData, 'TotalPackagesInModeration');
        updateStats(data, currData, 'AverageModerationWaitTimeHours');
        updateStats(data, currData, 'PackagesPassingVerification');
        updateStats(data, currData, 'UpToDatePackages');
        updateStats(data, currData, 'OlderThanOneYearPackages');
    });

    setTimeout(() => { getStats(currData); }, 30000);
};

if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1' && location.hostname !== '') {
    jQuery(getStats);
}
