/*!
  * choco-theme v1.4.1 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  // js/src/theme-toggle.js
  (() => {
    const themeDropdownContainers = document.querySelectorAll(".dropdown-theme");
    themeDropdownContainers.forEach((dropdownContainer) => {
      dropdownContainer.querySelectorAll(".dropdown-toggle").forEach((el) => {
        el.addEventListener("hide.bs.dropdown", () => {
          document.querySelectorAll("main").forEach((main) => {
            main.classList.remove("z-0");
          });
        });
        el.addEventListener("show.bs.dropdown", () => {
          document.querySelectorAll("main").forEach((main) => {
            main.classList.add("z-0");
          });
        });
      });
    });
  })();
})();
