#!/usr/bin/env ts-node

/*!
 * Configuration for repositories to be used by preview commands.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

export interface FolderMapping {
    [key: string]: {
        folder: string;
        protocol?: string;
        port?: null | number;
        isStatic: boolean;
        root?: string
    };
}

export const folderMapping: FolderMapping = {
    '--blog': {
        folder: 'blog',
        port: 5082,
        isStatic: true
    },
    '--boxstarter': {
        folder: 'boxstarter.org',
        port: 5083,
        isStatic: true
    },
    '--community': {
        folder: 'community.chocolatey.org',
        port: 55881,
        isStatic: false,
        root: '/chocolatey/Website'
    },
    '--design': {
        folder: 'choco-design-system',
        port: 5085,
        isStatic: true
    },
    '--docs': {
        folder: 'docs',
        port: 5086,
        isStatic: true
    },
    '--fest': {
        folder: 'chocolateyfest',
        port: 5084,
        isStatic: true
    },
    '--org': {
        folder: 'chocolatey.org',
        port: 5081,
        isStatic: true
    },
    '--portal': {
        folder: 'licensing-services',
        protocol: 'https',
        port: 44362,
        isStatic: false,
        root: '/source/LicensingServices'
    },
    '--zendesk': {
        folder: 'copenhagen_theme',
        isStatic: false
    }
};
