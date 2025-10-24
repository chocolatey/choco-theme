import { getCookie } from './get-cookie';

export const selectDeploymentMethodTab = () => {
    const selectedDeploymentMethod = getCookie('deployment_method') ? document.querySelectorAll(`[data-deployment-method="${getCookie('deployment_method')}"]`) : document.querySelectorAll('[data-deployment-method="individual"]');

    for (const i of selectedDeploymentMethod) {
        const selectedMethodTab = bootstrap.Tab.getOrCreateInstance(i, { toggle: false });
        selectedMethodTab.show();
    }
};
