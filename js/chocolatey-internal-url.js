(function() {
    jQuery(function () {
        var defaultUrl = 'http://internal/odata/repo',
            containsInternalRepoUrl = document.querySelectorAll('.contains-internal-repo-url'),
            internalRepoUrls = document.querySelectorAll('.internalRepoUrlInput'),
            deploymentMethods = document.querySelectorAll('[data-deployment-method]');

        jQuery("code:contains('INTERNAL REPO URL')").html(function (_, html) {
            return html.replace(/(INTERNAL REPO URL)/g, '<span class="internalRepoUrl">' + defaultUrl + '</span>');
        });

        internalRepoUrls.forEach(function (el) {
            if (getCookie('internal_repo_url')) {
                for (var i = 0; i < internalRepoUrls.length; i++) {
                    internalRepoUrls[i].value = getCookie('internal_repo_url');
                }
            }

            internalUrlWarningAndCopy();

            el.addEventListener('keyup', function (e) {
                document.cookie = 'internal_repo_url=' + el.value + '; path=/';
                internalUrlWarningAndCopy();
            });

            function internalUrlWarningAndCopy() {
                var internalRepoUrl = document.querySelectorAll('.internalRepoUrl');

                for (var i = 0; i < internalRepoUrls.length; i++) {
                    internalRepoUrls[i].value = el.value;
                }

                if (el.value) {
                    for (var i = 0; i < internalRepoUrl.length; i++) {
                        internalRepoUrl[i].innerHTML = el.value;
                    }

                    for (var i of containsInternalRepoUrl) {
                        if (i.querySelector('.internal-repo-url-warning')) {
                            i.querySelector('.internal-repo-url-warning').remove();
                        }
                    }
                } else {
                    for (var i = 0; i < internalRepoUrl.length; i++) {
                        internalRepoUrl[i].innerHTML = defaultUrl;
                    }
                    
                    for (var i of containsInternalRepoUrl) {
                        if (!i.querySelector('.internal-repo-url-warning')) {
                            var calloutNoUrl = document.createElement('p');

                            calloutNoUrl.classList.add('internal-repo-url-warning', 'callout', 'callout-danger', 'shadow-none', 'text-danger', 'fw-bold', 'small');
                            calloutNoUrl.innerText = 'You must enter your internal repository url above before proceeding.';

                            i.prepend(calloutNoUrl);
                        }
                    }
                }
            }
        });

        selectDeploymentMethodTab();
        pageScriptType();
        copyCodeBlocks();

        deploymentMethods.forEach(function (el) {
            el.addEventListener('click', function (e) {
                pageScriptType();
            }, false);
        });

        function pageScriptType() {
            var installStepsGeneric = document.querySelector('.install-steps-generic');

            if (getCookie('deployment_method') == "individual" || !getCookie('deployment_method')) {
                var packagePageIndividual = document.querySelector('#individual-method-tab');

                if (packagePageIndividual) {
                    var packagePageIndividualTab = Tab.getInstance(packagePageIndividual) ? Tab.getInstance(packagePageIndividual) : new Tab(packagePageIndividual, { toggle: false });
    
                    packagePageIndividualTab.show();
                }
            } else {
                var packagePageOrganization = document.querySelector('#organization-method-tab');

                if (packagePageOrganization) {
                    var packagePageOrganizationTab = Tab.getInstance(packagePageOrganization) ? Tab.getInstance(packagePageOrganization) : new Tab(packagePageOrganization, { toggle: false });
    
                    packagePageOrganizationTab.show();
                }
            }

            // Install page specific
            if (installStepsGeneric) {
                if (getCookie('deployment_method') == "chef" || getCookie('deployment_method') == "puppet") {
                    installStepsGeneric.classList.add('d-none');
                } else {
                    installStepsGeneric.classList.remove('d-none');
                }
            }
        }
    });
})();