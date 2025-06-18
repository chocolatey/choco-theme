/*!
  * choco-theme v1.2.2 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // js/src/package-differ.js
  var require_package_differ = __commonJS({
    "js/src/package-differ.js"(exports) {
      (() => {
        const diffContainer = document.querySelector("#diffs");
        if (diffContainer) {
          const diffContent = document.querySelector("#diffContent");
          const diffSelector = document.querySelector("#diffSelector");
          const anyPackageRole = document.querySelector("#anyPackageRole").value.toLowerCase() === "true";
          const callEndpoint = (url) => __async(null, null, function* () {
            try {
              const response = yield fetch(url);
              const data = yield response.json();
              return data;
            } catch (error) {
              console.error(error);
            }
          });
          const getDiffFiles = (diffFolder) => {
            diffContent.innerHTML = "";
            return callEndpoint(`${window.location.protocol}//${window.location.host}/json/JsonApi?invoke&action=GetDiffFileUrls&folderName=${diffFolder}`).then((filePaths) => {
              filePaths.forEach((filePath) => {
                let diffFilePath = filePath.replaceAll("\\", "/").replace(".patch", "").trim();
                diffFilePath = diffFilePath.split("/").slice(3);
                diffFilePath = diffFilePath.join("\\");
                const diffFileName = /[^\\]*$/.exec(diffFilePath)[0];
                const diffTarget = `diff-path-${diffFileName.replaceAll(".", "-")}`;
                let diffLanguage = "language-diff";
                if (diffFileName.includes(".ps1") || diffFileName.includes(".psm1")) {
                  diffLanguage = "language-diff-powershell";
                } else if (diffFileName.includes(".xml") || diffFileName.includes(".config") || diffFileName.includes(".nuspec")) {
                  diffLanguage = "language-diff-xml";
                } else if (diffFileName.includes(".json")) {
                  diffLanguage = "language-diff-json";
                } else if (diffFileName.includes(".js")) {
                  diffLanguage = "language-diff-js";
                }
                let fileContainer = "";
                let diffCollapseShow = "";
                let diffCollapseExpanded = "false";
                let diffBtnText = "Show";
                if (anyPackageRole) {
                  diffCollapseShow = "show";
                  diffCollapseExpanded = "true";
                  diffBtnText = "Hide";
                }
                fileContainer = `<div class="mb-1" data-file-path="${filePath}">
                        <div class="p-2 border border-start border-end text-bg-body-secondary d-flex align-items-center">
                            <button class="btn btn-sm btn-secondary btn-show-hide me-2" type="button" data-bs-toggle="collapse" data-bs-target=".${diffTarget}" aria-expanded="${diffCollapseExpanded}" aria-controls="${diffTarget}">${diffBtnText}</button>
                            <span>${diffFilePath}</span>
                        </div>
                        <div class="collapse ${diffCollapseShow} ${diffTarget}">
                            <pre class="mt-0 border-top-0 ps-0 pe-0"><code class="${diffLanguage} diff-highlight"></code></pre>
                        </div>
                    </div>`;
                diffContent.insertAdjacentHTML("beforeend", fileContainer);
                const getDiffContent = (filePath2) => {
                  callEndpoint(`${window.location.protocol}//${window.location.host}/json/JsonApi?invoke&action=GetDiffContent&key=${filePath2}`).then((fileContent) => {
                    const diffItems = document.querySelectorAll("[data-file-path]");
                    let isDuplicate = false;
                    if (!isDuplicate) {
                      diffItems.forEach((el) => {
                        if (el.getAttribute("data-file-path") == filePath2) {
                          const elPre = el.querySelector("pre");
                          const elCode = el.querySelector("code");
                          const htmlEntities = {
                            nbsp: " ",
                            cent: "\xA2",
                            pound: "\xA3",
                            yen: "\xA5",
                            euro: "\u20AC",
                            copy: "\xA9",
                            reg: "\xAE",
                            lt: "<",
                            gt: ">",
                            quot: '"',
                            amp: "&",
                            apos: "'"
                          };
                          const unescapeHTML = (str) => {
                            return str.replace(/\&([^;]+);/g, (entity, entityCode) => {
                              let match;
                              if (entityCode in htmlEntities) {
                                return htmlEntities[entityCode];
                              } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
                                return String.fromCharCode(parseInt(match[1], 16));
                              } else if (match = entityCode.match(/^#(\d+)$/)) {
                                return String.fromCharCode(~~match[1]);
                              } else {
                                return entity;
                              }
                            });
                          };
                          elCode.insertAdjacentText("afterbegin", unescapeHTML(fileContent));
                          const extendDiffHighlight = () => {
                            const isOverflowing = (element) => {
                              return element.scrollWidth > element.offsetWidth;
                            };
                            if (isOverflowing(elPre)) {
                              const elPreStyle = window.getComputedStyle(elPre);
                              const elPrePadding = parseInt(elPreStyle.getPropertyValue("padding-left"));
                              const elPreScrollWidth = elPre.scrollWidth - elPrePadding;
                              const insertedToken = elPre.querySelectorAll(".token.inserted-sign.inserted");
                              const deletedToken = elPre.querySelectorAll(".token.deleted-sign.deleted");
                              const coordToken = elPre.querySelectorAll(".token.coord");
                              for (const i of insertedToken) {
                                i.style.width = `${elPreScrollWidth}px`;
                              }
                              for (const i of deletedToken) {
                                i.style.width = `${elPreScrollWidth}px`;
                              }
                              for (const i of coordToken) {
                                i.style.width = `${elPreScrollWidth}px`;
                              }
                            }
                          };
                          Prism.highlightElement(elCode, false, extendDiffHighlight);
                          isDuplicate = true;
                        }
                      });
                    }
                  });
                };
                const btnShowHide = diffContent.querySelector("[data-file-path]:last-child .btn-show-hide");
                let isInitilized = false;
                btnShowHide.addEventListener("click", () => {
                  if (btnShowHide.textContent.includes("Show")) {
                    btnShowHide.textContent = btnShowHide.textContent.replace("Show", "Hide");
                  } else {
                    btnShowHide.textContent = btnShowHide.textContent.replace("Hide", "Show");
                  }
                  if (!anyPackageRole && !isInitilized) {
                    getDiffContent(filePath);
                    isInitilized = true;
                  }
                });
                if (anyPackageRole) {
                  getDiffContent(filePath);
                }
              });
            }).catch((error) => {
              console.error(error.message);
            });
          };
          const initDiffSelector = () => {
            diffSelector.addEventListener("change", (e) => {
              const diffFolder = e.target.value;
              if (diffFolder !== "default") {
                getDiffFiles(diffFolder);
              }
            });
          };
          const isDiffContainerExpanded = diffContainer.classList.contains("show") || window.location.hash == `#${diffContainer.id}`;
          let isDiffContainerExpandedClick = false;
          if (isDiffContainerExpanded && diffSelector.nodeName == "INPUT") {
            getDiffFiles(diffSelector.value);
          } else if (isDiffContainerExpanded && diffSelector.nodeName == "SELECT") {
            initDiffSelector();
          } else {
            diffContainer.addEventListener("show.bs.collapse", () => {
              if (!isDiffContainerExpandedClick) {
                if (diffSelector.nodeName === "INPUT") {
                  getDiffFiles(diffSelector.value);
                } else {
                  initDiffSelector();
                }
              }
              isDiffContainerExpandedClick = true;
            });
          }
        }
      })();
    }
  });

  // js/community-package-differ.js
  var import_package_differ = __toESM(require_package_differ());
})();
