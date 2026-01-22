#!/usr/bin/env tsx

import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import dotenv from 'dotenv';

dotenv.config();

// Base path to the choco-theme repo
const basePath = process.env.CHOCO_THEME_PATH;
if (!basePath) {
    console.error('Please set CHOCO_THEME_PATH in your environment or .env file.');
    process.exit(1);
}

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

// Determine which packages to link (all if none specified)
const args = process.argv.slice(2);
const packagesToLink = args.length > 0 ? args : Object.keys(packageTypeMap);

// Validate packages
for (const pkg of packagesToLink) {
    if (!packageTypeMap[pkg]) {
        console.error(`Package "${pkg}" is not listed in dependencies or devDependencies.`);
        process.exit(1);
    }
}

// Link each package
for (const pkg of packagesToLink) {
    const packagePath = [basePath, 'packages', pkg].join('/');

    // Optional: check if the folder exists
    if (!fs.existsSync(packagePath)) {
        console.error(`Package folder not found: ${packagePath}`);
        continue;
    }

    const typeFlag = packageTypeMap[pkg] === 'dev' ? '--dev' : '';
    try {
        console.log(`Linking @chocolatey-software/${pkg} from ${packagePath} (${packageTypeMap[pkg]}Dependency)...`);
        execSync(`yarn add @chocolatey-software/${pkg}@portal:${packagePath} ${typeFlag}`, {
            stdio: 'inherit',
        });
    } catch (err) {
        console.error(`Failed to link package ${pkg}:`, err instanceof Error ? err.message : err);
    }
}

console.log('All done!');
