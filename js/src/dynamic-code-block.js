import { copyCodeBlocks } from './util/functions';

document.addEventListener('DOMContentLoaded', () => {
    const dynamicCodeBlockContainers = document.querySelectorAll('.dynamic-code-block-container');
    const dynamicCodeBlockInputs = document.querySelectorAll('.dynamic-code-block-input');

    const replaceCodeVariableInCodeBlock = (input, inputVariable, inputDefaultValue) => {
        const codeVariables = document.querySelectorAll(`.${inputVariable}`);

        if (input.value) {
            for (const codeVariable of codeVariables ) {
                codeVariable.textContent = input.value;
            }
        } else {
            for (const codeVariable of codeVariables ) {
                codeVariable.textContent = inputDefaultValue;
            }
        }
    };

    dynamicCodeBlockInputs.forEach(input => {
        const inputVariable = input.name;
        const inputDefaultValue = input.getAttribute('data-default-value');
        const regex = new RegExp(`\\b${inputVariable}\\b`, 'g');

        for (const dynamicCodeBlockContainer of dynamicCodeBlockContainers) {
            dynamicCodeBlockContainer.innerHTML = dynamicCodeBlockContainer.innerHTML.replaceAll(regex, `<span class="${inputVariable}">${inputDefaultValue}</span>`);
        }

        replaceCodeVariableInCodeBlock(input, inputVariable, inputDefaultValue);

        input.addEventListener('keyup', () => {
            replaceCodeVariableInCodeBlock(input, inputVariable, inputDefaultValue);
        });
    });

    copyCodeBlocks();
});
