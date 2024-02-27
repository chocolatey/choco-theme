import AnchorJS from 'anchor-js';

window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.anchorjs-container')) {
        for (const li of document.querySelectorAll('li')) {
            const firstChild = li.firstChild;
            const isTaskListItem = li.classList.contains('task-list-item');

            let targetElement;

            if (isTaskListItem) {
                targetElement = firstChild.nextElementSibling;
            } else {
                targetElement = firstChild;
            }

            switch (targetElement.nodeName) {
                case 'STRONG':
                case 'CODE':
                    targetElement.classList.add('d-anchor');
                    break;
                default:
                    break;
            }
        }

        // Initialize anchor.js
        const anchors = new AnchorJS();

        anchors.options.placement = 'left';
        anchors.add('.anchorjs-container h2:not(.d-anchor-none), .anchorjs-container h3:not(.d-anchor-none), .anchorjs-container h4:not(.d-anchor-none), .anchorjs-container h5:not(.d-anchor-none), .anchorjs-container h6:not(.d-anchor-none), .anchorjs-container li .d-anchor');
    }
});
