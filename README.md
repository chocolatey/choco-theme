# Chocolatey choco-theme

This repository holds all of the CSS, JS, images, and shared partial files that are used across many Chocolatey projects. 

## Getting Started

Coming soon.

## What's Included

### External Libraries

Choco-theme contains many external libraries in which it depends on for various features.

| Icon               | Meaning                                                   |
|--------------------|-----------------------------------------------------------|
| :clock3:           | Pending to be used or seasonal.                           |
| :heavy_check_mark: | Currently used.                                           |
| :heavy_minus_sign: | Not used.                                                 |
| :grey_question:    | May or may not be used. Project may be under development. |

| External Libraries            | chocolatey.org     | community          | docs               | blog               | design             | company            | chocolateyfest.com |
|-------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| jQuery                        | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Bootstrap                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Popper                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| Font Awesome                  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Luxon                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| Flatpickr                     | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| Clipboard                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| Chartist                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| Chartist Plugin Legend        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| DataTables                    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| AnchorJS                      | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| Canvas Confetti               | :clock3:           | :clock3:           | :clock3:           | :clock3:           | :clock3:           | :heavy_minus_sign: | :clock3:           |
| DOCSEARCH (Algolia)           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Elasticsearch                 | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| EasyMDE                       | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| The Final Countdown           | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| Mousetrap                     | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| Knockout                      | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| Lite YouTube Embed            | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_check_mark: |
| Marked                        | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| noUiSlider                    | :clock3:           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| Add-to-Calendar Button        | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_minus_sign: | :heavy_minus_sign: |
| Prism                         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: |
| typeahead.js                  | :heavy_minus_sign: | :clock3:           | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: |
| jQuery Validation             | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |
| jQuery Validation Unobtrusive | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :grey_question:    | :heavy_check_mark: | :heavy_minus_sign: |

## Custom JavaScript

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
| chocolatey-countdown.js           | Displays a countdown timer.                                                                |
| chocolatey-courses.js             | Sets cookies and manages courses when unauthenticated.                                     |
| chocolatey-docs.js                | Special handling of titles in the docs project only.                                       |
| chocolatey-functions.js           | Provides helper functions that can be called from any JavaScript file.                     |
| chocolatey-internal-url.js        | Sets internal url in code blocks based on user input.                                      |
| chocolatey-lazyload.js            | Lazy loading for images and videos.                                                        |
| chocolatey-loader.js              | Shows and removes spinning Chocolatey loader.                                              |
| chocolatey-markdown.js            | Styles blockquotes based on emojis and checkboxes in markdown.                             |
| chocolatey-multi-tabs.js          | Allows showing or hiding of multiple tabs in one click.                                    |
| chocolatey-org.js                 | Special handling for chocolatey.org.                                                       |
| chocolatey-packages.js            | Controls interactive elements in the Chocolatey Community Repository package pages.        |
| chocolatey-placeholders.js        | Generates random placeholder images.                                                       |
| chocolatey-script-builder.js      | Controls Chocolatey Script Builder functionality.                                          |
| chocolatey-scrollspy.js           | Controls right hand scroll navigation highlighting to page anchors.                        |
| chocolatey-search.js              | Initializes mousetrap.js and search bar interactivity.                                     |
| chocolatey-show-hide.js           | Replaces button text on collapse buttons based on status.                                  |
| chocolatey-shuffle.js             | shuffles elements around inside a container.                                               |
| chocolatey-smooth-scroll.js       | Prevents or allows smooth scroll if conditions are met.                                    |
| chocolatey-stats.js               | Gets Chocolatey Community Repository package stats and displays them on a page.            |
| chocolatey-sticky-table.js        | Allows sticky headers on tables.                                                           |
| chocolatey-sticky-top.js          | Controls top navigation look and feel when a sticky top header is enabled.                 |
| chocolatey-substrings.js          | Shortens long strings and provides a clickable read more link.                             |
| chocolatey-tables.js              | Enables responsive tables that are generated by markdown.                                  |
| chocolatey-terminal.js            | Shows a typewriter effect based on given text.                                             |
| chocolatey-theme-toggle-head.js   | Controls dark and light modes on load.                                                     |
| chocolatey-theme-toggle.js        | Controls dark and light modes on load and on change.                                       |
| chocolatey-toggle-fade-show.js    | Manual usage of Bootstraps fade/show animations.                                           |

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
