(() => {
  // packages/core/src/scripts/util/outer-height-true.js
  var outerHeightTrue = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.height;
  };

  // src/scripts/get-window-height.js
  var getWindowHeight = () => {
    var _a, _b;
    const vh = window.innerHeight * 0.01;
    (_a = document.querySelector("html")) == null ? void 0 : _a.style.setProperty("--vh", `${vh}px`);
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (!header || !footer) {
      return;
    }
    const mh = window.innerHeight - outerHeightTrue(header) - outerHeightTrue(footer);
    (_b = document.querySelector("main")) == null ? void 0 : _b.style.setProperty("--mh", `${mh}px`);
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
