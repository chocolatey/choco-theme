import { selectDeploymentMethodTab } from '@choco-core/util/select-deployment-method-tab';
import { copyCodeBlocks } from '@choco-core/util/copy-code-blocks';
import { getCookie } from '@choco-core/util/get-cookie';

document.addEventListener('DOMContentLoaded', () => {
    const defaultUrl = 'http://internal/odata/repo';
    const containsInternalRepoUrl = document.querySelectorAll('.contains-internal-repo-url');
    const deploymentMethods = document.querySelectorAll('[data-deployment-method]');
    const internalRepoUrls = document.querySelectorAll('.internal-repo-url-input');

    for (const i of containsInternalRepoUrl) {
        i.innerHTML = i.innerHTML.replace(/(INTERNAL REPO URL)/g, `<span class="internalRepoUrl">${defaultUrl}</span>`);
    }

    internalRepoUrls.forEach(el => {
        if (getCookie('internal_repo_url')) {
            for (const repoUrl of internalRepoUrls) {
                repoUrl.value = getCookie('internal_repo_url');
            }
        }

        const internalUrlWarningAndCopy = () => {
            const internalRepoUrl = document.querySelectorAll('.internalRepoUrl');

            for (const repoUrl of internalRepoUrls) {
                repoUrl.value = el.value;
            }

            if (el.value) {
                for (const repoUrl of internalRepoUrl) {
                    repoUrl.innerHTML = el.value;
                }

                for (const i of containsInternalRepoUrl) {
                    if (i.querySelector('.internal-repo-url-warning')) {
                        i.querySelector('.internal-repo-url-warning').remove();
                    }
                }
            } else {
                for (const repoUrl of internalRepoUrl) {
                    repoUrl.innerHTML = defaultUrl;
                }

                for (const i of containsInternalRepoUrl) {
                    if (!i.querySelector('.internal-repo-url-warning')) {
                        const calloutNoUrl = document.createElement('p');

                        calloutNoUrl.classList.add('internal-repo-url-warning', 'callout', 'callout-danger', 'text-danger', 'fw-bold', 'small');
                        calloutNoUrl.innerText = 'You must enter your internal repository url above before proceeding.';

                        i.prepend(calloutNoUrl);
                    }
                }
            }
        };

        internalUrlWarningAndCopy();

        el.addEventListener('keyup', () => {
            document.cookie = `internal_repo_url=${el.value}; path=/`;
            internalUrlWarningAndCopy();
        });
    });

    const pageScriptType = () => {
        const installStepsGeneric = document.querySelector('.install-steps-generic');

        if (getCookie('deployment_method') == 'individual' || !getCookie('deployment_method')) {
            const packagePageIndividual = document.querySelector('#individual-method-tab');

            if (packagePageIndividual) {
                const packagePageIndividualTab = bootstrap.Tab.getOrCreateInstance(packagePageIndividual, { toggle: false });

                packagePageIndividualTab.show();
            }
        } else {
            const packagePageOrganization = document.querySelector('#organization-method-tab');

            if (packagePageOrganization) {
                const packagePageOrganizationTab = bootstrap.Tab.getOrCreateInstance(packagePageOrganization, { toggle: false });

                packagePageOrganizationTab.show();
            }
        }

        // Install page specific
        if (installStepsGeneric) {
            if (getCookie('deployment_method') == 'chef' || getCookie('deployment_method') == 'puppet') {
                installStepsGeneric.classList.add('d-none');
            } else {
                installStepsGeneric.classList.remove('d-none');
            }
        }
    };

    deploymentMethods.forEach(el => {
        el.addEventListener('click', () => pageScriptType(), false);
    });

    selectDeploymentMethodTab();
    pageScriptType();
    copyCodeBlocks();
});
