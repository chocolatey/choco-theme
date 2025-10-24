import TurndownService from 'turndown';

export const htmlToMd = (contentId: string, exportName: string) => {
    const exportButton = document.querySelectorAll('.export-to-md');

    exportButton.forEach(button => {
        button.addEventListener('click', () => {
            const html = document.getElementById(contentId);

            if (!html) return;

            const turndownService = new TurndownService({
                headingStyle: 'atx', // <--- use ## instead of -------
                codeBlockStyle: 'fenced', // <--- use ``` instead of indented code blocks
                hr: '---', // <--- use --- instead of ***
            });

            // Taken from https://github.com/notlmn/copy-as-markdown/pull/9/files
            turndownService.addRule('listItem', {
                filter: 'li',
                replacement: (content, node, options) => {
                    content = content
                        .replace(/^\n+/, '') // Remove leading newlines
                        .replace(/\n+$/, '\n') // Replace trailing newlines with just a single one
                        .replace(/\n/gm, '\n  '); // Indent

                    let prefix = `${options.bulletListMarker  } `;
                    const parent = node.parentNode;
                    if (parent && (parent as Element).nodeName === 'OL') {
                        const start = (parent as Element).getAttribute('start');
                        const index = Array.prototype.indexOf.call((parent as Element).children, node);
                        prefix = `${start ? Number(start) + index : index + 1  }. `;
                    }

                    return (prefix + content + (node.nextSibling && !/\n$/.test(content) ? '\n' : ''));
                }
            });

            turndownService.addRule('convertDataPdfDivToCodeBlock', {
                filter: node => {
                    return (
                        node.nodeName === 'DIV' &&
                        node.classList.contains('turndown-code-block-div')
                    );
                },
                replacement: content => {
                    return `\`\`\`txt\n${content.trim()}\n\`\`\``;
                }
            });

            // Keep images to retain styling
            turndownService.addRule('keep', {
                filter: ['img'],
                replacement: (content, node) => {
                    const image = node as HTMLImageElement;

                    image.removeAttribute('data-pdfmake');
                    return image.outerHTML;
                }
            });

            const markdownContent = turndownService.turndown(html);
            const blob = new Blob([markdownContent], { type: 'text/markdown' });
            const link = document.createElement('a');

            link.href = URL.createObjectURL(blob);
            link.download = `${exportName}.md`;
            link.click();
        });
    });
};
