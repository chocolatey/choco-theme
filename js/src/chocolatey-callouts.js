(() => {
    const htmlCallouts = document.querySelectorAll('.callout');
    const markdownCallouts = document.querySelectorAll('blockquote');

    const applyCalloutStyles = calloutType => {
        calloutType.forEach(callout => {
            let calloutHeader = callout.querySelector('.callout-header');

            if (callout.nodeName === 'BLOCKQUOTE') {
                if (callout.querySelector('p:first-child') && callout.querySelector('p:first-child').textContent.includes(':choco-')) {
                    calloutHeader = callout.querySelector('p:first-child');
                }
            }

            if (calloutHeader) {
                let calloutIcon = '';
                let calloutIconColor = '';
                let calloutHeaderText = calloutHeader.textContent;

                if (callout.classList.contains('callout-success') || calloutHeaderText.includes(':choco-success:')) {
                    calloutIconColor = 'success';
                    calloutIcon = 'check';
                    callout.classList.add('callout-success');
                } else if (callout.classList.contains('callout-danger') || calloutHeaderText.includes(':choco-danger:')) {
                    calloutIconColor = 'danger';
                    calloutIcon = 'xmark';
                    callout.classList.add('callout-danger');
                } else if (callout.classList.contains('callout-warning') || calloutHeaderText.includes(':choco-warning:')) {
                    calloutIconColor = 'warning';
                    calloutIcon = 'triangle-exclamation';
                    callout.classList.add('callout-warning');
                } else {
                    calloutIconColor = 'info';
                    calloutIcon = 'info';
                    callout.classList.add('callout-info');
                }

                if (calloutHeaderText.includes(':choco-')) {
                    calloutHeaderText = calloutHeaderText.replace(/:.+?:/, '').trim();
                }

                const calloutHeaderContainer = `<div class="callout-header d-flex align-items-center"><span class="flex-shrink-0 text-bg-${calloutIconColor} h-px-30 w-px-30 d-flex align-items-center justify-content-center rounded me-3"><span class="fa-solid fa-${calloutIcon}"></span></span><p class="lead"><strong>${calloutHeaderText}</strong></p></div>`;

                calloutHeader.outerHTML = calloutHeaderContainer;
            }
        });
    };

    applyCalloutStyles(htmlCallouts);
    applyCalloutStyles(markdownCallouts);
})();
