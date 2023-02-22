# Chocolatey choco-theme

**NOTE: This project is used on Chocolatey websites and is being released for the benefit of the community. While we endeavour to help and fix issues, it will be limited to GitHub issues, discussions and pull requests when we are able to.**

This repository holds all of the CSS, JS, images, and shared partial files that are used across many Chocolatey projects. 

## Getting Started

### Step 1: Setup Yarn

#### Install Yarn

Navigate to the root of your repository where you want the `node_modules` folder to be installed. Follow the directions at the below links:

1. https://yarnpkg.com/getting-started/install#install-corepack
1. https://yarnpkg.com/getting-started/install#initializing-your-project

A new `package.json` and `.yarnrc.yml` file will be generated after the above steps are complete.

#### Modify `.yarnrc.yml` File

In the newly generated `.yarnrc.yml` file, copy the following lines to the end of the document:

```
nodeLinker: node-modules
checksumBehavior: "update"
```

#### Modify `package.json` File

In the choco-theme repository, navigate to `getting-started/_package.json`, and copy the contents into the new `package.json` file that was just created in your project.

* Be sure not to change lines 2 and 3, as these are specific to your new project.
* Update the git information in the package.json file in your new project to the correct information.

#### Update `.gitignore` File

Add the following lines to the `.gitignore` file in your repository. Any file path containing `input` may need updated to your specific repository folder structure.

