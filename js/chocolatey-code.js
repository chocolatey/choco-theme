(function() {
    // Trim extra space from beginning and end of a code block
    var codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(trimString);

    // Highlight code blocks
    $('pre').addClass('line-numbers py-2');
    $('pre:not([class*="language-"])').addClass('language-none');
    Prism.highlightAll();
})();