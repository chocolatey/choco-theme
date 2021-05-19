(function() {
    // Trim extra space from beginning and end of a code block
    var codeBlocks = document.querySelectorAll('code'),
        codePre = document.querySelectorAll('pre');
        
    codeBlocks.forEach(trimString);

    // Highlight code blocks
    for (var i of codePre) {
        if (!i.classList.contains('highlight-delay') && !i.classList.contains('d-format-none')) {
            i.classList.add('line-numbers', 'language-none', 'py-2');
            Prism.highlightAll();
        }
    }
})();