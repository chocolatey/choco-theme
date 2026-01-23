#!/usr/bin/env tsx

import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

// Resolve the consumer repo's package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
    console.error('No package.json found in repo root (consumer repo).');
    process.exit(1);
}

type PackageTypeMap = Record<string, 'dev' | 'prod'>;

// Read consumer repo dependencies
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const dependencies: Record<string, string> = packageJson.dependencies || {};
const devDependencies: Record<string, string> = packageJson.devDependencies || {};

// Build package type map
const packageTypeMap: PackageTypeMap = {};
for (const pkg of Object.keys(dependencies)) {
    if (pkg.startsWith('@chocolatey-software/')) {
        packageTypeMap[pkg.replace('@chocolatey-software/', '')] = 'prod';
    }
}
for (const pkg of Object.keys(devDependencies)) {
    if (pkg.startsWith('@chocolatey-software/')) {
        packageTypeMap[pkg.replace('@chocolatey-software/', '')] = 'dev';
    }
}

// Determine which packages to link (all if none specified) and branch name
const args = process.argv.slice(3);
const branch = process.argv.slice(2, 3)[0];
const packagesToLink = args.length > 0 ? args : Object.keys(packageTypeMap);

// Validate packages
for (const pkg of packagesToLink) {
    if (!packageTypeMap[pkg]) {
        console.error(`Package "${pkg}" is not listed in dependencies or devDependencies.`);
        process.exit(1);
    }
}

for (const pkg of packagesToLink) {
    // Find the version number of the package in the package.json and replace with the GitHub link as the version instead
    console.log(`Linking package ${pkg}...`);

    const depType = packageTypeMap[pkg] === 'dev' ? 'devDependencies' : 'dependencies';

    packageJson[depType][`@chocolatey-software/${pkg}`] = `chocolatey/choco-theme#head=${branch}&workspace=@chocolatey-software/${pkg}`;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');

console.log('Updated package.json with linked packages.');

// Run yarn to install linked packages
try {
    console.log('Running yarn to install linked packages...');
    execSync('yarn', {
        stdio: 'inherit',
    });
} catch (err) {
    console.error('Yarn failed to install linked packages:', err instanceof Error ? err.message : err);
}

console.log('All done!');
