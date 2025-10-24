(() => {
  // packages/core/src/scripts/util/outer-height-true.js
  var outerHeightTrue = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.height;
  };

  // src/scripts/get-window-height.js
  var getWindowHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.querySelector("html").setAttribute("style", `--vh:${vh}px;`);
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (!header || !footer) {
      return;
    }
    const mh = window.innerHeight - outerHeightTrue(header) - outerHeightTrue(footer);
    document.querySelector("main").setAttribute("style", `--mh:${mh}px;`);
  };
  getWindowHeight();
  window.onresize = getWindowHeight;

  // src/scripts/theme-toggle.js
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
