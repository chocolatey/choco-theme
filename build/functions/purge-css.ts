#!/usr/bin/env ts-node

/*!
 * Function to run PurgeCSS on the CSS files for use in each repository.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import { PurgeCSS } from 'purgecss';
import { RepositoryConfig } from '../data/repository-config';

export interface PurgeCss {
    source: string;
    repository: RepositoryConfig;
}

export const purgeCss = async ({
    source,
    repository
}: PurgeCss): Promise<void> => {
    console.log('🚀 Purging CSS with PurgeCSS...');
    // Copy non purged CSS and add a temp extension
    await fs.cp(source, `${repository.css}${repository.name}.min.temp.css`);

    const purgeCSSResult = await new PurgeCSS().purge({
        content: repository.purgeCss.content,
        safelist: repository.purgeCss.safelist,
        // fontFace: true, // Note: This is disabled because it was removing Font Awesome fonts
        keyframes: true,
        // variables: true, // Note: This is stripping out too many CSS variables that are actually in use
        css: [source]
    });

    // Write purged content back to the file
    await fs.writeFile(source, purgeCSSResult[0].css);

    // Update file name
    await fs.rename(source, `${repository.css}${repository.name}.min.purged.css`);

    // Change temp extension of non purged CSS back to original
    await fs.rename(`${repository.css}${repository.name}.min.temp.css`, source);

    console.log('✅ PurgeCSS complete');
};
