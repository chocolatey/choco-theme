(function() {
    // Trim extra space from beginning and end of a code block
    var codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(trimString);

    // Highlight code blocks
    if (!jQuery('pre').hasClass('highlight-delay')) {
        jQuery('pre').addClass('line-numbers py-2');
        jQuery('pre:not([class*="language-"])').addClass('language-none');
        Prism.highlightAll();
    }
})();