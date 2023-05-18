import AnchorJS from 'anchor-js';

(() => {
    // Initialize anchor.js
    const anchors = new AnchorJS();

    anchors.options.placement = 'left';
    anchors.add('#mainContent h2:not(.d-anchor-none), #mainContent h3:not(.d-anchor-none), #mainContent h4:not(.d-anchor-none), #mainContent h5:not(.d-anchor-none), #mainContent h6:not(.d-anchor-none)');
})();
