#!/usr/bin/env tsx

/*!
 * Script to rename the CREDITS.json file.
 * Copyright 2020-2025 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';

export const init = async () => {
    await fs.rename('./CREDITS.json', './CREDITS.old.json');
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
