if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && location.hostname !== "") {
    jQuery(getStats);
}

function getStats(currData) {
    currData = currData || {};
    jQuery.get('https://community.chocolatey.org/stats', function(data) {
        var section = jQuery('section.aggstats');
        section.show();
        update(data, currData, 'UniquePackages');
        update(data, currData, 'Downloads');
        update(data, currData, 'TotalPackages');
        update(data, currData, 'PackagesReadyForReviewModeration');
        update(data, currData, 'TotalPackagesInModeration');
        update(data, currData, 'AverageModerationWaitTimeHours');
        update(data, currData, 'PackagesPassingVerification');
        update(data, currData, 'UpToDatePackages');
        update(data, currData, 'OlderThanOneYearPackages');
    });
    setTimeout(function () { getStats(currData); }, 30000);
}

function update(data, currData, key) {
    var currentValue = currData[key] || '';
    var value = data[key].toString();
    var self = jQuery('#' + key);
    
    if (currentValue != value) {
        currData[key] = value;
        var length = value.length;
        var currLength = currentValue.length;
        var items = self.children('span');

        if (currLength > length) {
            items.slice(0, currLength - length).remove();
            items = items.slice(currLength - length);
        }

        if (currLength) {
            // Do not animate the first time around.
            jQuery.each(value.split('').reverse(), function (i, e) {
                var c = (i <= currLength) ? currentValue.charAt(currLength - i - 1) : '';
                if (c != e) {
                    var el = jQuery(items[length - i - 1]);
                    animateEl(el, e);
                }
            });
        }
        if (currLength < length) {
            var i;
            for (i = currLength; i < length; i++) {
                self.prepend('<span>' + value.charAt(length - i - 1) + '</span>');
            }
            items = self.children('span');
        }
    }
}

function animateEl(el, v) {
    v = v || '';
    var parent = el.parent();
    el.stop(true, true).animate({ top: 0.3 * parseInt(parent.height()) }, 350, 'linear', function () {
        jQuery(this).html(v).css({ top: -0.8 * parseInt(parent.height()) }).animate({ top: 0 }, 350, 'linear');
    });
}
