/*!
  * choco-theme v1.2.2 (https://github.com/chocolatey/choco-theme#readme)
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

  // build/data/preview-config.ts
  var folderMapping = {
    "--blog": {
      folder: "blog",
      port: 5082,
      isStatiq: false,
      isAstro: true
    },
    "--ccm": {
      folder: "choco-licensed-management-ui",
      protocol: "https",
      port: 44302,
      isStatiq: false,
      isAstro: false,
      root: "/src/ChocolateySoftware.ChocolateyManagement.Web.Mvc"
    },
    "--boxstarter": {
      folder: "boxstarter.org",
      port: 5083,
      isStatiq: true,
      isAstro: false
    },
    "--community": {
      folder: "community.chocolatey.org",
      port: 55881,
      isStatiq: false,
      isAstro: false,
      root: "/chocolatey/Website"
    },
    "--design": {
      folder: "choco-design-system",
      port: 5085,
      isStatiq: true,
      isAstro: false
    },
    "--docs": {
      folder: "docs",
      port: 5086,
      isStatiq: false,
      isAstro: true
    },
    "--fest": {
      folder: "chocolateyfest",
      port: 5084,
      isStatiq: true,
      isAstro: false
    },
    "--org": {
      folder: "chocolatey.org",
      port: 5081,
      isStatiq: true,
      isAstro: false
    },
    "--portal": {
      folder: "licensing-services",
      protocol: "https",
      port: 44362,
      isStatiq: false,
      isAstro: false,
      root: "/source/LicensingServices"
    },
    "--zendesk": {
      folder: "copenhagen_theme",
      isStatiq: false,
      isAstro: false
    }
  };

  // js/preview.js
  var tbody = document.querySelector("#tableMonitorPorts tbody");
  var template = document.querySelector("#templateMonitorPorts");
  Object.keys(folderMapping).forEach((key) => {
    const data = folderMapping[key];
    const clone = document.importNode(template.content, true);
    const tds = clone.querySelectorAll("td");
    tds[1].querySelector(".badge").textContent = data.port ? "Waiting" : "N/A";
    tds[2].textContent = data.port ? data.port.toString() : "N/A";
    tds[3].textContent = data.folder;
    tds[4].textContent = key;
    const button = clone.querySelector(".monitor-link");
    if (data.port) {
      const protocol = data.protocol ? data.protocol : "http";
      button.href = `${protocol}://localhost:${data.port}`;
    }
    for (const td of tds) {
      td.setAttribute("data-monitor-option", key);
    }
    tbody.appendChild(clone);
  });
  var socket = new WebSocket("ws://localhost:8081");
  socket.addEventListener("open", (event) => {
    socket.send("Hello Server!", event.data);
    console.log("Connected to WebSocket server");
  });
  socket.addEventListener("message", (event) => {
    const portStatus = JSON.parse(event.data);
    for (const [port, status] of Object.entries(portStatus)) {
      const monitorOption = Object.entries(folderMapping).find(([, value]) => value.port === parseInt(port));
      const monitorLink = document.querySelector(`[data-monitor-option="${monitorOption[0]}"] .monitor-link`);
      const monitorStatus = document.querySelector(`[data-monitor-option="${monitorOption[0]}"].monitor-status .badge`);
      monitorStatus.textContent = status;
      if (status === "open") {
        monitorStatus.classList.remove("text-bg-secondary");
        monitorStatus.classList.add("text-bg-success");
      } else {
        monitorStatus.classList.remove("text-bg-success");
        monitorStatus.classList.add("text-bg-secondary");
      }
      const monitorLinkActive = monitorLink.classList.contains("opacity-0");
      if (status === "open" && monitorLinkActive) {
        monitorLink.classList.remove("opacity-0");
        monitorLink.classList.remove("disabled");
      } else if (status === "closed" && !monitorLinkActive) {
        monitorLink.classList.add("opacity-0");
        monitorLink.classList.add("disabled");
      }
    }
  });
  socket.addEventListener("error", (error) => {
    console.error("WebSocket error:", error);
  });
  socket.addEventListener("close", () => {
    console.log("Disconnected from WebSocket server");
  });
})();
/*!
 * Configuration for repositories to be used by preview commands.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */
