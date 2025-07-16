import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import type { Content, ContentUnorderedList } from 'pdfmake/interfaces';
import '../lib/vfs_fonts';

export const htmlToPdf = (contentId: string, exportName: string) => {
    const exportButton = document.querySelectorAll('.export-to-pdf');

    exportButton.forEach(button => {
        button.addEventListener('click', () => {
            const html = document.getElementById(contentId);

            if (!html) return;

            // Register fonts
            pdfMake.fonts = {
                PTSans: {
                    normal: 'PTSans-Regular.ttf',
                    bold: 'PTSans-Bold.ttf',
                    italics: 'PTSans-Italic.ttf',
                    bolditalics: 'PTSans-BoldItalic.ttf'
                },
                CourierPrime: {
                    normal: 'CourierPrime-Regular.ttf',
                    bold: 'CourierPrime-Bold.ttf',
                    italics: 'CourierPrime-Italic.ttf',
                    bolditalics: 'CourierPrime-BoldItalic.ttf'
                }
            };

            // Create a clone so you don't mutate original DOM
            const clonedHtml = html.cloneNode(true) as HTMLElement;

            // Find all <pre><code></code></pre> blocks
            const preCodeNodes = clonedHtml.querySelectorAll('.pdfmake-code-block');

            preCodeNodes.forEach(pre => {
                const code = pre.querySelector('code');

                if (code) {
                    code.setAttribute('style', '');
                } else {
                    pre.setAttribute('data-pdfmake', '{"font": "CourierPrime", "fontSize": "11"}');
                }

                pre.setAttribute('style', 'width: 100%;');

                // Create a table element styled to expand full width
                const table = document.createElement('table');
                table.style.width = '100%';
                table.style.border = 'none';

                if (!code) {
                    table.classList.add('pdfmake-code-block-div');
                }

                // Create a table row
                const tr = document.createElement('tr');
                tr.style.width = '100%';

                // Create a table cell
                const td = document.createElement('td');
                td.setAttribute('data-pdfmake', '{ "margin": [10, 10, 10, 10] }');
                td.style.width = '100%';
                td.style.border = '1px solid #dee2e6';
                td.style.backgroundColor = '#f8f9fa';

                // Append a clone of the <pre> element (with <code>) into the cell
                td.appendChild(pre.cloneNode(true));

                // Append the cell to the row
                tr.appendChild(td);

                // Append the row to the table
                table.appendChild(tr);

                // Replace the original <pre> element with the new table
                pre.replaceWith(table);
            });

            // const title = clonedHtml.querySelector('#creditsTitle');

            const minifiedHtml = clonedHtml.innerHTML.replace(/>\s+</g, '><').trim();

            const converted = htmlToPdfmake(minifiedHtml, {
                defaultStyles: {
                    h2: { marginTop: 15 },
                    h3: { marginTop: 15 },
                    h4: { marginTop: 10, marginBottom: 0, bold: false },
                    pre: { font: 'CourierPrime', preserveLeadingSpaces: true },
                    code: { font: 'CourierPrime', fontSize: 11, preserveLeadingSpaces: true }
                },
                imagesByReference: true,
                tableAutoSize: true
            });

            const setListTypes = (node: Content, level = 0) => {
                if (Array.isArray(node)) {
                    node.forEach(child => setListTypes(child, level));
                } else if (node && typeof node === 'object') {
                    const ulNode = node as ContentUnorderedList;

                    // Set type based on nesting level
                    if (ulNode.ul) {
                        if (level === 0 || level === 3) ulNode.type = 'disc';
                        if (level === 1 || level === 4) ulNode.type = 'circle';
                        if (level === 2 || level === 5) ulNode.type = 'square';

                        // Recurse into child list items
                        node.ul.forEach(item => setListTypes(item, level + 1));
                    } else {
                        Object.values(node).forEach(child => setListTypes(child, level));
                    }
                }
            };

            // Convert list style types to the typical type you'd see in html
            setListTypes(converted);

            const getCurrentDate = () => {
                const today = new Date();
                const yyyy = today.getFullYear();
                const mm = String(today.getMonth() + 1).padStart(2, '0');
                const dd = String(today.getDate()).padStart(2, '0');
                return `${yyyy}-${mm}-${dd}`;
            };

            const docDefinition = {
                content: converted,
                header: () => {
                    return {
                        columns: [
                            // {
                            //     text: title ? title.textContent || '' : '',
                            //     alignment: 'left',
                            //     fontSize: 9,
                            //     margin: [10, 10, 0, 0]
                            // },
                            {
                                text: getCurrentDate(),
                                alignment: 'right',
                                fontSize: 9,
                                margin: [0, 10, 10, 0]
                            }
                        ]
                    };
                },
                footer: (currentPage: number, pageCount: number) => {
                    return {
                        columns: [
                            {
                                text: `${currentPage} / ${pageCount}`,
                                alignment: 'center',
                                fontSize: 9,
                                margin: [0, 10, 0, 0]
                            }
                        ]
                    };
                },
                defaultStyle: {
                    font: 'PTSans'
                }
            };

            // Fix bug where content is wrapped in an additional object caused by adding `imagesByReference: true`
            const output = {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                content: docDefinition.content.content, // Ignore type error here, caused by bug mentioned above
                header: docDefinition.header,
                footer: docDefinition.footer,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                images: docDefinition.content.images, // Ignore type error here, caused by bug mentioned above
                defaultStyle: docDefinition.defaultStyle
            };

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            pdfMake.createPdf(output).download(`${exportName}.pdf`); // Ignore type error here, caused by bug mentioned above
        });
    });
};
