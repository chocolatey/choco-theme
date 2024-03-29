/*!
  * choco-theme v0.6.0 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  // js/src/inputs.js
  (() => {
    const formSelect = document.querySelectorAll("select");
    if (formSelect) {
      formSelect.forEach((el) => el.classList.add("form-select"));
    }
  })();

  // js/src/ts/tables.ts
  (() => {
    const table = document.querySelectorAll("table");
    if (table) {
      table.forEach((el) => {
        el.classList.add("table", "table-bordered", "table-striped");
        el.outerHTML = `<div class="table-responsive">${el.outerHTML}</div>`;
      });
    }
  })();
})();
