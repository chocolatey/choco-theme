#!/usr/bin/env ts-node

/*!
 * Function to update variable content in a file depending on the repository.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import path from 'node:path';

// General variables
const utf8Encoding = 'utf-8';

export interface UpdateContent {
    destination: string;
    targetFile: string;
    targetFileDestination: string;
    targetFileContentToReplace: string | null;
    replaceWithContent: string;
    replacementContentIsFile?: boolean;
    replacementTemplate?: string | null;
}

export const updateContent = async ({
    destination,
    targetFile,
    targetFileDestination,
    targetFileContentToReplace,
    replaceWithContent,
    replacementContentIsFile = false,
    replacementTemplate = null
}: UpdateContent): Promise<void> => {
    const originalContent = await fs.readFile(path.join(targetFileDestination, targetFile), utf8Encoding);

    if (replacementContentIsFile) {
        replaceWithContent = await fs.readFile(path.join(destination, replaceWithContent), utf8Encoding);
    }

    if (replacementTemplate) {
        if (!targetFileContentToReplace) {
            targetFileContentToReplace = replaceWithContent;
        }

        replaceWithContent = replacementTemplate.replaceAll('{0}', replaceWithContent);
    }

    const newFile = originalContent.replaceAll(targetFileContentToReplace, replaceWithContent);

    await fs.writeFile(path.join(targetFileDestination, targetFile), newFile, utf8Encoding);
};
