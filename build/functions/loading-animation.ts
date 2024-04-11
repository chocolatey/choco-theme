#!/usr/bin/env ts-node

/*!
 * Loading animation to be used in the terminal when running choco-theme commands.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

export const loadingAnimation = () => {
    const frames = ['-', '\\', '|', '/'];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r${frames[i]} Loading...`);
        i = (i + 1) % frames.length;
    }, 100);
};
