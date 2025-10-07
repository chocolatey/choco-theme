import { escapeCode } from '@choco-core/util/escape-code';

(() => {
    const codeForView = document.querySelectorAll('.copy-code-for-view');

    codeForView.forEach(el => {
        const codeOriginal = el;
        const codeLanguage = codeOriginal.getAttribute('data-language');
        const codeReplace = codeOriginal.getAttribute('data-replace');
        let codeHighlight = '';

        switch (codeLanguage) {
            case 'HTML':
            case 'Astro':
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

        let codeEscaped = escapeCode(codeOriginal.innerHTML.trim());
        const start = '&lt;';
        const startSlash = `${start}/`;
        const end = '&gt;';
        const endSlash = `/${end}`;
        const contentQuotes = /content=&quot;([^&]*)&quot;/g;

        // Unfortunately, innerHTML interprets JSX like syntax incorrectly and we need to fix it here.
        codeEscaped = codeEscaped
            .replaceAll(`${start}callout`, `${start}Callout`)
            .replaceAll(`${startSlash}callout`, `${startSlash}Callout`)
            .replaceAll(`${start}collapsebutton`, `${start}CollapseButton`)
            .replaceAll(`${startSlash}collapsebutton`, `${startSlash}CollapseButton`)
            .replaceAll(`${start}iframe ratio`, `${start}Iframe ratio`)
            .replaceAll(`${start}tabspanecontainer`, `${start}TabsPaneContainer`)
            .replaceAll(`${startSlash}tabspanecontainer`, `${startSlash}TabsPaneContainer`)
            .replaceAll(`${start}tabstabcontainer`, `${start}TabsTabContainer`)
            .replaceAll(`${start}tabspane`, `${start}TabsPane`)
            .replaceAll(`${start}xref`, `${start}Xref`)
            .replaceAll(`value=&quot;example-define&quot;${end}`, `value=&quot;example-define&quot; ${endSlash}`)
            .replaceAll(`anchor=&quot;why&quot;${end}`, `anchor=&quot;why&quot; ${endSlash}`)
            .replaceAll(`${startSlash}tabspane`, `${startSlash}TabsPane`)
            .replaceAll(`content=&quot;{tabs1}&quot;${end}`, `content=&quot;{tabs1}&quot; ${endSlash}`)
            .replaceAll(`content=&quot;{tabs2}&quot;${end}`, `content=&quot;{tabs2}&quot; ${endSlash}`)
            .replaceAll(`content=&quot;{tabs3}&quot;${end}`, `content=&quot;{tabs3}&quot; ${endSlash}`)
            .replaceAll(`multi=&quot;version&quot;${end}`, `multi=&quot;version&quot; ${endSlash}`)
            .replaceAll(`${startSlash}tabstabcontainer${end}`, '')
            .replaceAll(`${startSlash}xref${end}`, '')
            .replaceAll(`${startSlash}iframe${end}`, '')
            .replace(contentQuotes, (match, p1) => `content=${p1}`);

        if (codeReplace !== 'true') {
            if (codeLanguage === 'Astro') {
                const codeContainer = `<p class="border-top border-bottom py-2 px-3 mb-0">${codeLanguage}</p><pre class="border-0 mx-3 mb-3 mt-0 code-static-toolbar"><code class="language-${codeHighlight} line-numbers">${codeEscaped}</code></pre>`;
                codeOriginal.innerHTML = codeContainer;
            } else {
                const codeContainer = `<p class="border-top border-bottom py-2 px-3 mb-0">${codeLanguage}</p><pre class="border-0 my-0 code-static-toolbar"><code class="language-${codeHighlight} line-numbers">${codeEscaped}</code></pre>`;
                codeOriginal.insertAdjacentHTML('afterend', codeContainer);
            }
        } else {
            const codeContainer = `<pre><code class="language-${codeHighlight} line-numbers">${codeEscaped}</code></pre>`;

            codeOriginal.innerHTML = codeContainer;
        }
    });
})();
