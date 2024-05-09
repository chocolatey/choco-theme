#!/usr/bin/env ts-node

/*!
 * Script to bring up each specified repository to be viewed.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { spawn } from 'child_process';

import { folderMapping } from './data/preview-config';
import { loadingAnimation } from './functions/loading-animation';
import { consoleColors } from './data/console-colors';

const isWindows = process.platform === 'win32';

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
        console.log('🚀 Running preview scripts please be patient...');
    }

    try {
        const childProcessOne = spawn('yarn monitor-ports', [], {
            shell: true
        });

        childProcessOne.stdout.on('data', data => {
            const output = data.toString().trim();

            if (output.includes('Available on:')) {
                process.stdout.write('\r✅ ');
                console.log(`Preview directory is running on ${consoleColors.green}http://127.0.0.1:8080${consoleColors.revert}`);
            }
        });

        childProcessOne.on('exit', code => {
            if (code !== 0) {
                process.stdout.write('\r⛔ ');
                console.error(`http-server was unable to start and existed with error code ${code}`);
            }
        });

        // Array to store loading intervals for each script
        const loadingIntervals = foldersToRun.map(() => loadingAnimation());

        await Promise.all(foldersToRun.map(async (option, index) => {
            const folderConfig = folderMapping[option];
            const folderName = folderConfig.folder;
            const folderPath = path.join(__dirname, '../../', folderName);
            const port = folderConfig.port;

            // Determine platform specific information
            let command;
            let previewScript;

            if (isWindows) {
                previewScript = 'preview.ps1';
                command = `powershell.exe -File ./${previewScript} ${port}`;
            } else {
                previewScript = 'preview.sh';
                command = `./${previewScript} ${port}`;
            }

            const scriptPath = path.join(folderPath, previewScript);

            // Check if preview script exists
            try {
                await fs.access(scriptPath);
            } catch (error) {
                clearInterval(loadingIntervals[index]);
                process.stdout.write('\r🟨 ');
                console.log(`${folderName} does not contain a ${previewScript} file. Skipping...`);
                return; // Skip to the next folder
            }

            const childProcessTwo = spawn(command, [], {
                shell: true, // Needed for Windows to execute .sh files
                cwd: folderPath // Specify the working directory for the child process
                // stdio: 'pipe', // Default value - Works on Mac, but on Windows. On Windows, the .preview.ps1 file gives the error `Error: The handle is invalid.` and closes the running port that was just opened by the script
            });

            let scriptStarted = false;

            childProcessTwo.stdout.on('data', data => {
                const output = data.toString().trim();

                if (output.includes(`[INFO] Preview server listening at http://localhost:${port}`)) {
                    // Stop loading animation for this script
                    clearInterval(loadingIntervals[index]);
                    process.stdout.write('\r✅ ');
                    console.log(`Preview for ${folderName} is running on ${consoleColors.green}http://localhost:${port}${consoleColors.revert}`);
                    console.log(`🤖 Listening on ${consoleColors.green}http://localhost:${port}${consoleColors.revert}...`);
                }

                if (output.includes('Error: The handle is invalid.')) {
                    console.log('⛔ Error: The handle is invalid.');
                }

                if (output.includes('files have changed, re-executing')) {
                    console.log(`🚀 Rebuilding ${folderName}...`);
                    scriptStarted = true;
                }

                // Check if the output contains the completion message
                if (scriptStarted && output.includes('[INFO] ========== Completed')) {
                    console.log(`✅ ${folderName} rebuilt`);
                    console.log(`🤖 Listening on ${consoleColors.green}http://localhost:${port}${consoleColors.revert}...`);
                }
            });

            // Handle exit event
            childProcessTwo.on('exit', code => {
                if (code !== 0) {
                    clearInterval(loadingIntervals[index]);
                    process.stdout.write('\r⛔ ');
                    console.error(`Preview script in ${folderPath} exited with code ${code}`);
                }
            });
        }));
    } catch (error) {
        console.error(`⛔ Error: ${error}`);
    }
};

if (isWindows) {
    console.log('⛔ This script does not currently run on Windows.');
} else {
    init();
}
