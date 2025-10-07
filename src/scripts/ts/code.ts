import { trimString } from '@choco-core/ts/util/trim-string';
declare const Prism: any; // eslint-disable-line @typescript-eslint/no-explicit-any

(() => {
    // Trim extra space from beginning and end of a code block
    const codeBlocks: NodeListOf<HTMLElement> = document.querySelectorAll('code');
    const codePre: NodeListOf<HTMLElement> = document.querySelectorAll('pre');

    codeBlocks.forEach(trimString);

    // Docs specific - fixes auto generated docs that are indented with 4 spaces that shouldn't be
    const trimCodeBlocks = () => {
        const currentURL = window.location.href;
        const targetURLs = ['en-us/choco/commands/', 'en-us/create/commands/'];

        if (targetURLs.some(url => currentURL.includes(url))) {
            const headings = document.querySelectorAll('h2');

            for (const heading of headings) {
                const text = heading.textContent.trim();
                if (text === 'Examples' || text === 'Usage') {
                    let nextSibling = heading.nextElementSibling;
                    while (nextSibling && nextSibling.tagName !== 'H2') {
                        if (nextSibling.tagName === 'PRE' && nextSibling.firstElementChild && nextSibling.firstElementChild.tagName === 'CODE') {
                            const codeBlock = nextSibling.firstElementChild;
                            const lines = codeBlock.textContent.split('\n');
                            const trimmedLines = lines.map(line => line.trim());
                            codeBlock.textContent = trimmedLines.join('\n');
                        }
                        nextSibling = nextSibling.nextElementSibling;
                    }
                }
            }
        }
    };

    trimCodeBlocks();

    // Highlight code blocks
    for (const i of codePre) {
        if (!i.classList.contains('highlight-delay') && !i.classList.contains('d-format-none')) {
            const codeElement = i as HTMLElement;

            codeElement.classList.add('line-numbers', 'language-none');
            Prism.highlightAll();
        }
    }
})();
