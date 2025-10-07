import { removeLineBreaks } from '@choco-core/util/remove-line-breaks';
import { selectDeploymentMethodTab } from '@choco-core/util/select-deployment-method-tab';
import { copyCodeBlocks } from '@choco-core/util/copy-code-blocks';
import { getCookie } from '@choco-core/util/get-cookie';

(() => {
    const packages = localStorage.packageList === undefined ? [] : JSON.parse(localStorage.packageList);
    const modalBuilder = document.getElementById('modalScriptBuilder');
    const modalBuilderInstance = bootstrap.Modal.getOrCreateInstance(modalBuilder, { keyboard: false, backdrop: 'static' });
    const deploymentMethods = document.querySelectorAll('[data-deployment-method]');
    const builderStep3 = document.querySelector('#builder-step-3-tab');
    const builderStep4 = document.querySelector('#builder-step-4-tab');
    const builderStep5 = document.querySelector('#builder-step-5-tab');
    const builderIndividual = document.querySelector('.builder-individual');
    const builderOrganization = document.querySelector('.builder-organization');

    const builderButtonRemove = builderButton => {
        if (builderButton.classList.contains('btn-builder-text')) {
            builderButton.innerHTML = '<span class="fa-solid fa-circle-minus" alt="Remove from Script Builder"></span> Remove from Script Builder';
        } else {
            builderButton.innerHTML = '<span class="fa-solid fa-circle-minus" alt="Remove from Script Builder"></span>';
        }

        builderButton.classList.remove('btn-success');
        builderButton.classList.add('btn-danger');
    };

    const appendPackage = (packageTitle, packageValue, packageIdentity, packageVersion, packageUrl, packageImage, packageImagePath) => {
        const builderStorage = document.querySelectorAll('.storage');

        for (const i of builderStorage) {
            i.innerHTML += `<hr />
                <div id="${packageIdentity}" class="d-flex flex-row align-items-start storage-row ${packageIdentity}">
                <div class="ratio ratio-1x1 package-image-header">
                <div class="d-flex flex-fill align-items-center justify-content-center package-icon">
                <img class="package-image" src="${packageImagePath}${packageImage}" height="30" width="30" onerror="this.src='/Content/Images/packageDefaultIcon-50x50.png'">
                </div>
                </div>
                <div class="mx-2">
                <a class="text-reset btn-link mb-0 h5 text-break" href="/packages/${packageUrl}/${packageVersion}">${packageTitle}</a>
                <p class="mb-0"><small>${packageVersion}</small></p>
                </div>
                <button class="btn btn-sm btn-builder btn-danger ms-auto" value="${packageValue}" title="${packageTitle}" version="${packageVersion}" image="${packageImage}"><span class="fa-solid fa-circle-minus"></span></button>
                </div>`;
        }
    };

    const findPackagePath = packageValue => {
        if (packageValue.indexOf('--') >= 0) {
            return packageValue.substr(0, packageValue.indexOf('--')).trim();
        }

        return packageValue;
    };

    const findImagePath = imageTitle => {
        if (imageTitle.includes('packageDefaultIcon')) {
            return '/Content/Images/';
        }

        return '/content/packageimages/';
    };

    // Packages in storage on load
    if (packages.length > 0) {
        for (const i in packages) {
            const getStorage = packages[i].split(' , ');
            const storageTitle = getStorage[0];
            const storageVersion = getStorage[1];
            const storageImage = getStorage[2];
            const storageValue = getStorage[3];
            const packageUrl = findPackagePath(storageValue);
            const imageUrl = findImagePath(storageImage);
            const packageButtons = document.querySelectorAll(`.btn-builder[value="${storageValue}"]`);
            const storageIdentity = `package-${storageTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')}-${storageVersion.replace(/\./gi, '')}`;

            for (const el of packageButtons) {
                builderButtonRemove(el);
            }

            // Generate Package List
            appendPackage(storageTitle, storageValue, storageIdentity, storageVersion, packageUrl, storageImage, imageUrl);
        }
    }

    const countPackages = () => {
        const notificationBadge = document.querySelector('.notification-badge-builder');
        const builderViewBtn = document.querySelector('.btn-view-builder');

        notificationBadge.innerHTML = localStorage.packageList ? JSON.parse(localStorage.packageList).length : 0;

        if (packages.length > 0) {
            builderViewBtn.classList.remove('d-none');
        } else {
            const offcanvasBuilder = document.getElementById('navScriptBuilder');
            const offcanvasBuilderInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasBuilder, { toggle: false });

            modalBuilderInstance.hide();
            offcanvasBuilderInstance.hide();
            builderViewBtn.classList.add('d-none');
        }
    };

    countPackages();

    // Add or remove packages
    const builderButtonAdd = builderButton => {
        if (builderButton.classList.contains('btn-builder-text')) {
            builderButton.innerHTML = '<span class="fa-solid fa-circle-plus" alt="Add to Script Builder"></span> Add to Script Builder';
        } else {
            builderButton.innerHTML = '<span class="fa-solid fa-circle-plus" alt="Add to Script Builder"></span>';
        }

        builderButton.classList.remove('btn-danger');
        builderButton.classList.add('btn-success');
    };

    const addOrRemoveButtons = () => {
        const builderAddRemoveBtns = document.querySelectorAll('.btn-builder');

        builderAddRemoveBtns.forEach(el => {
            el.addEventListener('click', e => {
                e.stopImmediatePropagation();

                let packageTitle = el.getAttribute('title');
                let packageValue = el.getAttribute('value');
                let packageVersion = el.getAttribute('version');
                let packageIdentity = `package-${packageTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')}-${packageVersion.replace(/\./gi, '')}`;
                let packageImage = /[^/]*$/.exec(el.getAttribute('image'))[0];
                let packageButtons = document.querySelectorAll(`.btn-builder[value="${packageValue}"]:not(.btn-builder-version)`);
                const packageUrl = findPackagePath(packageValue);
                const imageUrl = findImagePath(packageImage);

                const addPackages = () => {
                    // Update button
                    for (const i of packageButtons) {
                        builderButtonRemove(i);
                    }

                    // Add package to list
                    appendPackage(packageTitle, packageValue, packageIdentity, packageVersion, packageUrl, packageImage, imageUrl);

                    // Reinitialize click actions
                    addOrRemoveButtons();

                    // Save to local storage
                    packages.push(`${packageTitle} , ${packageVersion} , ${packageImage} , ${packageValue}`);
                    localStorage.packageList = JSON.stringify(packages);
                };

                const removePackages = (currentTitle, currentVersion, currentImage, currentValue) => {
                    // Remove packages
                    if (currentTitle) {
                        packageTitle = currentTitle;
                        packageVersion = currentVersion;
                        packageImage = currentImage;
                        packageValue = currentValue;
                        packageButtons = document.querySelectorAll(`.btn-builder[value="${currentValue}"]:not(.btn-builder-version)`);
                        packageIdentity = `package-${currentTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')}-${currentVersion.replace(/\./gi, '')}`;
                    }

                    // Update button
                    for (const i of packageButtons) {
                        builderButtonAdd(i);
                    }

                    // Remove package from lists
                    const packageInNavAndModal = document.querySelectorAll(`.storage .${packageIdentity}`);
                    for (const i of packageInNavAndModal) {
                        i.previousElementSibling.remove();
                        i.remove();
                    }

                    // Remove from local storage
                    for (const i in packages) {
                        if (packages[i] == `${packageTitle} , ${packageVersion} , ${packageImage} , ${packageValue}`) {
                            packages.splice(i, 1);
                        }
                    }

                    localStorage.packageList = JSON.stringify(packages);
                };

                // Determine if there is already a version of the package in their list
                if (!el.classList.contains('btn-builder-version')) {
                    for (const i in packages) {
                        if (packages.length != 0 && el.classList.contains('btn-success')) {
                            const getStorage = packages[i].split(' , ');
                            const storageTitle = getStorage[0];
                            const storageVersion = getStorage[1];
                            const storageImage = getStorage[2];
                            const storageValue = getStorage[3];

                            if (findScriptValue(storageValue) == findScriptValue(packageValue)) {
                                // Show modal
                                const modalBuilderVersionWarning = document.getElementById('modalScriptBuilderVersionWarning');
                                const modalBuilderVersionWarningInstance = bootstrap.Modal.getOrCreateInstance(modalBuilderVersionWarning, { keyboard: false, backdrop: 'static' });

                                modalBuilderVersionWarning.addEventListener('show.bs.modal', () => {
                                    const btnBuilderVersion = document.querySelector('.btn-builder-version');
                                    const builderCurrentVersion = document.querySelector('.current-version');
                                    const builderNewVersion = document.querySelector('.new-version');

                                    btnBuilderVersion.setAttribute('value', packageValue);
                                    btnBuilderVersion.setAttribute('title', packageTitle);
                                    btnBuilderVersion.setAttribute('version', packageVersion);
                                    btnBuilderVersion.setAttribute('image', packageImage);

                                    btnBuilderVersion.setAttribute('value-current', storageValue);
                                    btnBuilderVersion.setAttribute('title-current', storageTitle);
                                    btnBuilderVersion.setAttribute('version-current', storageVersion);
                                    btnBuilderVersion.setAttribute('image-current', storageImage);

                                    builderCurrentVersion.innerText = storageVersion;
                                    builderNewVersion.innerText = packageVersion;
                                });

                                modalBuilderVersionWarningInstance.show();
                                return;
                            }
                        }
                    }
                }

                // Add/Remove packages
                if (!el.classList.contains('btn-builder-version')) {
                    if (el.classList.contains('btn-danger')) {
                        removePackages();
                    } else {
                        addPackages();
                    }
                } else {
                    addPackages();
                    removePackages(el.getAttribute('title-current'), el.getAttribute('version-current'), el.getAttribute('image-current'), el.getAttribute('value-current'));
                }

                countPackages();
            }, false);
        });
    };

    addOrRemoveButtons();

    selectDeploymentMethodTab(); // Do we need this

    const builderScriptType = () => {
        if (getCookie('deployment_method') == 'individual' || !getCookie('deployment_method')) {
            builderStep3.innerHTML = '<strong><span class="d-none d-sm-inline-block me-1">STEP</span><span>3</span></strong><p class="mb-0 d-none d-lg-block">Install Script / Config</p>';
            builderStep4.classList.add('d-none');
            builderStep4.parentElement.classList.add('d-none');
            builderStep5.classList.add('d-none');
            builderStep5.parentElement.classList.add('d-none');
            builderOrganization.classList.add('d-none');
            builderIndividual.classList.remove('d-none');
            builderIndividual.classList.add('active');
            builderOrganization.classList.remove('active');
        } else {
            builderStep3.innerHTML = '<strong><span class="d-none d-sm-inline-block me-1">STEP</span><span>3</span></strong><p class="mb-0 d-none d-lg-block">Internal Repo Url</p>';
            builderStep4.classList.remove('d-none');
            builderStep4.parentElement.classList.remove('d-none');
            builderStep5.classList.remove('d-none');
            builderStep5.parentElement.classList.remove('d-none');
            builderOrganization.classList.remove('d-none');
            builderIndividual.classList.add('d-none');
            builderIndividual.classList.remove('active');
            builderOrganization.classList.add('active');
        }
    };

    builderScriptType();

    const highlightScript = (commandMethod, commandLanguage) => {
        commandMethod.classList.add(commandLanguage);
        Prism.highlightElement(commandMethod);
    };

    const findScriptValue = scriptValue => {
        if (scriptValue.indexOf('--') > 0) {
            scriptValue = scriptValue.split('--');
            scriptValue = scriptValue[0].trim();
        }

        return scriptValue;
    };

    const findScriptPre = scriptValue => {
        if (scriptValue.indexOf('--pre') > 0) {
            return true;
        }

        return false;
    };

    const injectIndividualScripts = () => {
        if (getCookie('deployment_method') == 'individual' || !getCookie('deployment_method')) {
            const commandIndividual = document.querySelector('.command-builder-individual');

            // Clear previously injected scripts
            commandIndividual.innerHTML = '';

            // Inject scripts
            for (const i in packages) {
                const getStorage = packages[i].split(' , ');
                const storageVersion = getStorage[1];
                const storageValue = findScriptValue(getStorage[3]);
                const storagePre = findScriptPre(getStorage[3]) ? ' --pre' : '';

                commandIndividual.innerHTML += `choco install ${storageValue} --version ${storageVersion}${storagePre} -y\n`;
            }

            // Syntax highlight
            highlightScript(commandIndividual, 'language-powershell');
        }
    };

    const injectEnvironmentScripts = () => {
        const internalRepoUrl = document.querySelector('.internal-repo-url-input').value ? document.querySelector('.internal-repo-url-input').value : 'http://internal/odata/repo';
        const commandInjectedScripts = document.querySelectorAll('.command-injected-environment-script');
        const commandEnvironmentOne = document.querySelector('.command-builder-environment-one');
        const commandEnvironmentTwo = document.querySelector('.command-builder-environment-two');

        // Clear previously injected scripts
        for (const i of commandInjectedScripts) {
            i.innerHTML = '';
        }

        // Inject scripts
        commandEnvironmentTwo.innerHTML = `choco push --source="'${internalRepoUrl}'"`;

        for (const i in packages) {
            const getStorage = packages[i].split(' , ');
            const storageVersion = getStorage[1];
            const storageValue = findScriptValue(getStorage[3]);
            const storagePre = findScriptPre(getStorage[3]) ? ' --pre' : '';

            commandEnvironmentOne.innerHTML += `choco download ${storageValue} --internalize --version='${storageVersion}${storagePre}' --source=https://community.chocolatey.org/api/v2/\n`;
        }

        // Syntax highlight
        highlightScript(commandEnvironmentOne, 'language-powershell');
        highlightScript(commandEnvironmentTwo, 'language-powershell');
    };

    const injectOrganizationScripts = () => {
        const internalRepoUrl = document.querySelector('.internal-repo-url-input').value ? document.querySelector('.internal-repo-url-input').value : 'http://internal/odata/repo';
        const commandInjectedScripts = document.querySelectorAll('.command-injected-organization-script');
        const commandAnsible = document.querySelector('.command-builder-organization-ansible');
        const commandChef = document.querySelector('.command-builder-organization-chef');
        const commandPSDSC = document.querySelector('.command-builder-organization-psdsc');
        const commandPuppet = document.querySelector('.command-builder-organization-puppet');
        const commandGenericOne = document.querySelector('.command-builder-organization-generic-one');
        const commandGenericTwo = document.querySelector('.command-builder-organization-generic-two');

        // Clear previously injected scripts
        for (const i of commandInjectedScripts) {
            i.innerHTML = '';
        }

        // Syntax highlight
        switch (getCookie('deployment_method')) {
            case 'ansible':
                for (const i in packages) {
                    const getStorage = packages[i].split(' , ');
                    const storageVersion = getStorage[1];
                    const storageValue = findScriptValue(getStorage[3]);
                    const storagePre = findScriptPre(getStorage[3]) ? 'allow_prerelease: yes' : '';

                    commandAnsible.innerHTML += `
- name: Install ${storageValue}
  win_chocolatey:
    name: ${storageValue}
    version: '${storageVersion}'
    source: ${internalRepoUrl}
    state: present
    ${storagePre}`;
                }

                commandAnsible.innerHTML = removeLineBreaks(commandAnsible.innerHTML);
                highlightScript(commandAnsible, 'language-yaml');

                break;
            case 'chef':
                for (const i in packages) {
                    const getStorage = packages[i].split(' , ');
                    const storageVersion = getStorage[1];
                    const storageValue = findScriptValue(getStorage[3]);
                    const storagePre = findScriptPre(getStorage[3]) ? "options  '--prerelease'" : ''; // eslint-disable-line

                    commandChef.innerHTML += `
chocolatey_package '${storageValue}' do
  action   :install
  source   '${internalRepoUrl}'
  version  '${storageVersion}'
  ${storagePre}
end`;
                }

                commandChef.innerHTML = removeLineBreaks(commandChef.innerHTML);
                highlightScript(commandChef, 'language-ruby');

                break;
            case 'psdsc':
                for (const i in packages) {
                    const getStorage = packages[i].split(' , ');
                    const storageVersion = getStorage[1];
                    const storageValue = findScriptValue(getStorage[3]);
                    const storagePre = findScriptPre(getStorage[3]) ? 'chocoParams = "--prerelease"' : '';
                    const storageSpace = findScriptPre(getStorage[3]) ? '    ' : '';

                    commandPSDSC.innerHTML += `
cChocoPackageInstaller ${storageValue}
{
   Name    ${storageSpace} = "${storageValue}"
   Version ${storageSpace} = "${storageVersion}"
   Source  ${storageSpace} = "${internalRepoUrl}"
   ${storagePre}
}`;
                }

                commandPSDSC.innerHTML = removeLineBreaks(commandPSDSC.innerHTML);
                highlightScript(commandPSDSC, 'language-powershell');

                break;
            case 'puppet':
                for (const i in packages) {
                    const getStorage = packages[i].split(' , ');
                    const storageVersion = getStorage[1];
                    const storageValue = findScriptValue(getStorage[3]);
                    const storagePre = findScriptPre(getStorage[3]) ? "install_options => ['--prerelease']," : ''; // eslint-disable-line
                    const storageSpace = findScriptPre(getStorage[3]) ? '       ' : '';

                    commandPuppet.innerHTML += `
package { '${storageValue}':
  ensure   ${storageSpace} => '${storageVersion}',
  ${storagePre}
  provider ${storageSpace} => 'chocolatey',
  source   ${storageSpace} => '${internalRepoUrl}',
}`;
                }

                commandPuppet.innerHTML = removeLineBreaks(commandPuppet.innerHTML);
                highlightScript(commandPuppet, 'language-puppet');

                break;
            case 'generic':
                commandGenericTwo.innerHTML = `function Install-ChocolateyPackage {
  param (
    [Parameter(Mandatory, Position=0)]
    [string]$PackageName,

    [string]$Source,

    [alias("Params")]
    [string]$PackageParameters,

    [string]$Version,

    [alias("Pre")]
    [switch]$Prerelease,

    [switch]$UseInstallNotUpgrade
  )

  $chocoExecutionArgs = "choco.exe"
  if ($UseInstallNotUpgrade) {
    $chocoExecutionArgs += " install"
  } else {
    $chocoExecutionArgs += " upgrade"
  }

  $chocoExecutionArgs += " $PackageName -y --source='$Source'"
  if ($Prerelease) { $chocoExecutionArgs += " --prerelease"}
  if ($Version) { $chocoExecutionArgs += " --version='$Version'"}
  if ($PackageParameters -and $PackageParameters -ne '') { $chocoExecutionArgs += " --package-parameters='$PackageParameters'"}

  Invoke-Expression -Command $chocoExecutionArgs
  $exitCode = $LASTEXITCODE
  $validExitCodes = @(0, 1605, 1614, 1641, 3010)
  if ($validExitCodes -notcontains $exitCode) {
    throw "Error with package installation. See above."
  }
}

<span></span>`;

                for (const i in packages) {
                    const getStorage = packages[i].split(' , ');
                    const storageVersion = getStorage[1];
                    const storageValue = findScriptValue(getStorage[3]);
                    const storagePreOne = findScriptPre(getStorage[3]) ? ' --prerelease' : '';
                    const storagePreTwo = findScriptPre(getStorage[3]) ? ' -Prerelease' : '';

                    commandGenericOne.innerHTML += `choco upgrade ${storageValue} -y --source="'${internalRepoUrl}'" --version "'${storageVersion}'"${storagePreOne} [other options]\n`;
                    commandGenericTwo.querySelector('span').innerHTML += `Install-ChocolateyPackage ${storageValue} -Source ${internalRepoUrl} -Version ${storageVersion}${storagePreTwo}\n`;
                }

                highlightScript(commandGenericOne, 'language-powershell');
                highlightScript(commandGenericTwo, 'language-powershell');

                break;
            default:
                // do nothing
        };
    };

    const builderNavButtons = () => {
        const builderCurrentStep = document.querySelector('#builder-steps .active');
        const builderNextStep = document.querySelector('#builder-steps .active').closest('li').nextElementSibling;
        const builderPrevStep = document.querySelector('#builder-steps .active').closest('li').previousElementSibling;
        const internalRepoUrl = document.querySelector('.internal-repo-url-input');
        const builderStep3Tab = bootstrap.Tab.getOrCreateInstance(builderStep3, { toggle: false });

        // Next Button
        if (builderNextStep) {
            const builderNextStepTab = builderNextStep.firstElementChild;

            if (builderNextStepTab.classList.contains('d-none')) {
                for (const btn of builderNextBtn) {
                    btn.classList.add('disabled');
                }
            } else { // Organization
                if (!internalRepoUrl.value && builderCurrentStep.id == 'builder-step-4-tab') {
                    builderStep3Tab.show();
                    return;
                }

                if (!internalRepoUrl.value) {
                    if (builderCurrentStep.id == 'builder-step-3-tab') {
                        for (const btn of builderNextBtn) {
                            btn.classList.add('disabled');
                        }
                    } else {
                        for (const btn of builderNextBtn) {
                            btn.classList.remove('disabled');
                        }
                    }

                    builderStep4.classList.add('disabled');
                    builderStep5.classList.add('disabled');
                } else {
                    for (const btn of builderNextBtn) {
                        btn.classList.remove('disabled');
                    }

                    builderStep4.classList.remove('disabled');
                    builderStep5.classList.remove('disabled');
                }
            }
        } else {
            for (const btn of builderNextBtn) {
                btn.classList.add('disabled');
            }

            if (!internalRepoUrl.value && builderCurrentStep.id == 'builder-step-5-tab') {
                builderStep3Tab.show();
                return;
            }
        }

        // Previous Button
        if (builderPrevStep) {
            for (const btn of builderPrevBtn) {
                btn.classList.remove('disabled');
            }
        } else {
            for (const btn of builderPrevBtn) {
                btn.classList.add('disabled');
            }
        }
    };

    // On builder open
    modalBuilder.addEventListener('show.bs.modal', () => {
        injectIndividualScripts();
        injectEnvironmentScripts();
        injectOrganizationScripts();
        builderNavButtons();
        copyCodeBlocks();
    });

    builderStep3.addEventListener('show.bs.tab', () => {
        injectIndividualScripts();
        copyCodeBlocks();
    });

    builderStep4.addEventListener('show.bs.tab', () => {
        injectEnvironmentScripts();
        copyCodeBlocks();
    });

    builderStep5.addEventListener('show.bs.tab', () => {
        injectOrganizationScripts();
        copyCodeBlocks();
    });

    deploymentMethods.forEach(el => {
        el.addEventListener('click', () => {
            selectDeploymentMethodTab();
            builderScriptType();
        }, false);
    });

    // Builder prev/next buttons
    const builderNextBtn = document.querySelectorAll('.btn-next-step');
    const builderPrevBtn = document.querySelectorAll('.btn-prev-step');

    builderNextBtn.forEach(el => {
        el.addEventListener('click', () => {
            const builderNextStep = document.querySelector('#builder-steps .active').closest('li').nextElementSibling;

            if (builderNextStep) {
                if (!builderStep3.classList.contains('active') || !builderIndividual.classList.contains('active')) {
                    const builderNextStepTab = builderNextStep.firstElementChild;
                    const builderNextStepTabInstance = bootstrap.Tab.getOrCreateInstance(builderNextStepTab, { toggle: false });

                    builderNextStepTabInstance.show();
                }
            }
        }, false);
    });

    builderPrevBtn.forEach(el => {
        el.addEventListener('click', () => {
            const builderPrevStep = document.querySelector('#builder-steps .active').closest('li').previousElementSibling;

            if (builderPrevStep) {
                const builderPrevStepTab = builderPrevStep.firstElementChild;
                const builderPrevStepTabInstance = bootstrap.Tab.getOrCreateInstance(builderPrevStepTab, { toggle: false });

                builderPrevStepTabInstance.show();
            }
        }, false);
    });

    document.querySelectorAll('#builder-steps a[data-bs-toggle="pill"]').forEach(el => {
        el.addEventListener('shown.bs.tab', () => {
            builderNavButtons();
        });
    });

    document.querySelectorAll('.internal-repo-url-input').forEach(el => {
        el.addEventListener('keyup', () => {
            builderNavButtons();
        });
    });

    // Download xml file
    const download = (filename, text) => {
        const element = document.createElement('a');

        element.setAttribute('href', `data:text/xml;charset=utf-8,${encodeURIComponent(text)}`);
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    // Beautify xml document
    const formatXml = text => {
        const filename = 'packages.config';
        const tab = '\t';
        let formatted = '';
        let indent = '';

        text.split(/>\s*</).forEach(node => {
            // decrease indent by one 'tab'
            if (node.match(/^\/\w/)) {
                indent = indent.substring(tab.length);
            }

            formatted += `${indent}<${node}>\r\n`;

            // increase indent
            // eslint-disable-next-line
            if (node.match(/^<?\w[^>]*[^\/]$/)) {
                indent += tab;
            }
        });

        text = formatted.substring(1, formatted.length - 3);

        // Send to download
        download(filename, text);
    };

    document.querySelector('.btn-xml').addEventListener('click', () => {
        const xmlDoc = document.implementation.createDocument(null, 'packages');
        (new XMLSerializer()).serializeToString(xmlDoc);

        const parser = new DOMParser();
        const prolog = '<?xml version="1.0" encoding="utf-8"?>';
        const newXmlStr = prolog + (new XMLSerializer()).serializeToString(xmlDoc);
        const xml = parser.parseFromString(newXmlStr, 'application/xml');
        const packagesObject = xml.getElementsByTagName('packages');

        for (const i in packages) {
            const getStorage = packages[i].split(' , ');
            const storageVersion = getStorage[1];
            const storageValue = findScriptValue(getStorage[3]);
            const storagePre = findScriptPre(getStorage[3]);
            const packageNode = xml.createElement('package');

            packagesObject[0].appendChild(packageNode);
            packageNode.setAttribute('id', storageValue);
            packageNode.setAttribute('version', storageVersion);

            if (storagePre) {
                packageNode.setAttribute('prerelease', 'true');
            }
        }

        // Get xml doc as string
        const text = (new XMLSerializer()).serializeToString(xml);

        // Send off to beautify
        formatXml(text);
    }, false);

    // Bulk package download
    document.querySelectorAll('.btn-bulk-package-download').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();

            for (const i in packages) {
                const getStorage = packages[i].split(' , ');
                const storageVersion = getStorage[1];
                const storageValue = findScriptValue(getStorage[3]);

                window.open(`https://community.chocolatey.org/api/v2/package/${storageValue}/${storageVersion}`);
            }
        }, false);
    });
})();
