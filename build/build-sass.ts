#!/usr/bin/env tsx

/*!
 * Script to compile scss.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import sass from 'sass';
import postcss from 'postcss';
import cssnano from 'cssnano';
import { getPackageNamesRequested } from './functions/get-package-names-requested';
import { repositoryConfig } from '../packages/build-tools/build/data/repository-config';

const packageNamesRequested = getPackageNamesRequested([
    'assets',
    'astro',
    'build-tools',
    'core',
    'feed-tools',
    'test-tools',
    'playwright'
]);

if (packageNamesRequested.length === 0) {
    process.exit(0);
}

const compileSass = (fileName: string, filePath: string) => {
    // console.log(`Compiling ${fileName}...`);

    return sass.compile(`${filePath}${fileName}`, {
        loadPaths: ['node_modules'],
        style: 'expanded',
        sourceMap: false,
        quietDeps: true,
        silenceDeprecations: [
            'if-function', // Silence deprecation warnings for `if()` function in Sass. This is not yet compatible with Bootstrap.
            'import', // Silence deprecation warnings for `@import` in Sass. This is not yet compatible with Bootstrap.
            'global-builtin' // Silence deprecation warnings for `global-builtin` in Sass. This is not yet compatible with Bootstrap.
        ]
    });
};

const outputAndMinifyCss = async (fileName: string, workspace: string, sassFile: sass.CompileResult) => {
    const outDir = path.join('packages', workspace, 'dist', 'css');
    const outFileCompiled = path.join(outDir, `${fileName}.css`);
    const outFileMinified = path.join(outDir, `${fileName}.min.css`);

    // Ensure output directory exists
    fs.mkdirSync(outDir, { recursive: true });

    // Write the CSS output to a file
    fs.writeFileSync(outFileCompiled, sassFile.css);

    console.log(`✅ Compiled ${fileName}.css for ${workspace}`);
    // console.log(`Compiling ${fileName}.min.css...`);

    // Minify the CSS output
    await postcss([
        cssnano({
            preset: 'default'
        })
    ]).process(sassFile.css,{
        from: outFileCompiled,
        to: outFileCompiled,
        map: false
    }).then(result => {
        fs.writeFileSync(outFileMinified, result.css);
        console.log(`✅ Compiled ${fileName}.min.css for ${workspace}`);
    });
};

packageNamesRequested.forEach(async workspace => {
    const repositoryInfo = repositoryConfig[workspace];

    // Compile SASS
    const workspaceFile = compileSass(`${workspace}.scss`, `src/scss/packages/${workspace}/`);

    // Modify the contents of the CSS
    if (repositoryInfo.name === repositoryConfig.ccr.name) {
        // Font Awesome & Image Headers
        workspaceFile.css = workspaceFile.css
            .replaceAll('../webfonts', '/Content/fonts/fontawesome-free')
            .replaceAll('/assets/images', '/Content/images');
    } else {
        // Font Awesome
        workspaceFile.css = workspaceFile.css.replaceAll('/webfonts', '/fonts/fontawesome-free');
    }

    // Output CSS
    await outputAndMinifyCss(workspace, workspace, workspaceFile);

    if (repositoryInfo.name === repositoryConfig.ccm.name) {
        // Compile SASS
        const jstreeFile = compileSass('jstree.scss', 'src/scss/packages/ccm/');
        const tempusDominusFile = compileSass('tempus-dominus.scss', 'src/scss/packages/ccm/');
        const vendorsFile = compileSass('vendors.scss', 'src/scss/packages/ccm/');

        // Modify the contents of the CSS
        jstreeFile.css = jstreeFile.css.replaceAll('url("32px.png")', 'var(--jstree-image-checkbox-path)');

        // Output CSS
        await outputAndMinifyCss('jstree', workspace, jstreeFile);
        await outputAndMinifyCss('tempus-dominus', workspace, tempusDominusFile);
        await outputAndMinifyCss('vendors', workspace, vendorsFile);
    }

    if (repositoryInfo.name === repositoryConfig.org.name) {
        // Compile SASS
        const atcbOverridesFile = compileSass('atcb-overrides.scss', 'src/scss/packages/org/');

        // Output CSS
        await outputAndMinifyCss('atcb-overrides', workspace, atcbOverridesFile);
    }
});
