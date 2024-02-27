/*!
  * choco-theme v0.9.0 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  // js/theme-toggle.js
  var html = document.getElementsByTagName("html")[0];
  var themeStorage = localStorage.getItem("theme");
  if (themeStorage) {
    html.setAttribute("data-user-color-scheme", themeStorage);
    html.classList.add(`${themeStorage}-theme`);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.setAttribute("data-user-color-scheme", "dark");
    html.classList.add("dark-theme");
  } else {
    html.setAttribute("data-user-color-scheme", "light");
    html.classList.add("light-theme");
  }
})();
