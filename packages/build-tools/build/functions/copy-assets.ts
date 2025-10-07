#!/usr/bin/env tsx

/*!
 * A helper function to copy items where they need to go.
 */

import * as fs from 'node:fs';

export interface CopyAssets {
    task: string;
    source: string;
    destination: string;
    isFolder?: boolean;
}

export const copyAssets = ({
    task,
    source,
    destination,
    isFolder = true
}: CopyAssets) => {
    // Clean destination
    // fs.rmSync(destination, { force: true, recursive: isFolder });

    // Copy theme
    fs.cpSync(source, destination, { recursive: isFolder, force: true });

    console.log(`✅ ${task} copied`);
};