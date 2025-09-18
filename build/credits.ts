#!/usr/bin/env ts-node

/*!
 * Script to generate the CREDITS.json file.
 * Copyright 2020-2025 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import { consoleColors } from './data/console-colors';

const file = 'CREDITS.json';
const oldFile = 'CREDITS.old.json';
const packageJsonFile = 'package.json';

interface DependencyEntry {
    name: string;
    link: string;
    version: string;
    licenseType?: string | string[];
    installedVersion?: string;
    licenses: {
        type: string;
        link: string;
        name?: string;
    }[];
}

interface OutputJson {
    name: string;
    isPrivate: boolean;
    link: string;
    version: string;
    licenseLink: string;
    licenseName: string;
    dependencies: DependencyEntry[];
}

const splitLicenses = (str: string) =>
    str
        .replace(/[()]/g, '')
        .split(/\s+(AND|OR)\s+/i)
        .filter(part => part !== 'AND' && part !== 'OR');

const init = async () => {
    const data = await fs.readFile(file, 'utf8');
    const rawArray: DependencyEntry[] = JSON.parse(data);

    // Load old data if available
    let oldDependencies: Record<string, DependencyEntry> = {};
    try {
        const oldData = await fs.readFile(oldFile, 'utf8');
        const oldJson: OutputJson = JSON.parse(oldData);
        oldDependencies = Object.fromEntries(
            oldJson.dependencies.map(dep => [dep.name, dep])
        );
    } catch {
        console.warn(`${consoleColors.yellow}No old file found or failed to parse. Proceeding with empty defaults.${consoleColors.revert}`);
    }

    for (const entry of rawArray) {
        // Rename installedVersion to version
        entry.version = entry.installedVersion;
        delete entry.installedVersion;

        // Manually override timeago link
        if (entry.name === 'timeago') {
            entry.link = 'https://github.com/rmm5t/jquery-timeago';
        }

        // Manually override cssnano version
        if (entry.name === 'cssnano') {
            entry.version = `cssnano@${entry.version}`;
        }

        const controlLinks = (name: string, version: string, link: string) => {
            if (entry.name === name) {
                if (entry.version !== version) {
                    console.warn(`${consoleColors.red}${name} version has changed from ${version} to ${entry.version}. Please verify the repository repository and license link manually.${consoleColors.revert}`);
                }

                entry.link = link;
            }
        };

        controlLinks (
            '@types/bootstrap',
            '5.2.10',
            'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bootstrap'
        );

        controlLinks (
            '@types/luxon',
            '3.7.1',
            'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/luxon'
        );

        controlLinks (
            '@types/node',
            '22.18.6',
            'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node'
        );

        controlLinks (
            'postcss-preset-env',
            '9.6.0',
            'https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env'
        );

        // Remove git+ and .git from urls
        if (entry.link) {
            entry.link = entry.link
                .replaceAll('git+', '')
                .replaceAll('.git', '')
                .replaceAll('git://', 'https://');
        }

        // If no licenseType is provided
        if (!entry.licenseType) {
            switch (entry.name) {
                case 'block-ui':
                    entry.licenseType = 'MIT';
                    break;
                default:
                    // Default to 'OTHER' if no specific license is known
                    entry.licenseType = 'OTHER';
                    console.warn(`${consoleColors.red}No licenseType provided for ${entry.name}. Setting to 'OTHER'. License must be updated manually.${consoleColors.revert}`);
                    break;
            }
        }

        // Manually update/keep licenseType if it contains multiple licenses
        switch (entry.name) {
            case 'chartist':
            case 'pwstrength-bootstrap':
                entry.licenseType = 'MIT';
                break;
        }

        if (typeof entry.licenseType === 'string') {
            entry.licenseType = splitLicenses(entry.licenseType);
        }

        const old = oldDependencies[entry.name];

        // Set licenses array with preserved links if versions match
        entry.licenses = entry.licenseType.map(type => {
            const oldLink = old?.licenses?.find(license => license.type === type)?.link ?? '';
            const keepLink = old && old.version === entry.version;
            let link = '';
            let name = '';

            if (!keepLink && oldLink) {
                console.warn(`${consoleColors.yellow}License link for ${entry.name} has been removed. The license url must be manually updated.${consoleColors.revert}`);
            }

            link = keepLink ? oldLink : '';
            name = link ? link : oldLink;

            if (name) {
                name = name.split('/').pop();
            }

            return {
                type,
                link,
                name
            };
        });

        // If no license link are found, warn the user
        if (!entry.licenses.some(license => license.link)) {
            console.warn(`${consoleColors.yellow}No license link found for ${entry.name}. The license url must be manually updated.${consoleColors.revert}`);
        }

        // If the entry has multiple licenses, either add to the known multi-license packages or warn the user
        const knownMultiLicensePackages = ['@fortawesome/fontawesome-free'];

        if (entry.licenses.length > 1) {
            if (!knownMultiLicensePackages.includes(entry.name)) {
                console.warn(`${consoleColors.yellow}Multiple licenses detected for ${entry.name}. You must manually inspect and choose the correct license, or include multiple if needed.${consoleColors.revert}`);
            }
        }

        // Remove licenseType from the entry
        delete entry.licenseType;
    }

    // Get the package.json content to extract the version
    const packageJsonContent = await fs.readFile(packageJsonFile, 'utf8');
    const parsedPackageJson = JSON.parse(packageJsonContent);

    const wrapped: OutputJson = {
        name: 'choco-theme',
        isPrivate: false,
        link: 'https://github.com/chocolatey/choco-theme',
        licenseLink: 'https://github.com/chocolatey/choco-theme/blob/main/LICENSE',
        licenseName: 'LICENSE',
        version: parsedPackageJson.version,
        dependencies: rawArray
    };

    // Generate the new file
    await fs.writeFile(file, JSON.stringify(wrapped, null, 4));

    // Delete the old file if everything succeeded
    await fs.unlink(oldFile);
};

init().catch(err => {
    console.error('Error generating CREDITS.json:', err);
    process.exit(1);
});
