#!/usr/bin/env ts-node

/*!
 * Colors that are used in the terminal while running choco-theme commands.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

export const revert = '\x1b[0m';
export const green = '\x1b[32m';
export const red = '\x1b[31m';

export const consoleColors = {
    revert,
    green,
    red
};
