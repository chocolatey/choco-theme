import AnchorJS from 'anchor-js';

(() => {
    // Initialize anchor.js
    const anchors = new AnchorJS();

    anchors.options.placement = 'left';
    anchors.add('#mainContent h2, #mainContent h3, #mainContent h4, #mainContent h5, #mainContent h6');
})();
