(function() {
    var packages = localStorage.packageList === undefined ? new Array() : JSON.parse(localStorage.packageList),
        modalBuilder = document.getElementById('Modal_ScriptBuilder'),
        modalBuilderInstance = Modal.getInstance(modalBuilder) ? Modal.getInstance(modalBuilder) : new Modal(modalBuilder, { keyboard: false, backdrop: 'static' }),
        deploymentMethods = document.querySelectorAll('[data-deployment-method]'),
        builderStep3 = document.querySelector('#builder-step-3-tab'),
        builderStep4 = document.querySelector('#builder-step-4-tab'),
        builderStep5 = document.querySelector('#builder-step-5-tab'),
        builderIndividual = document.querySelector('.builder-individual'),
        builderOrganization = document.querySelector('.builder-organization');

    // Packages in storage on load
    if (packages.length > 0) {
        for (var i in packages) {
            var getStorage = packages[i].split(" , "),
                storageTitle = getStorage[0],
                storageVersion = getStorage[1],
                storageImage = getStorage[2],
                storageValue = getStorage[3],
                packageUrl = findPackagePath(storageValue),
                imageUrl = findImagePath(storageImage),
                packageButtons = document.querySelectorAll('.btn-builder[value="' + storageValue + '"]'),
                storageIdentity = 'package-' + storageTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '') + '-' + storageVersion.replace(/\./gi, '');

            for (var el of packageButtons) {
                builderButtonRemove(el);
            }

            // Generate Package List
            appendPackage(storageTitle, storageValue, storageIdentity, storageVersion, packageUrl, storageImage, imageUrl);
        }
    }

    // On load
    countPackages();
    addOrRemoveButtons();
    selectDeploymentMethodTab(); // Do we need this
    builderScriptType();

    function findImagePath(imageTitle) {
        if (imageTitle.includes('packageDefaultIcon')) {
            return '/Content/Images/';
        }

        return '/content/packageimages/';
    }

    function findPackagePath(packageValue) {
        if (packageValue.indexOf("--") >= 0) {
            return packageValue.substr(0, packageValue.indexOf('--')).trim();
        }

        return packageValue;
    }

    function builderButtonRemove(builderButton) {
        if (builderButton.classList.contains('btn-builder-text')) {
            builderButton.innerHTML = '<span class="fas fa-minus-circle" alt="Remove from Script Builder"></span> Remove from Script Builder';
        } else {
            builderButton.innerHTML = '<span class="fas fa-minus-circle" alt="Remove from Script Builder"></span>';
        }

        builderButton.classList.remove('btn-success');
        builderButton.classList.add('btn-danger');
    }

    function builderButtonAdd(builderButton) {
        if (builderButton.classList.contains('btn-builder-text')) {
            builderButton.innerHTML = '<span class="fas fa-plus-circle" alt="Add to Script Builder"></span> Add to Script Builder';
        } else {
            builderButton.innerHTML = '<span class="fas fa-plus-circle" alt="Add to Script Builder"></span>';
        }

        builderButton.classList.remove('btn-danger');
        builderButton.classList.add('btn-success');
    }

    function appendPackage(packageTitle, packageValue, packageIdentity, packageVersion, packageUrl, packageImage, packageImagePath) {
        var builderStorage = document.querySelectorAll('.storage');

        for (var i of builderStorage) {
            i.innerHTML += '<hr />' +
                '<div id="' + packageIdentity + '" class="d-flex flex-row align-items-start storage-row ' + packageIdentity + '">' +
                '<div class="ratio ratio-1x1 package-image-header">' +
                '<div class="d-flex flex-fill align-items-center justify-content-center package-icon">' +
                '<img class="package-image" src="' + packageImagePath + '' + packageImage + '" height="30" width="30">' +
                '</div>' +
                '</div>' +
                '<div class="mx-2">' +
                '<a class="text-reset btn-link mb-0 h5 text-break" href="/packages/' + packageUrl + '/' + packageVersion + '">' + packageTitle + '</a>' +
                '<p class="mb-0"><small>' + packageVersion + '</small></p>' +
                '</div>' +
                '<button class="btn btn-sm btn-builder btn-danger ms-auto" value="' + packageValue + '" title="' + packageTitle + '" version="' + packageVersion + '" image="' + packageImage + '"><span class="fas fa-minus-circle"></span></button>' +
                '</div>';
        }
    }

    function countPackages() {
        var notificationBadge = document.querySelector('.notification-badge-builder'),
            builderViewBtn = document.querySelector('.btn-view-builder');

        notificationBadge.innerHTML = localStorage.packageList ? JSON.parse(localStorage.packageList).length : 0;

        if (packages.length > 0) {
            builderViewBtn.classList.remove('d-none');
        } else {
            var collapseBuilder = document.getElementById('Nav_ScriptBuilder'),
                collapseBuilderInstance = Collapse.getInstance(collapseBuilder) ? Collapse.getInstance(collapseBuilder) : new Collapse(collapseBuilder, { toggle: false });

            modalBuilderInstance.hide();
            collapseBuilderInstance.hide();
            builderViewBtn.classList.add('d-none');
        }
    }

    // Add or remove packages
    function addOrRemoveButtons() {
        var builderAddRemoveBtns = document.querySelectorAll('.btn-builder');

        builderAddRemoveBtns.forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.stopImmediatePropagation();

                var packageTitle = el.getAttribute('title'),
                    packageValue = el.getAttribute('value'),
                    packageVersion = el.getAttribute('version'),
                    packageIdentity = 'package-' + packageTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '') + '-' + packageVersion.replace(/\./gi, ''),
                    packageImage = /[^/]*$/.exec(el.getAttribute('image'))[0],
                    packageUrl = findPackagePath(packageValue),
                    imageUrl = findImagePath(packageImage),
                    packageButtons = document.querySelectorAll('.btn-builder[value="' + packageValue + '"]:not(.btn-builder-version)');

                function addPackages() {
                    // Update button
                    for (var i of packageButtons) {
                        builderButtonRemove(i);
                    }

                    // Add package to list
                    appendPackage(packageTitle, packageValue, packageIdentity, packageVersion, packageUrl, packageImage, imageUrl);

                    // Reinitialize click actions
                    addOrRemoveButtons();

                    // Save to local storage
                    packages.push(packageTitle + " , " + packageVersion + " , " + packageImage + " , " + packageValue);
                    localStorage.packageList = JSON.stringify(packages);
                }

                function removePackages(currentTitle, currentVersion, currentImage, currentValue) {
                    // Remove packages
                    if (currentTitle) {
                        packageTitle = currentTitle;
                        packageVersion = currentVersion;
                        packageImage = currentImage;
                        packageValue = currentValue;
                        packageButtons = document.querySelectorAll('.btn-builder[value="' + currentValue + '"]:not(.btn-builder-version)');
                        packageIdentity = 'package-' + currentTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '') + '-' + currentVersion.replace(/\./gi, '');
                    }

                    // Update button
                    for (var i of packageButtons) {
                        builderButtonAdd(i);
                    }

                    // Remove package from lists
                    var packageInNavAndModal = document.querySelectorAll('.storage .' + packageIdentity)
                    for (var i of packageInNavAndModal) {
                        i.previousElementSibling.remove();
                        i.remove();
                    }

                    // Remove from local storage
                    for (var i in packages) {
                        if (packages[i] == packageTitle + " , " + packageVersion + " , " + packageImage + " , " + packageValue) {
                            packages.splice(i, 1);
                        }
                    }

                    localStorage.packageList = JSON.stringify(packages);
                }

                // Determine if there is already a version of the package in their list
                if (!el.classList.contains('btn-builder-version')) {
                    for (var i in packages) {
                        if (packages.length != 0 && el.classList.contains('btn-success')) {
                            var getStorage = packages[i].split(" , "),
                                storageTitle = getStorage[0],
                                storageVersion = getStorage[1],
                                storageImage = getStorage[2],
                                storageValue = getStorage[3];

                            if (storageTitle == packageTitle) {
                                // Show modal
                                var modalBuilderVersionWarning = document.getElementById('Modal_ScriptBuilderVersionWarning'),
                                    modalBuilderVersionWarningInstance = Modal.getInstance(modalBuilderVersionWarning) ? Modal.getInstance(modalBuilderVersionWarning) : new Modal(modalBuilderVersionWarning, { keyboard: false, backdrop: 'static' });

                                modalBuilderVersionWarning.addEventListener('show.bs.modal', function (event) {
                                    var btnBuilderVersion = document.querySelector('.btn-builder-version'),
                                        builderCurrentVersion = document.querySelector('.current-version'),
                                        builderNewVersion = document.querySelector('.new-version');

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
    }

    // On builder open
    modalBuilder.addEventListener('show.bs.modal', function () {
        injectIndividualScripts();
        injectEnvironmentScripts();
        injectOrganizationScripts();
        builderNavButtons();
        copyCodeBlocks();
    });

    builderStep3.addEventListener('show.bs.tab', function () {
        injectIndividualScripts();
        copyCodeBlocks();
    });

    builderStep4.addEventListener('show.bs.tab', function () {
        injectEnvironmentScripts();
        copyCodeBlocks();
    });

    builderStep5.addEventListener('show.bs.tab', function () {
        injectOrganizationScripts();
        copyCodeBlocks();
    });

    deploymentMethods.forEach(function (el) {
        el.addEventListener('click', function (e) {
            selectDeploymentMethodTab();
            builderScriptType();
        }, false);
    });

    function builderScriptType() {
        if (getCookie('deployment_method') == "individual" || !getCookie('deployment_method')) {
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
    }

    function highlightScript(commandMethod, commandLanguage) {
        commandMethod.classList.add(commandLanguage);
        Prism.highlightElement(commandMethod);
    }

    function findScriptValue(scriptValue) {
        if (scriptValue.indexOf('--version') > 0) {
            scriptValue = scriptValue.split('--version');
            scriptValue = scriptValue[0].trim();
        }

        return scriptValue;
    }

    function findScriptPre(scriptValue) {
        if (scriptValue.indexOf('--pre') > 0) {
            return true;
        }

        return false;
    }

    function injectIndividualScripts() {
        if (getCookie('deployment_method') == "individual" || !getCookie('deployment_method')) {
            var commandIndividual = document.querySelector('.command-builder-individual');

            // Clear previously injected scripts
            commandIndividual.innerHTML = '';

            // Inject scripts
            for (var i in packages) {
                var getStorage = packages[i].split(' , '),
                    storageVersion = getStorage[1],
                    storageValue = findScriptValue(getStorage[3]),
                    storagePre = findScriptPre(getStorage[3]) ? ' --pre' : '';

                commandIndividual.innerHTML += 'choco install ' + storageValue + ' --version ' + storageVersion + storagePre + ' -y\n';
            }

            // Syntax highlight
            highlightScript(commandIndividual, 'language-powershell')
        }
    }

    function injectEnvironmentScripts() {
        var internalRepoUrl = document.querySelector('.internalRepoUrlInput').value ? document.querySelector('.internalRepoUrlInput').value : "http://internal/odata/repo",
            commandInjectedScripts = document.querySelectorAll('.command-injected-environment-script'),
            commandEnvironmentOne = document.querySelector('.command-builder-environment-one'),
            commandEnvironmentTwo = document.querySelector('.command-builder-environment-two');

        // Clear previously injected scripts
        for (var i of commandInjectedScripts) {
            i.innerHTML = '';
        }

        // Inject scripts
        commandEnvironmentTwo.innerHTML = "choco push --source=\"'" + internalRepoUrl + "'\"";
        
        for (var i in packages) {
            var getStorage = packages[i].split(' , '),
                storageVersion = getStorage[1],
                storageValue = findScriptValue(getStorage[3]),
                storagePre = findScriptPre(getStorage[3]) ? ' --pre' : '';

            commandEnvironmentOne.innerHTML += 'choco download ' + storageValue + ' --internalize --version=' + storageVersion + storagePre + ' --source=https://community.chocolatey.org/api/v2/\n';
        }

        // Syntax highlight
        highlightScript(commandEnvironmentOne, 'language-powershell');
        highlightScript(commandEnvironmentTwo, 'language-powershell');
    }

    function injectOrganizationScripts() {
        var internalRepoUrl = document.querySelector('.internalRepoUrlInput').value ? document.querySelector('.internalRepoUrlInput').value : "http://internal/odata/repo",
            commandInjectedScripts = document.querySelectorAll('.command-injected-organization-script'),
            commandAnsible = document.querySelector('.command-builder-organization-ansible'),
            commandChef = document.querySelector('.command-builder-organization-chef'),
            commandPSDSC = document.querySelector('.command-builder-organization-psdsc'),
            commandPuppet = document.querySelector('.command-builder-organization-puppet'),
            commandGenericOne = document.querySelector('.command-builder-organization-generic-one'),
            commandGenericTwo = document.querySelector('.command-builder-organization-generic-two');

        // Clear previously injected scripts
        for (var i of commandInjectedScripts) {
            i.innerHTML = '';
        }

        // Syntax highlight
        switch (getCookie('deployment_method')) {
            case 'ansible':
                for (var i in packages) {
                    var getStorage = packages[i].split(' , '),
                        storageVersion = getStorage[1],
                        storageValue = findScriptValue(getStorage[3]),
                        storagePre = findScriptPre(getStorage[3]) ? '    allow_prerelease: yes\n\n' : '\n';

                    commandAnsible.innerHTML += "- name: Install " + storageValue + "\n" +
                        "  win_chocolatey:\n" +
                        "    name: " + storageValue + "\n" +
                        "    version: '" + storageVersion + "'\n" +
                        "    source: " + internalRepoUrl + "\n" +
                        "    state: present\n" + 
                        storagePre;
                }

                highlightScript(commandAnsible, 'language-yaml');

                break;
            case 'chef':
                for (var i in packages) {
                    var getStorage = packages[i].split(' , '),
                        storageVersion = getStorage[1],
                        storageValue = findScriptValue(getStorage[3]),
                        storagePre = findScriptPre(getStorage[3]) ? "  options  '--prerelease'\n" : "";

                    commandChef.innerHTML += "chocolatey_package '" + storageValue + "' do\n" +
                        "  action   :install\n" +
                        "  source   '" + internalRepoUrl + "'\n" +
                        "  version  '" + storageVersion + "'\n" +
                        storagePre +
                        "end\n\n";
                }

                highlightScript(commandChef, 'language-ruby');

                break;
            case 'psdsc':
                for (var i in packages) {
                    var getStorage = packages[i].split(' , '),
                        storageVersion = getStorage[1],
                        storageValue = findScriptValue(getStorage[3]),
                        storagePre = findScriptPre(getStorage[3]) ? '    chocoParams = "--prerelease"\n' : '',
                        storageSpace = findScriptPre(getStorage[3]) ? "    " : "";

                    commandPSDSC.innerHTML += 'cChocoPackageInstaller ' + storageValue + '\n' +
                        '{\n' +
                        '    Name    ' + storageSpace + '= "' + storageValue + '"\n' +
                        '    Version ' + storageSpace + '= "' + storageVersion + '"\n' +
                        '    Source  ' + storageSpace + '= "' + internalRepoUrl + '"\n' +
                        storagePre +
                        '}\n\n';
                }

                highlightScript(commandPSDSC, 'language-powershell');

                break;
            case 'puppet':
                for (var i in packages) {
                    var getStorage = packages[i].split(' , '),
                        storageVersion = getStorage[1],
                        storageValue = findScriptValue(getStorage[3]),
                        storagePre = findScriptPre(getStorage[3]) ? "  install_options => ['--prerelease'],\n" : "",
                        storageSpace = findScriptPre(getStorage[3]) ? "       " : "";

                    commandPuppet.innerHTML += "package { '" + storageValue + "':\n" +
                        "  ensure   " + storageSpace + "=> '" + storageVersion + "',\n" +
                        storagePre +
                        "  provider " + storageSpace + "=> 'chocolatey',\n" +
                        "  source   " + storageSpace + "=> '" + internalRepoUrl + "',\n" +
                        "}\n\n";
                }

                highlightScript(commandPuppet, 'language-puppet');

                break;
            case 'generic':
                commandGenericTwo.innerHTML = 'function Install-ChocolateyPackage {\n' +
                '  param (\n' +
                '    [Parameter(Mandatory, Position=0)]\n' +
                '    [string]$PackageName,\n\n' +
                '    [string]$Source,\n\n' +
                '    [alias("Params")]\n' +
                '    [string]$PackageParameters,\n\n' +
                '    [string]$Version,\n\n' +
                '    [alias("Pre")]\n' +
                '    [switch]$Prerelease,\n\n' +
                '    [switch]$UseInstallNotUpgrade\n' +
                '  )\n\n' +
                '  $chocoExecutionArgs = "choco.exe"\n' +
                '  if ($UseInstallNotUpgrade) {\n' +
                '    $chocoExecutionArgs += " install"\n' +
                '  } else {\n' +
                '    $chocoExecutionArgs += " upgrade"\n' +
                '  }\n\n' +
                '  $chocoExecutionArgs += " $PackageName -y --source=\'$Source\'"\n' +
                '  if ($Prerelease) { $chocoExecutionArgs += " --prerelease"}\n' +
                '  if ($Version) { $chocoExecutionArgs += " --version=\'$Version\'"}\n' +
                '  if ($PackageParameters -and $PackageParameters -ne \'\') { $chocoExecutionArgs += " --package-parameters=\'$PackageParameters\'"}\n\n' +
                '  Invoke-Expression -Command $chocoExecutionArgs\n' +
                '  $exitCode = $LASTEXITCODE\n' +
                '  $validExitCodes = @(0, 1605, 1614, 1641, 3010)\n' +
                '  if ($validExitCodes -notcontains $exitCode) {\n' +
                '    throw "Error with package installation. See above."\n' +
                '  }\n' +
                '}\n\n' +
                '<span></span>';

                for (var i in packages) {
                    var getStorage = packages[i].split(' , '),
                        storageVersion = getStorage[1],
                        storageValue = findScriptValue(getStorage[3]),
                        storagePreOne = findScriptPre(getStorage[3]) ? ' --prerelease' : '',
                        storagePreTwo = findScriptPre(getStorage[3]) ? ' -Prerelease' : '';

                    commandGenericOne.innerHTML += "choco upgrade " + storageValue + " -y --source=\"'" + internalRepoUrl + "'\" --version \"'" + storageVersion + "'\"" + storagePreOne + " [other options]\n";
                    commandGenericTwo.querySelector('span').innerHTML += "Install-ChocolateyPackage " + storageValue + " -Source " + internalRepoUrl + " -Version " + storageVersion + storagePreTwo +"\n"
                }

                highlightScript(commandGenericOne, 'language-powershell');
                highlightScript(commandGenericTwo, 'language-powershell');

                break;
            default:
                // do nothing
        }
    }

    // Builder prev/next buttons
    var builderNextBtn = document.querySelectorAll('.btn-next-step'),
        builderPrevBtn = document.querySelectorAll('.btn-prev-step');
    
    builderNextBtn.forEach(function (el) {
        el.addEventListener('click', function (e) {
            var builderNextStep = document.querySelector('#builder-steps .active').closest('li').nextElementSibling;

            if (builderNextStep) {
                if (!builderStep3.classList.contains('active') || !builderIndividual.classList.contains('active')) {
                    var builderNextStepTab = builderNextStep.firstElementChild,
                        builderNextStepTabInstance = Tab.getInstance(builderNextStepTab) ? Tab.getInstance(builderNextStepTab) : new Tab(builderNextStepTab, { toggle: false });

                    builderNextStepTabInstance.show();
                }
            }

        }, false);
    });

    builderPrevBtn.forEach(function (el) {
        el.addEventListener('click', function (e) {
            var builderPrevStep = document.querySelector('#builder-steps .active').closest('li').previousElementSibling;

            if (builderPrevStep) {
                var builderPrevStepTab = builderPrevStep.firstElementChild,
                    builderPrevStepTabInstance = Tab.getInstance(builderPrevStepTab) ? Tab.getInstance(builderPrevStepTab) : new Tab(builderPrevStepTab, { toggle: false });

                builderPrevStepTabInstance.show();
            }

        }, false);
    });

    document.querySelectorAll('#builder-steps a[data-bs-toggle="pill"]').forEach(function (el) {
        el.addEventListener('shown.bs.tab', function (e) {
            builderNavButtons();
        });
    });

    document.querySelectorAll('.internalRepoUrlInput').forEach(function (el) {
        el.addEventListener('keyup', function (e) {
            builderNavButtons();
        });
    });

    function builderNavButtons() {
        var builderCurrentStep = document.querySelector('#builder-steps .active'),
            builderNextStep = document.querySelector('#builder-steps .active').closest('li').nextElementSibling,
            builderPrevStep = document.querySelector('#builder-steps .active').closest('li').previousElementSibling,
            internalRepoUrl = document.querySelector('.internalRepoUrlInput');

        // Next Button
        if (builderNextStep) {
            var builderNextStepTab = builderNextStep.firstElementChild;

            if (builderNextStepTab.classList.contains('d-none')) {
                for (var i = 0; i < builderNextBtn.length; i++) {
                    builderNextBtn[i].classList.add('disabled');
                }
            } else { // Organization
                if (!internalRepoUrl.value && builderCurrentStep.id == 'builder-step-4-tab') {
                    var builderStep3Tab = Tab.getInstance(builderStep3) ? Tab.getInstance(builderStep3) : new Tab(builderStep3, { toggle: false });
                    builderStep3Tab.show();
                    return;
                }

                if (!internalRepoUrl.value) {
                    if (builderCurrentStep.id == 'builder-step-3-tab') {
                        for (var i = 0; i < builderNextBtn.length; i++) {
                            builderNextBtn[i].classList.add('disabled');
                        }
                    } else {
                        for (var i = 0; i < builderNextBtn.length; i++) {
                            builderNextBtn[i].classList.remove('disabled');
                        }
                    }

                    builderStep4.classList.add('disabled');
                    builderStep5.classList.add('disabled');
                } else {
                    for (var i = 0; i < builderNextBtn.length; i++) {
                        builderNextBtn[i].classList.remove('disabled');
                    }

                    builderStep4.classList.remove('disabled');
                    builderStep5.classList.remove('disabled');
                }
            }
        } else {
            for (var i = 0; i < builderNextBtn.length; i++) {
                builderNextBtn[i].classList.add('disabled');
            }

            if (!internalRepoUrl.value && builderCurrentStep.id == 'builder-step-5-tab') {
                var builderStep3Tab = Tab.getInstance(builderStep3) ? Tab.getInstance(builderStep3) : new Tab(builderStep3, { toggle: false });
                builderStep3Tab.show();
                return;
            }
        }

        // Previous Button
        if (builderPrevStep) {
            for (var i = 0; i < builderPrevBtn.length; i++) {
                builderPrevBtn[i].classList.remove('disabled');
            }
        } else {
            for (var i = 0; i < builderPrevBtn.length; i++) {
                builderPrevBtn[i].classList.add('disabled');
            }
        }
    }

    // Download xml file
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    // Beautify xml document
    function formatXml(text) {
        var filename = "packages.config"
        formatted = '', indent = '',
            tab = '\t';

        text.split(/>\s*</).forEach(function (node) {
            if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
            formatted += indent + '<' + node + '>\r\n';
            if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab; // increase indent
        });
        text = formatted.substring(1, formatted.length - 3);

        // Send to download
        download(filename, text);
    }

    document.querySelector('.btn-xml').addEventListener('click', function () {
        var xmlDoc = document.implementation.createDocument(null, "packages");
        (new XMLSerializer()).serializeToString(xmlDoc);

        var parser = new DOMParser();
        prolog = '<?xml version="1.0" encoding="utf-8"?>';

        // Add prolog
        newXmlStr = prolog + (new XMLSerializer()).serializeToString(xmlDoc);
        var xml = parser.parseFromString(newXmlStr, "application/xml");

        // Build xml & add each package node
        var packagesObject = xml.getElementsByTagName("packages");

        for (var i in packages) {
            getStorage = packages[i].split(" , ");
            storageVersion = getStorage[1];
            storageValue = findScriptValue(getStorage[3]),
            storagePre = findScriptPre(getStorage[3]);

            // Creates a new package entry for each item in builder
            var packageNode = xml.createElement("package");
            packagesObject[0].appendChild(packageNode);

            packageNode.setAttribute("id", storageValue);
            packageNode.setAttribute("version", storageVersion);
            
            if (storagePre) {
                packageNode.setAttribute("prerelease", "true");
            }
        }

        // Get xml doc as string
        var text = (new XMLSerializer()).serializeToString(xml);

        // Send off to beautify
        formatXml(text);
    }, false);

    // Bulk package download
    document.querySelectorAll('.btn-bulk-package-download').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            for (var i in packages) {
                getStorage = packages[i].split(" , ");
                storageVersion = getStorage[1];
                storageValue = findScriptValue(getStorage[3]);

                window.open('https://community.chocolatey.org/api/v2/package/' + storageValue + '/' + storageVersion);
            }
        }, false);
    });
})();