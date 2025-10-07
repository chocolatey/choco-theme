(() => {
  // src/scripts/packages/theme-toggle.js
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
      const themeSwitchers = document.querySelectorAll(".dropdown-theme");
      for (const themeSwitcher of themeSwitchers) {
        const themeSwitcherBtns = themeSwitcher.querySelectorAll(".dropdown-toggle");
        const btnToActive = themeSwitcher.querySelector(`[data-bs-theme-value="${theme}"]`);
        const svgOfActiveBtn = btnToActive.querySelector("i[data-ct-theme-icon]").getAttribute("data-ct-theme-icon");
        themeSwitcher.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
          element.classList.remove("active");
          element.setAttribute("aria-pressed", "false");
        });
        btnToActive.classList.add("active");
        btnToActive.setAttribute("aria-pressed", "true");
        const themeSwitcherLabel = `Theme Switcher (${btnToActive.dataset.bsThemeValue})`;
        for (const btn of themeSwitcherBtns) {
          btn.setAttribute("aria-label", themeSwitcherLabel);
          btn.querySelector(".theme-icon-active i").className = "";
          btn.querySelector(".theme-icon-active i").classList.add("fa-solid", svgOfActiveBtn);
        }
        if (focus) {
          themeSwitcher.focus();
        }
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
          const event = new Event("themeChanged");
          document.dispatchEvent(event);
        });
      });
    });
  })();
})();
