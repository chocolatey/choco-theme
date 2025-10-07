import { copyCodeBlocks } from '@choco-core/util/copy-code-blocks';
import { getCookie } from '@choco-core/util/get-cookie';
import { setCookie } from '@choco-core/util/set-cookie';

document.addEventListener('DOMContentLoaded', () => {
    const dynamicCodeBlockContainers = document.querySelectorAll('.dynamic-code-block-container');
    const dynamicCodeBlockInputs = document.querySelectorAll('.dynamic-code-block-input');

    const replaceCodeVariableInCodeBlock = (input, inputVariable, inputDefaultValue, inputCookie) => {
        const codeVariables = document.querySelectorAll(`.${inputVariable}`);
        const inputValue = inputCookie ? inputCookie : input.value;

        if (input.value || inputCookie) {
            for (const codeVariable of codeVariables) {
                codeVariable.textContent = inputValue;

                setCookie(inputVariable, inputValue, 'never');

                if (inputCookie && (inputCookie !== inputDefaultValue)) {
                    input.value = inputCookie;
                }
            }
        } else {
            for (const codeVariable of codeVariables) {
                codeVariable.textContent = inputDefaultValue;
                setCookie(inputVariable, inputDefaultValue, 'never');
            }
        }
    };

    dynamicCodeBlockInputs.forEach(input => {
        const inputVariable = input.name;
        const inputDefaultValue = input.getAttribute('data-default-value');
        const inputCookie = getCookie(inputVariable);
        const regex = new RegExp(`\\b${inputVariable}\\b`, 'g');

        for (const dynamicCodeBlockContainer of dynamicCodeBlockContainers) {
            dynamicCodeBlockContainer.innerHTML = dynamicCodeBlockContainer.innerHTML.replaceAll(regex, `<span class="${inputVariable}">${inputCookie ? inputCookie : inputDefaultValue}</span>`);
        }

        replaceCodeVariableInCodeBlock(input, inputVariable, inputDefaultValue, inputCookie);

        input.addEventListener('keyup', () => {
            replaceCodeVariableInCodeBlock(input, inputVariable, inputDefaultValue);
        });
    });

    copyCodeBlocks();
});
