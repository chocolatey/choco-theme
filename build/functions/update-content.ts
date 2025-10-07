#!/usr/bin/env tsx

/*!
 * Function to update variable content in a file depending on the repository.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

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

export const updateContent = ({
    destination,
    targetFile,
    targetFileDestination,
    targetFileContentToReplace,
    replaceWithContent,
    replacementContentIsFile = false,
    replacementTemplate = null
}: UpdateContent) => {
    const originalContent = fs.readFileSync(path.join(targetFileDestination, targetFile), utf8Encoding);

    if (replacementContentIsFile) {
        replaceWithContent = fs.readFileSync(path.join(destination, replaceWithContent), utf8Encoding);
    }

    if (replacementTemplate) {
        if (!targetFileContentToReplace) {
            targetFileContentToReplace = replaceWithContent;
        }

        replaceWithContent = replacementTemplate.replaceAll('{0}', replaceWithContent);
    }

    const newFile = originalContent.replaceAll(targetFileContentToReplace, replaceWithContent);

    fs.writeFileSync(path.join(targetFileDestination, targetFile), newFile, utf8Encoding);
};
