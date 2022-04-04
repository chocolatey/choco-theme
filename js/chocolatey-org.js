(function() {
    // JS to be only used on chocolatey.org
    // Show modal on tempdata "message"
    var tempData = document.getElementById('tempdata-message');
    if (tempData) {
        var tempDataModal = Modal.getInstance(tempData) ? Modal.getInstance(tempData) : new Modal(tempData, { keyboard: false });

        tempDataModal.show();
    }

    // Stops video from playing when modal is closed
    var videoModal = document.querySelectorAll('.video-story .modal');
    if (videoModal) {
        videoModal.forEach(function (el) {
            var iFrame = el.querySelector('iframe');

            if (iFrame) {
                el.addEventListener('show.bs.modal', function () {
                iFrame.setAttribute('src', iFrame.getAttribute('data-src'));
                });

                el.addEventListener('hide.bs.modal', function () {
                    iFrame.setAttribute('src', '');
                });
            }
        });
    }

    // Email Sent Success Modal
    var emailSuccess = document.getElementById('Modal_EmailSuccess')
    if (emailSuccess && window.location.search.includes('emailsuccess=true')) {
        var emailSuccessModal = Modal.getInstance(emailSuccess) ? Modal.getInstance(emailSuccess) : new Modal(emailSuccess, { keyboard: false, backdrop: 'static' });

        emailSuccessModal.show();

        emailSuccess.addEventListener('hidden.bs.modal', function () {
            emailSuccessModal.dispose();
        });
    }

    var speakerBtnContainers = document.querySelectorAll('.list-chocolatey-fest-speaker');
    for (var i of speakerBtnContainers) {
        var speakerModalBtns = i.querySelectorAll('.btn-link');

        speakerModalBtns.forEach(function (value, i) {
            if (i >= 1) {
                let parentDiv = value.parentNode,
                    divider = document.createElement('span');

                divider.innerText = '&';
                divider.classList.add('btn', 'btn-sm', 'disabled', 'text-theme', 'ms-n1');

                parentDiv.insertBefore(divider, value)
            }
        });
    }
})();