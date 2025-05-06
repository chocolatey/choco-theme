#!/usr/bin/env ts-node

/*!
 * Script to link specified folders to choco-theme for development.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { spawn } from 'child_process';

import { folderMapping } from './data/preview-config';
import { loadingAnimation } from './functions/loading-animation';

const init = async () => {
    // Parse command-line arguments
    let args = process.argv.slice(2);

    if (args[0] === '--all') {
        args = Object.keys(folderMapping);
    }

    const foldersToRun = args.filter(arg => folderMapping[arg]);

    if (foldersToRun.length === 0) {
        console.error('Please specify at least one valid option.');
        process.exit(1);
    } else {
        console.log('🚀 Linking folders to choco-theme...');
    }

    // Array to store loading intervals for each script
    const loadingIntervals = foldersToRun.map(() => loadingAnimation());

    await Promise.all(foldersToRun.map(async (option, index) => {
        const folderConfig = folderMapping[option];
        const folderName = folderConfig.folder;
        const chocoThemePath = folderConfig.root ? '../../../' : '../';
        const folderNamePath = folderConfig.root ? `${folderName}${folderConfig.root}` : folderName;
        const folderPath = path.join(__dirname, '../../', folderNamePath);

        // Check if folder exists
        try {
            await fs.access(folderPath);
        } catch {
            clearInterval(loadingIntervals[index]);
            process.stdout.write('\r🟨 ');
            console.log(`${folderName} does not exist. Skipping...`);
            return; // Skip to the next folder
        }

        try {
            const childProcess = spawn(`yarn link ${chocoThemePath}choco-theme`, [], {
                // stdio: 'inherit', // Use 'inherit' to directly pipe the output to the parent process
                shell: true, // Needed for Windows to execute .sh files
                cwd: folderPath // Specify the working directory for the child process
            });

            // Handle stdout data event
            childProcess.stdout.on('data', data => {
                const output = data.toString().trim();
                if (output.startsWith('➤ YN0072: │ The application uses portals')) {
                    // Stop loading animation for this script
                    clearInterval(loadingIntervals[index]);
                    process.stdout.write('\r✅ ');
                    console.log(`${folderName} linked`);
                }
            });

            // Handle exit event
            childProcess.on('exit', code => {
                if (code !== 0) {
                    clearInterval(loadingIntervals[index]);
                    process.stdout.write('\r⛔ ');
                    console.error(`${folderName} not linked and exited with code ${code}`);
                }
            });
        } catch (error) {
            clearInterval(loadingIntervals[index]);
            process.stdout.write('\r⛔ ');
            console.error(`${folderName} not linked. Error: ${error}`);
        }
    }));
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