```
input/assets/css/
input/assets/js/
input/assets/fonts/
input/assets/images/global-shared/
input/global-partials/
apple-touch-*.png
favicon.ico
node_modules/
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

### Step 2: Setup Gulp

#### Copy `gulpfile.js` File Into Your Repository

In the choco-theme repository, navigate to `getting-started/_gulpfile.js`, and copy the file into your new repository in the same directory as the `package.json` file. Change the name to `gulpfile.js`.

Depending on the new project setup, the variable paths in `gulpfile.js` may need updated. There is a block in `gulpfile.js` that should look similar to below:

```
const paths = {
    input: 'input/',
    assets: 'input/assets/',
    partials: 'input/global-partials',
    node_modules: 'node_modules/',
    theme: 'node_modules/choco-theme/'
};
```

#### Copy `bundleconfig.json` File Into Your Repository

In the choco-theme repository, navigate to `getting-started/_bundleconfig.json`, and copy the file into your new repository in the same directory as the `package.json` file. Change the name to `bundleconfig.json`.

In the bundle named `input/assets/js/chocolatey.bundle.js` you will need to modify the input file name to match the name of your project. Replace the `${projectName}` variable.

#### Create a New JavaScript File

In choco-theme, you will need to copy a file inside of `js/init` into the same folder and name it according to the project name, and the name that you chose for the `bundleconfig.json` file's input path in the step above.

At this point, an informed decision will need to be made about what JavaScript files from choco-theme need to be included in the project.

### Step 3: Run It!

#### Yarn

From the command line in the root of your repository where the `package.json` file is located, run the command:

```
yarn
```

This will generate the `node_modules` folder an install any dependencies.

#### Gulp

From the command line in the root of your repository where the `package.json` file is located, run the command:

```
gulp
```

This will generate all the CSS and JS and place images and global partials in the correct folders.

#### Include Assets in HTML

Directly before the closing `</head>` tag in your HTML document, include the following lines:

```
<link rel="stylesheet" href="/assets/css/chocolatey.bundle.min.css">
<script type="text/javascript" src="/assets/js/chocolatey-head.bundle.min.js"></script>
```

Directly before the closing `</body>` tag in your HTML document, include the following lines:

```
<script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.includes,Array.prototype.find,Number.parseFloat%2CNumber.parse%2CNodeList.prototype.forEach%2CNumber.parseInt"></script>
<script type="text/javascript" src="/assets/js/chocolatey.bundle.min.js"></script>
```

File paths may need to be updated based on your project structure.

Given that everything succeeded, choco-theme is set up and ready to go!

## ESLint
To run ESLint on a file or folder, run the following command `yarn run eslint js/filename.js`. Visit the [ESLint documentation](https://eslint.org/docs/latest/user-guide/getting-started#installation-and-usage) for more information.

## Sytlelint
To run Stylelint on a file or folder, run the following command `yarn run stylelint "scss/filename.scss"`. Visit the [Stylelint documentation](https://stylelint.io/) for more information.

## What's Included

### External Libraries

Choco-theme contains many external libraries in which it depends on for various features.

| Icon               | Meaning                                                   |
|--------------------|-----------------------------------------------------------|
| :clock3:           | Pending to be used or seasonal.                           |
| :heavy_check_mark: | Currently used.                                           |
| :heavy_minus_sign: | Not used.                                                 |
| :grey_question:    | May or may not be used. Project may be under development. |

| External Libraries            | chocolatey.org     | community          | docs               | blog               | design             | company            | chocolateyfest.com | boxstarter.org     | zendesk            |
|-------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------| -------------------|
| jQuery                        | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Bootstrap                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Popper                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Font Awesome                  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: |
| Luxon                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Flatpickr                     | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Clipboard                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Chartist                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Chartist Plugin Legend        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| DataTables                    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| AnchorJS                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Canvas Confetti               | :clock3:           | :clock3:           | :clock3:           | :clock3:           | :clock3:           | :heavy_minus_sign: | :clock3:           | :heavy_minus_sign: | :heavy_minus_sign: |
| DOCSEARCH (Algolia)           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Elasticsearch                 | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| EasyMDE                       | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Mousetrap                     | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Knockout                      | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Lite YouTube Embed            | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: |
| Marked                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| noUiSlider                    | :clock3:           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Add-to-Calendar Button        | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Prism                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Splide                        | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| typeahead.js                  | :heavy_minus_sign: | :clock3:           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jQuery Validation             | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jQuery Validation Unobtrusive | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |

### Custom JavaScript

Along with external libraries, choco-theme contains many individual custom JavaScript files. The functions have been split up in a way that allows them to be included if desired in any project, minimizing the need for them to be required.

| Custom JavaScript                 | Notes                                                                                      |
|-----------------------------------|--------------------------------------------------------------------------------------------|
| chocolatey-alerts.js              | Top banner and cookie notice.                                                              |
| chocolatey-anchors.js             | Initializes anchor.js.                                                                     |
| chocolatey-announcements.js       | Sets cookie and UI notifications for right flyout.                                         |
| chocolatey-authentication.js      | Shows login/logout navigations based on authentication status.                             |
| chocolatey-birthday.js            | Enables confetti.                                                                          |
| chocolatey-carousels.js           | Prevents carousels from auto playing on mobile that have fixed heights on desktop.         |
| chocolatey-clipboard.js           | Initializes clipboard.js.                                                                  |
| chocolatey-code.js                | Manually highlights code blocks with prism.js.                                             |
| chocolatey-collapse-nested.js     | Allows navigation to nested tabs or collapsed items.                                       |
| chocolatey-collapse-responsive.js | Toggles collapsed items and navigates to them.                                             |
| chocolatey-collapse-topnav.js     | Special handling for nested collapse in top navigation.                                    |
| chocolatey-collapse-y-height.js   | Configures page height based on collapsed or shown items.                                  |
| chocolatey-courses.js             | Sets cookies and manages courses when unauthenticated.                                     |
| chocolatey-docs.js                | Special handling of titles in the docs project only.                                       |
| chocolatey-docsearch.js           | Initializes the docsearch library for docs.chocolatey.org.                                  |
| chocolatey-dropdown-hover.js      | Controls the top navigation hoverable dropdowns.                                           |
| chocolatey-events.js              | Controls showing/hiding of time sensitive information in the events area.                  |
| util/chocolatey-functions.js      | Provides helper functions that can be imported into any JavaScript file.                   |
| chocolatey-internal-url.js        | Sets internal url in code blocks based on user input.                                      |
| chocolatey-lazyload.js            | Lazy loading for images and videos.                                                        |
| chocolatey-loader.js              | Shows and removes spinning Chocolatey loader.                                              |
| chocolatey-markdown.js            | Styles blockquotes based on emojis and checkboxes in markdown.                             |
| chocolatey-multi-tabs.js          | Allows showing or hiding of multiple tabs in one click.                                    |
| chocolatey-modal-auto-close.js    | Auto closes a modal when an external link is clicked.                                      |
| chocolatey-org.js                 | Special handling for chocolatey.org.                                                       |
| chocolatey-packages.js            | Controls interactive elements in the Chocolatey Community Repository package pages.        |
| chocolatey-placeholders.js        | Generates random placeholder images.                                                       |
| chocolatey-script-builder.js      | Controls Chocolatey Script Builder functionality.                                          |
| chocolatey-scrollspy.js           | Controls right hand scroll navigation highlighting to page anchors.                        |
| chocolatey-search.js              | Initializes mousetrap.js and search bar interactivity.                                     |
| chocolatey-show-hide.js           | Replaces button text on collapse buttons based on status.                                  |
| chocolatey-shuffle.js             | shuffles elements around inside a container.                                               |
| chocolatey-splide.js              | Initiates and controls Splide carousels.                                                   |
| chocolatey-stats.js               | Gets Chocolatey Community Repository package stats and displays them on a page.            |
| chocolatey-sticky-table.js        | Allows sticky headers on tables.                                                           |
| chocolatey-sticky-top.js          | Controls top navigation look and feel when a sticky top header is enabled.                 |
| chocolatey-substrings.js          | Shortens long strings and provides a clickable read more link.                             |
| chocolatey-tables.js              | Enables responsive tables that are generated by markdown.                                  |
| chocolatey-tooltips.js            | Initializes tooltips globally.                                                             |
| chocolatey-terminal.js            | Shows a typewriter effect based on given text.                                             |
| chocolatey-theme-toggle-head.js   | Controls dark and light modes on load.                                                     |
| chocolatey-theme-toggle.js        | Controls dark and light modes on load and on change.                                       |
| chocolatey-toggle-fade-show.js    | Manual usage of Bootstraps fade/show animations.                                           |
| chocolatey-inputs.js              | Adds Bootstrap classes to form elements.                                                   |  

### Custom CSS

While choco-theme utilizes the Bootstrap framework, many custom `.scss` files exist that further enhance the Chocolatey look and feel. 

All of the Bootstrap and custom Chocolatey `.scss` files are included in the build process. A `gulp` task is ran by the `purge-css` plugin that removes any unused rules. This significantly reduces the CSS footprint and maintainability.

### Global Partials

Global partials are imported on-demand by each project individually. They supply content that is used across multiple projects in an effort to reduce duplication of code.

| Global Partials                       | Notes                                                                                      |
|---------------------------------------|--------------------------------------------------------------------------------------------|
| AlertText.txt                         | The text for the top alert banner. This can be empty if no alert is wanted.                |
| CollapsingRightSidebarContent.txt     | Holds content for the right side flyout.                                                   |
| globalnavigation.txt                  | Global navigation element.                                                                 |
| socialmedia.txt                       | Social media follow buttons mainly found in project footers.                               |
| svgstyles.txt                         | Provides inline styles for svg's using CSS variables.                                      |
| TermsContent.html                     | The content on terms pages.                                                                |
| TermsLastUpdated.txt                  | The last updated date of terms pages.                                                      |
| TermsToc.html                         | The table of content navigation on terms pages.                                            |
| ThemeToggle.txt                       | Top navigation dark or light theme switcher.                                               |
| TopAlertBanner.txt                    | When alert text is supplied, this element will be shown in the top navigation.             |
