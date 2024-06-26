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
        isStatiq: boolean;
        isAstro: boolean;
        root?: string
    };
}

export const folderMapping: FolderMapping = {
    '--blog': {
        folder: 'blog',
        port: 5082,
        isStatiq: true,
        isAstro: false
    },
    '--boxstarter': {
        folder: 'boxstarter.org',
        port: 5083,
        isStatiq: true,
        isAstro: false
    },
    '--community': {
        folder: 'community.chocolatey.org',
        port: 55881,
        isStatiq: false,
        isAstro: false,
        root: '/chocolatey/Website'
    },
    '--design': {
        folder: 'choco-design-system',
        port: 5085,
        isStatiq: true,
        isAstro: false
    },
    '--docs': {
        folder: 'docs',
        port: 5086,
        isStatiq: false,
        isAstro: true
    },
    '--fest': {
        folder: 'chocolateyfest',
        port: 5084,
        isStatiq: true,
        isAstro: false
    },
    '--hub': {
        folder: 'admin-portal',
        protocol: 'https',
        port: 44362,
        isStatiq: false,
        isAstro: false,
        root: '/source/AdminPortal'
    },
    '--org': {
        folder: 'chocolatey.org',
        port: 5081,
        isStatiq: true,
        isAstro: false
    },
    '--portal': {
        folder: 'licensing-services',
        protocol: 'https',
        port: 44362,
        isStatiq: false,
        isAstro: false,
        root: '/source/LicensingServices'
    },
    '--zendesk': {
        folder: 'copenhagen_theme',
        isStatiq: false,
        isAstro: false
    }
};
