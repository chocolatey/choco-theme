# Chocolatey choco-theme

> **NOTE: This project is used on Chocolatey websites and is being released for the benefit of the community. While we endeavour to help and fix issues, it will be limited to GitHub issues, discussions and pull requests when we are able to.**

This repository holds all of the CSS, JS, images, and shared partial files that are used across many Chocolatey projects.

## Commands

Before running any commands below, ensure you have ran `yarn` in the root of this repository, and have enabled corepack by running `corepack enable`.

| Script                                            | Action                                                                                        |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------|
| yarn audit                                        | Audits all dependencies recursively. |
| yarn build <package>                              | Builds the specified package. All packages will be built if no package is specified. |
| yarn eslint                                       | Runs ESLint to determine code style errors in JS and TS files. |
| yarn stylelint                                    | Runs Stylelint to determine code style errors in SCSS files. |
| yarn link-packages                                | Ran from the consuming repository of a package. This will link the passed in package to your local instance. |
| yarn update-version <major> <minor> <patch>       | Updates package versions only if the package contains changes. Accepts `major`, `minor`, or `patch` after `update-version`. See the [documentation for more details](https://yarnpkg.com/cli/version). |
| yarn publish-dry-run                              | Shows what packages will be published without publishing them. |

## Developing choco-theme packages

Chocolatey's choco-theme repository contains several packages that are used among various projects and websites. In order to develop these packages, it is often needed to link them to the
consuming project locally. The best way to do this is by setting an environment variable as described below based on your operating system.

Windows:

```powershell
[Environment]::SetEnvironmentVariable("CHOCO_THEME_PATH", "C:\source\choco-theme", "User")
```

macOs/Linux

```terminal
echo 'export CHOCO_THEME_PATH=C:\\source\\choco-theme' >> ~/.bashrc
source ~/.bashrc
```

After setting the environment variable, the below command can be ran from the consuming project or website from where the `package.json` is located.

```powershell
yarn link-packages <package name>

// Examples
yarn link-packages astro // Link the @chocolatey-software/astro package

yarn link-packages astro docs // Link the @chocolatey-software/astro and @chocolatey-software/docs packages

yarn link-packages // Link all @chocolatey/software/* packages listed in the package.json
```

Any changes that are made in the linked package(s) will be reflected in the consuming project or website locally. If the consuming project or website utilizes assets that are located in the `/dist` folder of the package, the build step must first be ran for that package within choco-theme. For example, if you have linked the docs repository using `yarn link-packages docs`, then in order to see changes reflected in your locally running website, you must first run `yarn build docs` to regenerate the `/dist` folder for @chocolatey-software/docs package.

### Install ESLint Extension

In order to see ESLint errors while in the source code, ensure that you have installed and enabled an [ESLint Extension](https://eslint.org/docs/latest/use/integrations) for your editor.

### Install Stylelint Extension

In order to see Stylelint errors while in the source code, ensure that you have installed and enabled a [Stylelint Extension](https://stylelint.io/awesome-stylelint/#editor-integrations) for your editor.
