#!/usr/bin/env ts-node

/*!
 * Script to build partials.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import path from 'node:path';
import { updateContent } from './functions/update-content';

export interface UpdateLanguageAttributes {
    files: string[];
    destination: string;
    newExt: string;
}

const updateLanguageAttributes = async ({
    files,
    destination,
    newExt
}: UpdateLanguageAttributes): Promise<void> => {
    for await (const file of files) {
        const oldExt = path.extname(file);

        if (oldExt !== newExt) {
            let newFileName = path.basename(file, oldExt);

            if (newExt === '.cshtml') {
                newFileName = `_${newFileName}`;
            }

            if (newExt === '.hbs') {
                newFileName = newFileName.toLowerCase();

                // Add partial front matter
                await updateContent({
                    destination: destination,
                    targetFile: file,
                    targetFileDestination: destination,
                    targetFileContentToReplace: null,
                    replaceWithContent: file,
                    replacementContentIsFile: true,
                    replacementTemplate: `---\npartial: ${newFileName}\n---\n{0}`
                });
            }

            await fs.rename(path.join(destination, file), path.join(destination, `${newFileName}${newExt}`));
        }
    }
};

const init = async () => {
    try {
        console.log('🚀 Building partials...');

        const destinationTemp = './dist/partials/temp';
        const destinationCshtml = './dist/partials/cshtml';
        const destinationHbs = './dist/partials/hbs';
        const destinationAstro = './dist/partials/astro';

        await fs.cp('./partials/', destinationTemp, { recursive: true });

        // Update GlobalNavigation.html
        await updateContent({
            destination: destinationTemp,
            targetFile: 'GlobalNavigation.html',
            targetFileDestination: destinationTemp,
            targetFileContentToReplace: '<input id="themeToggle" />',
            replaceWithContent: 'ThemeToggle.html',
            replacementContentIsFile: true
        });

        await fs.cp(destinationTemp, destinationCshtml, { recursive: true });
        await fs.cp(destinationTemp, destinationHbs, { recursive: true });
        await fs.cp(destinationTemp, destinationAstro, { recursive: true });
        await fs.rm(destinationTemp, { recursive: true });

        // hbs files
        await updateContent({
            destination: destinationHbs,
            targetFile: 'SocialMedia.html',
            targetFileDestination: destinationHbs,
            targetFileContentToReplace: '@@chocolatey',
            replaceWithContent: '@chocolatey',
            replacementContentIsFile: false
        });

        // Delete TopAlertBanner.html
        await fs.rm(path.join(destinationHbs, 'TopAlertBanner.html'));
        await fs.rm(path.join(destinationAstro, 'TopAlertBanner.html'));

        // cshtml files
        await updateContent({
            destination: destinationCshtml,
            targetFile: 'TopAlertBanner.html',
            targetFileDestination: destinationCshtml,
            targetFileContentToReplace: 'topNoticeText = ""',
            replaceWithContent: 'AlertText.html',
            replacementContentIsFile: true,
            replacementTemplate: 'topNoticeText = "{0}"'
        });

        // Delete AlertText.html
        await fs.rm(path.join(destinationHbs, 'AlertText.html'));
        await fs.rm(path.join(destinationCshtml, 'AlertText.html'));
        await fs.rm(path.join(destinationAstro, 'AlertText.html'));

        // Update file extensions and casing of names
        const filesHbs = await fs.readdir(destinationHbs);
        const filesCshtml = await fs.readdir(destinationCshtml);
        const filesAstro = await fs.readdir(destinationAstro);

        await updateLanguageAttributes({
            files: filesHbs,
            destination: destinationHbs,
            newExt: '.hbs'
        });

        await updateLanguageAttributes({
            files: filesCshtml,
            destination: destinationCshtml,
            newExt: '.cshtml'
        });

        await updateLanguageAttributes({
            files: filesAstro,
            destination: destinationAstro,
            newExt: '.astro'
        });

        console.log('✅ Partials built');
    } catch (error) {
        console.error(error);
    }
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
