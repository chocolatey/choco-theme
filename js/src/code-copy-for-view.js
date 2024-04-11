import { escapeHTML } from './util/functions';

(() => {
    const codeForView = document.querySelectorAll('.copy-code-for-view');

    codeForView.forEach(el => {
        const codeOriginal = el;
        const codeLanguage = codeOriginal.getAttribute('data-language');
        let codeHighlight = '';

        switch (codeLanguage) {
            case 'HTML':
                codeHighlight = 'markup';
                break;
            case 'Markdown':
                codeHighlight = 'markdown';
                break;
            case 'CSS':
                codeHighlight = 'css';
                break;
            case 'JavaScript':
                codeHighlight = 'javascript';
                break;
            default:
                codeHighlight = 'none';
        }

        const codeContainer = `<p class="border-top border-bottom py-2 px-3 mb-0">${codeLanguage}</p><pre class="border-0 my-0 code-static-toolbar"><code class="language-${codeHighlight} line-numbers">${escapeHTML(codeOriginal.innerHTML.trim())}</code></pre>`;

        codeOriginal.insertAdjacentHTML('afterend', codeContainer);
    });
})();
