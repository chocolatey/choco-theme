#!/usr/bin/env ts-node

/*!
 * Determines the repository to use based on the provided parameters.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as process from 'process';
import { repositoryConfig } from '../data/repository-config';

// Process args
const params: Record<string, string> = {};
process.argv.slice(2).forEach(val => {
    const [key, value] = val.split('=');

    if (key.startsWith('--')) {
        params[key.slice(2)] = value;
    }
});

// Determine repository information
let repository = repositoryConfig.default;
if (params.repository && repositoryConfig[params.repository]) {
    repository = repositoryConfig[params.repository];
}

export { repository };
