#!/usr/bin/env tsx

/*!
 * Script to get and validate requested package names.
 */

import * as process from 'process';
import * as fs from 'node:fs';

export const getPackageNamesRequested = (packageNamesExcluded: string[]) => {
    let packageNamesRequested: string[] = process.argv.slice(2);
    const allPackageNames = fs.readdirSync('packages', { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
    const packageNamesFiltered: string[] = allPackageNames
        .filter(name => !packageNamesExcluded.includes(name));

    // If no package names are provided, use all available package names
    if (packageNamesRequested.length === 0 || (packageNamesRequested.length === 1 && packageNamesRequested[0] === 'dist') || (packageNamesRequested.length === 1 && packageNamesRequested[0] === 'temp')) {
        return packageNamesFiltered;
    }

    // If the package name requested is included in the allPackagesNames, but is not in the packageNamesFiltered, remove it from packageNamesRequested
    packageNamesRequested.forEach(workspace => {
        if (allPackageNames.includes(workspace) && !packageNamesFiltered.includes(workspace)) {
            packageNamesRequested = packageNamesRequested.filter(name => name !== workspace);
        }
    });

    // If the package name requested is not in the packageNamesFiltered, remove it from packageNamesRequested
    packageNamesRequested.forEach(workspace => {
        if (!packageNamesFiltered.includes(workspace)) {
            packageNamesRequested = packageNamesRequested.filter(name => name !== workspace);
        }
    });

    return packageNamesRequested;
};
