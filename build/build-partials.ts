#!/usr/bin/env tsx

/*!
 * Script to compile partials.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { getPackageNamesRequested } from './functions/get-package-names-requested';
import { repositoryConfig } from '../packages/build-tools/build/data/repository-config';
import { updateContent } from './functions/update-content';

const packageNamesRequested = getPackageNamesRequested([
    'assets',
    'astro',
    'build-tools',
    'ccm',
    'core',
    'feed-tools',
    'test-tools',
    'playwright'
]);

if (packageNamesRequested.length === 0) {
    process.exit(0);
}

interface UpdateLanguageAttributes {
    files: string[];
    destination: string;
    newExt: string;
}

const updateLanguageAttributes = ({
    files,
    destination,
    newExt
}: UpdateLanguageAttributes) => {
    files.forEach(file => {
        const oldExt = path.extname(file);

        if (oldExt !== newExt) {
            let newFileName = path.basename(file, oldExt);

            if (newExt === '.cshtml') {
                newFileName = `_${newFileName}`;
            }

            if (newExt === '.hbs') {
                newFileName = newFileName.toLowerCase();

                // Add partial front matter
                updateContent({
                    destination: destination,
                    targetFile: file,
                    targetFileDestination: destination,
                    targetFileContentToReplace: null,
                    replaceWithContent: file,
                    replacementContentIsFile: true,
                    replacementTemplate: `---\npartial: ${newFileName}\n---\n{0}`
                });
            }

            fs.renameSync(path.join(destination, file), path.join(destination, `${newFileName}${newExt}`));
        }
    });
};

const partialLanguages = new Set<string>();
packageNamesRequested.forEach(workspace => {
    const repositoryInfo = repositoryConfig[workspace];

    if (repositoryInfo) {
        partialLanguages.add(repositoryInfo.language);
    }
});

partialLanguages.forEach(language => {
    const tempOutputDir = `temp/partials/${language}/`;

    // Copy files to temporary output directory
    fs.mkdirSync(tempOutputDir, { recursive: true });
    fs.cpSync('src/partials/', tempOutputDir, { recursive: true, force: true });

    updateContent({
        destination: tempOutputDir,
        targetFile: 'GlobalNavigation.html',
        targetFileDestination: tempOutputDir,
        targetFileContentToReplace: '<input id="themeToggle" />',
        replaceWithContent: 'ThemeToggle.html',
        replacementContentIsFile: true
    });

    if (language === 'astro' || language === 'hbs') {
        fs.rmSync(path.join(tempOutputDir, 'TopAlertBanner.html'));

        updateContent({
            destination: tempOutputDir,
            targetFile: 'SocialMedia.html',
            targetFileDestination: tempOutputDir,
            targetFileContentToReplace: '@@chocolatey',
            replaceWithContent: '@chocolatey',
            replacementContentIsFile: false
        });
    }

    if (language === 'astro') {
        // Handle astro-specific logic here
    }

    if (language === 'hbs') {
        // Handle hbs-specific logic here
    }

    if (language === 'cshtml') {
        updateContent({
            destination: tempOutputDir,
            targetFile: 'TopAlertBanner.html',
            targetFileDestination: tempOutputDir,
            targetFileContentToReplace: 'topNoticeText = ""',
            replaceWithContent: 'AlertText.html',
            replacementContentIsFile: true,
            replacementTemplate: 'topNoticeText = "{0}"'
        });
    }

    fs.rmSync(path.join(tempOutputDir, 'AlertText.html'));

    // Update extension
    const files = fs.readdirSync(tempOutputDir);
    updateLanguageAttributes({
        files: files,
        destination: tempOutputDir,
        newExt: `.${language}`
    });
});

// Place into packages
packageNamesRequested.forEach(workspace => {
    const repositoryInfo = repositoryConfig[workspace];

    const destination = `packages/${workspace}/dist/partials/`;
    fs.mkdirSync(destination, { recursive: true });
    fs.cpSync(`temp/partials/${repositoryInfo.language}/`, destination, { recursive: true, force: true });
    console.log(`✅ Partials built and copied for ${workspace}`);
});
