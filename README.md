# Chocolatey choco-theme 1.2.2

**NOTE: This project is used on Chocolatey websites and is being released for the benefit of the community. While we endeavour to help and fix issues, it will be limited to GitHub issues, discussions and pull requests when we are able to.**

This repository holds all of the CSS, JS, images, and shared partial files that are used across many Chocolatey projects. 

## Commands

Before running any commands below, ensure you have ran `yarn` in the root of this repository, and have enabled corepack by running `corepack enable`.

| Script                                            | Action                                                                                        |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------|
| yarn audit                                        | Audits all dependencies recursively and ignores [sweetalert2 vulnerability](https://github.com/advisories/GHSA-mrr8-v49w-3333). |
| yarn build                                        | Builds CSS, JS, and Partials.                                                                 |
| yarn change-version OLD_VERSION NEW_VERSION       | Runs all build steps and updates choco-theme to the version specified.                        |
| yarn lint                                         | Runs Stylelint and ESLint to determine code style errors.                                     |
| yarn monitor-ports                                | Opens a page to monitor preview ports and report their status.                                |
| yarn preview --PROJECT_NAME                       | Runs the preview script in desired repositories all at once for easy testing and development. |
| yarn preview-link --PROJECT_NAME                  | Links choco-theme locally to desired repositories for local development.                      |
| yarn preview-unlink --PROJECT_NAME                | Unlinks choco-theme and restores the packages.json and yarn.lock files.                       |
| yarn preview-upgrade NEW_VERSION --PROJECT_NAME   | Updates choco-theme to the specified version in desired repositories.                         |
| yarn preview-watch --PROJECT_NAME                 | Runs `yarn build` and `yarn-choco-theme` on desired repositories.                             |
| yarn watch                                        | Watches for changes in CSS, JS, and Partials, and rebuilds them automatically.                |

## Repository Project Names for Previewing 

The below options are used in the commands above that contain a `preview` keyword, and require a `--PROJECT NAME`. 

| --PROJECT_NAME | Suggested Cloned Folder Name  |
|----------------|-------------------------------|
| --blog         | blog                          |
| --boxstarter   | boxstarter.org                |
| --ccm          | choco-licensed-management-ui  |
| --community    | community.chocolatey.org      |
| --design       | choco-design-system           |
| --docs         | docs                          |
| --fest         | chocolateyfest                |
| --org          | chocolatey.org                |
| --portal       | licensing-services            |
| --zendesk      | copenhagen_theme              |
| --all          | Runs all above                |

## Previewing Repositories for Local Development

When developing choco-them locally, there is a need to run multiple websites at once that live in different repositories. Follow the steps below to bring them up all at once, and enable live updating of choco-theme:

1. Ensure you have the repositories cloned down to your local machine and at the same root level as the choco-theme repository. 
2. On each repository, it is a good idea to checkout a new branch with the same branch name, to keep track of progress easier.
3. To link each repository to your local instance of choco-theme, run `yarn preview-link --PROJECT_NAME`, for example `yarn preview-link --org --blog`.
    1. Before doing this, ensure that your cloned folder names match that in the file located at `choco-theme/build/data/preview-config.ts`. If they do not, you will need to either:
        1. Change the names of your folders or,
        2. Update the `preview-config.ts` file to your folder names, but do not commit the file. 
3. To enable choco-theme to build on demand and place files in repositories, run the command `yarn preview-watch --PROJECT_NAME`, for example `yarn preview-watch --org --blog`. 
4. To bring up each website, in a new command window, run the command `yarn preview --PROJECT_NAME`, for example `yarn preview --org --blog`. This will bring up a directory webpage where you can easily monitor each port and navigate to them.

With the steps above done, any changes you make to your local instance of choco-theme, or the linked repositories, will trigger choco-theme to rebuild, and then rebuild the repositories automatically.

## Install ESLint Extension

In order to see ESLint errors while in the source code, ensure that you have installed and enabled an [ESLint Extension](https://eslint.org/docs/latest/use/integrations) for your editor.

## Install Stylelint Extension

In order to see Stylelint errors while in the source code, ensure that you have installed and enabled a [Stylelint Extension](https://stylelint.io/awesome-stylelint/#editor-integrations) for your editor.

## External Libraries

Choco-theme contains many external libraries in which it depends on for various features.

| Icon               | Meaning                                                   |
|--------------------|-----------------------------------------------------------|
| :clock3:           | Pending to be used or seasonal.                           |
| :heavy_check_mark: | Currently used.                                           |
| :heavy_minus_sign: | Not used.                                                 |
| :grey_question:    | May or may not be used. Project may be under development. |

| External Libraries            | org                | community          | ccm                | docs               | blog               | design             | portal             | fest               | boxstarter         | zendesk            |
|-------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------| -------------------|
| jQuery                        | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Bootstrap                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Popper                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Font Awesome                  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: |
| Luxon                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Flatpickr                     | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Clipboard                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Chartist                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Chartist Plugin Legend        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| DataTables                    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| AnchorJS                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Canvas Confetti               | :clock3:           | :clock3:           | :heavy_minus_sign: | :clock3:           | :clock3:           | :clock3:           | :heavy_minus_sign: | :clock3:           | :heavy_minus_sign: | :heavy_minus_sign: |
| DOCSEARCH (Algolia)           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| autoComplete.js               | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| EasyMDE                       | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Mousetrap                     | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Knockout                      | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Lite YouTube Embed            | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: |
| Marked                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| noUiSlider                    | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Add-to-Calendar Button        | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Prism                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Splide                        | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jQuery Validation             | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jQuery Validation Unobtrusive | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Balance Text                  | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Tempus Dominus                | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| abp-web-resources             | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| BlockUI                       | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Cropper.js                    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jquery.serializeJSON          | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jsTree                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Moment.js                     | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Moment Timezone               | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| mustache.js                   | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| pwstrength-bootstrap          | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Sortable                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| sweetalert2                   | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| timeago                       | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Underscore.js                 | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| spin.js                       | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |

## Custom JavaScript and TypeScript

Along with external libraries, choco-theme contains many individual custom JavaScript and TypeScript files. The functions have been split up in a way that allows them to be included if desired in any project, minimizing the need for them to be required. While the majority of choco-theme is JavaScript, it is now encouraged to write any new code in TypeScript and place it in the `js/ts` directory.

| Custom JavaScript/TypeScript      | Notes                                                                                      |
|-----------------------------------|--------------------------------------------------------------------------------------------|
| alerts.js              | Top banner and cookie notice.                                                              |
| anchors.js             | Initializes anchor.js.                                                                     |
| announcements.js       | Sets cookie and UI notifications for right flyout.                                         |
| authentication.js      | Shows login/logout navigations based on authentication status.                             |
| birthday.js            | Enables confetti.                                                                          |
| carousels.js           | Prevents carousels from auto playing on mobile that have fixed heights on desktop.         |
| clipboard.js           | Initializes clipboard.js.                                                                  |
| ts/code.ts             | Manually highlights code blocks with prism.js.                                             |
| collapse-nested.js     | Allows navigation to nested tabs or collapsed items.                                       |
| collapse-responsive.js | Toggles collapsed items and navigates to them.                                             |
| collapse-topnav.js     | Special handling for nested collapse in top navigation.                                    |
| collapse-y-height.js   | Configures page height based on collapsed or shown items.                                  |
| courses.js             | Sets cookies and manages courses when unauthenticated.                                     |
| docs.js                | Special handling of titles in the docs project only.                                       |
| docsearch.js           | Initializes the docsearch library for docs.chocolatey.org.                                 |
| dropdown-hover.js      | Controls the top navigation hoverable dropdowns.                                           |
| events.js              | Controls showing/hiding of time sensitive information in the events area.                  |
| util/functions.js      | Provides helper functions that can be imported into any JavaScript file.                   |
| ts/util/functions.js   | Provides helper functions that can be imported into any TypeScript file.                   |
| internal-url.js        | Sets internal url in code blocks based on user input.                                      |
| lazyload.js            | Lazy loading for images and videos.                                                        |
| loader.js              | Shows and removes spinning Chocolatey loader.                                              |
| markdown.js            | Styles blockquotes based on emojis and checkboxes in markdown.                             |
| multi-tabs.js          | Allows showing or hiding of multiple tabs in one click.                                    |
| modal-auto-close.js    | Auto closes a modal when an external link is clicked.                                      |
| org.js                 | Special handling for chocolatey.org.                                                       |
| package-stats.js       | Gets Chocolatey Community Repository package stats and displays them on a page.            |
| packages.js            | Controls interactive elements in the Chocolatey Community Repository package pages.        |
| placeholders.js        | Generates random placeholder images.                                                       |
| script-builder.js      | Controls Chocolatey Script Builder functionality.                                          |
| scrollspy.js           | Controls right hand scroll navigation highlighting to page anchors.                        |
| search.js              | Initializes mousetrap.js and search bar interactivity.                                     |
| show-hide.js           | Replaces button text on collapse buttons based on status.                                  |
| shuffle.js             | shuffles elements around inside a container.                                               |
| splide.js              | Initiates and controls Splide carousels.                                                   |
| sticky-table.js        | Allows sticky headers on tables.                                                           |
| sticky-top.js          | Controls top navigation look and feel when a sticky top header is enabled.                 |
| substrings.js          | Shortens long strings and provides a clickable read more link.                             |
| ts/tab-multiples.ts    | Enables connection of multiple tabs to be triggered at the same time.                      |
| ts/tables.ts           | Enables responsive tables that are generated by markdown.                                  |
| tooltips.js            | Initializes tooltips globally.                                                             |
| terminal.js            | Shows a typewriter effect based on given text.                                             |
| theme-toggle.js        | Controls dark and light modes on load and on change.                                       |
| toggle-fade-show.js    | Manual usage of Bootstraps fade/show animations.                                           |
| inputs.js              | Adds Bootstrap classes to form elements.                                                   |
| util/*.js              | Exportable functions that are used in other main functions.                                |

## Custom CSS

While choco-theme utilizes the Bootstrap framework, many custom `.scss` files exist that further enhance the Chocolatey look and feel. 

All of the Bootstrap and custom Chocolatey `.scss` files are included in the build process. During the build on each repository, PurgeCSS is used to remove unneeded CSS rules to reduce file size.

## Global Partials

Global partials are imported on-demand by each project individually. They supply content that is used across multiple projects in an effort to reduce duplication of code.

| Global Partials                       | Notes                                                                                      |
|---------------------------------------|--------------------------------------------------------------------------------------------|
| AlertText.html                        | The text for the top alert banner. This can be empty if no alert is wanted.                |
| CollapsingRightSidebarContent.html    | Holds content for the right side flyout.                                                   |
| GlobalNavigation.html                 | Global navigation element.                                                                 |
| SocialMedia.html                      | Social media follow buttons mainly found in project footers.                               |
| SvgStyles.html                        | Provides inline styles for svg's using CSS variables.                                      |
| TermsContent.html                     | The content on terms pages.                                                                |
| TermsLastUpdated.html                 | The last updated date of terms pages.                                                      |
| TermsToc.html                         | The table of content navigation on terms pages.                                            |
| ThemeToggle.html                      | Top navigation dark or light theme switcher.                                               |
| TopAlertBanner.html                   | When alert text is supplied, this element will be shown in the top navigation.             |
