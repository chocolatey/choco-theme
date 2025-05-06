#!/usr/bin/env ts-node

/*!
 * Script to globally update content of assets.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import { updateContent } from './functions/update-content';

const init = async () => {
    const fileValidationJs = ['validation.js', 'validation.min.js'];

    for await (const file of fileValidationJs) {
        console.log(`🚀 Updating content for ${file}...`);
        await updateContent({
            destination: './dist/js',
            targetFile: file,
            targetFileDestination: './dist/js',
            targetFileContentToReplace: 'input-validation-error',
            replaceWithContent: 'input-validation-error is-invalid',
            replacementContentIsFile: false
        });

        await updateContent({
            destination: './dist/js',
            targetFile: file,
            targetFileDestination: './dist/js',
            targetFileContentToReplace: 'field-validation-error',
            replaceWithContent: 'field-validation-error invalid-feedback',
            replacementContentIsFile: false
        });

        await updateContent({
            destination: './dist/js',
            targetFile: file,
            targetFileDestination: './dist/js',
            targetFileContentToReplace: '.field-validation-error invalid-feedback',
            replaceWithContent: '.field-validation-error.invalid-feedback',
            replacementContentIsFile: false
        });
        console.log(`✅ Content for ${file} updated`);
    }
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
