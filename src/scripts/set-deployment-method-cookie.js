const deploymentMethods = document.querySelectorAll('[data-deployment-method]');
const deploymentMethodHash = window.location.hash.toString().toLowerCase().substring(1);
const deploymentMethodHashArray = [];

deploymentMethods.forEach(el => {
    const deploymentMethod = el.getAttribute('data-deployment-method');

    if (!deploymentMethodHashArray.includes(deploymentMethod)) {
        deploymentMethodHashArray.push(deploymentMethod);
    }

    el.addEventListener('click', () => {
        document.cookie = `deployment_method=${deploymentMethod}; path=/`;
    }, false);
});

if (deploymentMethodHashArray.includes(deploymentMethodHash)) {
    document.cookie = `deployment_method=${deploymentMethodHash}; path=/`;
}
