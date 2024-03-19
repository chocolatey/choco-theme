import { trimString } from './util/functions';
declare const Prism: any; // eslint-disable-line @typescript-eslint/no-explicit-any

(() => {
    // Trim extra space from beginning and end of a code block
    const codeBlocks: NodeListOf<HTMLElement> = document.querySelectorAll('code');
    const codePre: NodeListOf<HTMLElement> = document.querySelectorAll('pre');

    codeBlocks.forEach(trimString);

    // Highlight code blocks
    for (const i of codePre) {
        if (!i.classList.contains('highlight-delay') && !i.classList.contains('d-format-none')) {
            const codeElement = i as HTMLElement;

            codeElement.classList.add('line-numbers', 'language-none', 'py-2');
            Prism.highlightAll();
        }
    }
})();
