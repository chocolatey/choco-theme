# @chocolatey-software/astro

> **NOTE: This project is used on Chocolatey websites and is being released for the benefit of the community. While we endeavour to help and fix issues, it will be limited to GitHub issues, discussions and pull requests when we are able to.**

This package contains all Astro specific dependencies needed to run Astro on a Chocolatey project or website.

## Install on Project or Website

Using yarn:

```powershell
yarn add @chocolatey-software/astro --dev
```

If you have used to the Astro CLI to install dependencies on a project, you will need to remove those dependencies in replace of this package.

## Develop

See the [README.md on the main choco-theme repository](https://github.com/chocolatey/choco-theme?tab=readme-ov-file#commands#developing-choco-theme-packages) for instructions on how to link this package to a project or website.

## Upgrade

Before upgrading Astro dependencies, [review the changelog](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md) to ensure there is nothing that will need to change in the repositories that use it. If changes are required, issues should be created to track and implement them with the upgrade of the @chocolatey-software/astro package. To upgrade the dependencies in this package that are managed by Astro, run the following command from within the `packages/astro` folder:

```powershell
yarn dlx @astrojs/upgrade
```

## How to Override Automatically Generated Heading ID's on a Project or Website

Astro automatically generates ID's for `<h1>` - `<h6>`. Unfortunately, it [generates invalid ID's](https://github.com/withastro/astro/issues/11002) when the heading starts with a number. To address this issue, @chocolatey-software/astro uses the [remark-custom-header-id](https://github.com/sindresorhus/remark-custom-header-id) plugin. See the example below on how to use this plugin to override an ID:

```md
## 0.12.1 (May 23, 2024) \{#may-23-2024}
```

## Understand Astro Components

The Chocolatey Design System has all information relating to Astro Components and how to use them:

* Learn about Astro and how to use [Components in `.mdx` and `.astro`](https://design.chocolatey.org/foundations/astro) file types.
* Learn how to use the [`<Callout />` Component](https://design.chocolatey.org/components/callouts) to display notes and important information.
* Learn how to use the [`<CollapseButton />` Component](https://design.chocolatey.org/collapse-button) to display a button that triggers a collapsed element.
* Learn how to use the [`<DynamicCodeBlock />` and `<DynamicCodeBlockInput />` Components](https://design.chocolatey.org/components/dynamic-code-block) to display a code block with variables that can be replaced with values from inputs.
* Learn how to use the [`<Iframe />` Component](https://design.chocolatey.org/components/iframe) to display videos with defined aspect ratios.
* Learn how to use the [`<Tabs />` Component](https://design.chocolatey.org/components/tabs) to display content in tabbed interface.
* Learn how to use the [`<Xref />` Component](https://design.chocolatey.org/components/xref) to link to other documents within this repository.

## Markdown Diagrams with Mermaid

[Mermaid](https://mermaid.js.org/) allows an easy way to display information with diagrams written in markdown. A simple example of a [flowChart](https://mermaid.js.org/syntax/flowchart.html) diagram could be as follows:

```md
    ```mermaid
      flowchart LR
        A ==> B
    ```
```
