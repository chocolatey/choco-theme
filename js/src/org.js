(() => {
    // JS to be only used on chocolatey.org
    // Show modal on tempdata "message"
    const tempData = document.getElementById('tempdata-message');
    if (tempData) {
        const tempDataModal = bootstrap.Modal.getOrCreateInstance(tempData, { keyboard: false });

        tempDataModal.show();
    }

    // Stops video from playing when modal is closed
    const videoModal = document.querySelectorAll('.video-story .modal');
    if (videoModal) {
        videoModal.forEach(el => {
            const iFrame = el.querySelector('iframe');

            if (iFrame) {
                el.addEventListener('show.bs.modal', () => {
                    iFrame.setAttribute('src', iFrame.getAttribute('data-src'));
                });

                el.addEventListener('hide.bs.modal', () => {
                    iFrame.setAttribute('src', '');
                });
            }
        });
    }

    // Email Sent Success Modal
    const emailSuccess = document.getElementById('Modal_EmailSuccess');
    if (emailSuccess && window.location.search.includes('emailsuccess=true')) {
        const emailSuccessModal = bootstrap.Modal.getOrCreateInstance(emailSuccess, { keyboard: false, backdrop: 'static' });

        emailSuccessModal.show();

        emailSuccess.addEventListener('hidden.bs.modal', () => {
            emailSuccessModal.dispose();
        });
    }

    const speakerBtnContainers = document.querySelectorAll('.list-chocolatey-fest-speaker');
    for (const i of speakerBtnContainers) {
        const speakerModalBtns = i.querySelectorAll('.btn-link');

        speakerModalBtns.forEach((value, i) => {
            if (i >= 1) {
                const parentDiv = value.parentNode;
                const divider = document.createElement('span');

                divider.innerText = '&';
                divider.classList.add('btn', 'btn-sm', 'disabled', 'text-theme', 'ms-n1');

                parentDiv.insertBefore(divider, value);
            }
        });
    }
})();
