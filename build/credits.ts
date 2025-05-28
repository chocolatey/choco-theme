#!/usr/bin/env ts-node

/*!
 * Script to generate the credits.json file.
 * Copyright 2020-2025 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';

const file = 'credits.json';
const oldFile = 'credits.old.json';
const packageJsonFile = 'package.json';
const yellowOpen = '\x1b[33m';
const yellowClose = '\x1b[0m';

interface DependencyEntry {
    name: string;
    link: string;
    version: string;
    licenseType?: string | string[];
    installedVersion?: string;
    licenses: {
        type: string;
        link: string;
    }[];
}

interface OutputJson {
    name: string;
    version: string;
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
        console.warn(`${yellowOpen}No old file found or failed to parse. Proceeding with empty defaults.${yellowClose}`);
    }

    for (const entry of rawArray) {
        // Rename installedVersion to version
        entry.version = entry.installedVersion;
        delete entry.installedVersion;

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
                    // Default to 'Other' if no specific license is known
                    entry.licenseType = 'Other';
                    console.warn(`${yellowOpen}No licenseType provided for ${entry.name}. Setting to 'Other'. License must be updated manually.${yellowClose}`);
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
            const oldLink = old?.licenses?.find(l => l.type === type)?.link ?? '';
            const keepLink = old && old.version === entry.version;

            if (!keepLink && oldLink) {
                console.warn(`${yellowOpen}License link for ${entry.name} has been removed. The license url must be manually updated.${yellowClose}`);
            }

            return {
                type: type,
                link: keepLink ? oldLink : ''
            };
        });

        // If no license link are found, warn the user
        if (!entry.licenses.some(l => l.link)) {
            console.warn(`${yellowOpen}No license link found for ${entry.name}. The license url must be manually updated.${yellowClose}`);
        }

        // If the entry has multiple licenses, either add to the known multi-license packages or warn the user
        const knownMultiLicensePackages = ['@fortawesome/fontawesome-free'];

        if (entry.licenses.length > 1) {
            if (!knownMultiLicensePackages.includes(entry.name)) {
                console.warn(`${yellowOpen}Multiple licenses detected for ${entry.name}. You must manually inspect and choose the correct license, or include multiple if needed.${yellowClose}`);
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
        version: parsedPackageJson.version,
        dependencies: rawArray
    };

    // Generate the new file
    await fs.writeFile(file, JSON.stringify(wrapped, null, 4));

    // Delete the old file if everything succeeded
    await fs.unlink(oldFile);
};

init().catch(err => {
    console.error('Error generating credits.json:', err);
    process.exit(1);
});
