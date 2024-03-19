/*!
  * choco-theme v0.9.0 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  // js/theme-toggle.js
  (() => {
    "use strict";
    const getStoredTheme = () => localStorage.getItem("theme");
    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    const setTheme = (theme) => {
      if (theme === "auto") {
        document.documentElement.setAttribute("data-bs-theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
      }
    };
    setTheme(getPreferredTheme());
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector("#ct-theme");
      if (!themeSwitcher) {
        return;
      }
      const themeSwitcherText = document.querySelector("#ct-theme-text");
      const activeThemeIcon = document.querySelector(".theme-icon-active i");
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      const svgOfActiveBtn = btnToActive.querySelector("i[data-ct-theme-icon]").getAttribute("data-ct-theme-icon");
      document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
        element.classList.remove("active");
        element.setAttribute("aria-pressed", "false");
      });
      btnToActive.classList.add("active");
      btnToActive.setAttribute("aria-pressed", "true");
      activeThemeIcon.className = "";
      activeThemeIcon.classList.add("fa-solid", svgOfActiveBtn);
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
      themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);
      if (focus) {
        themeSwitcher.focus();
      }
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });
    window.addEventListener("DOMContentLoaded", () => {
      showActiveTheme(getPreferredTheme());
      document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          const theme = toggle.getAttribute("data-bs-theme-value");
          setStoredTheme(theme);
          setTheme(theme);
          showActiveTheme(theme, true);
        });
      });
    });
  })();
})();
