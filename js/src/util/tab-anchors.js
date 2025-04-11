export const tabAnchors = () => {
    if (location.hash) {
        const activeTab = document.querySelector(`[data-bs-target="${location.hash}"]`);

        if (activeTab) {
            bootstrap.Tab.getOrCreateInstance(activeTab).show();
        }
    }

    document.querySelectorAll('button[data-bs-toggle="tab"]:not(.d-anchor-none)').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-bs-target');
            history.pushState(null, '', `${target}`);
        });
    });
};
