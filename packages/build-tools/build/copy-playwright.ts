#!/usr/bin/env tsx

/*!
 * Script to copy global Playwright files.
 */

import * as fs from 'node:fs';

const source = 'node_modules/@chocolatey-software/playwright/global';
const destination = 'playwright/global';

// Clean destination
fs.rmSync(destination, { force: true, recursive: true });

// Copy global Playwright files
fs.cpSync(source, destination, { recursive: true, force: true });

console.log('✅ Playwright copied');
