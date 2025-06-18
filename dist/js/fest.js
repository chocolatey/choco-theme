/*!
  * choco-theme v1.2.2 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
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

  // node_modules/lite-youtube-embed/src/lite-yt-embed.js
  var LiteYTEmbed = class _LiteYTEmbed extends HTMLElement {
    connectedCallback() {
      this.videoId = this.getAttribute("videoid");
      let playBtnEl = this.querySelector(".lty-playbtn");
      this.playLabel = playBtnEl && playBtnEl.textContent.trim() || this.getAttribute("playlabel") || "Play";
      this.dataset.title = this.getAttribute("title") || "";
      if (!this.style.backgroundImage) {
        this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`;
        this.upgradePosterImage();
      }
      if (!playBtnEl) {
        playBtnEl = document.createElement("button");
        playBtnEl.type = "button";
        playBtnEl.classList.add("lty-playbtn");
        this.append(playBtnEl);
      }
      if (!playBtnEl.textContent) {
        const playBtnLabelEl = document.createElement("span");
        playBtnLabelEl.className = "lyt-visually-hidden";
        playBtnLabelEl.textContent = this.playLabel;
        playBtnEl.append(playBtnLabelEl);
      }
      this.addNoscriptIframe();
      if (playBtnEl.nodeName === "A") {
        playBtnEl.removeAttribute("href");
        playBtnEl.setAttribute("tabindex", "0");
        playBtnEl.setAttribute("role", "button");
        playBtnEl.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.activate();
          }
        });
      }
      this.addEventListener("pointerover", _LiteYTEmbed.warmConnections, { once: true });
      this.addEventListener("focusin", _LiteYTEmbed.warmConnections, { once: true });
      this.addEventListener("click", this.activate);
      this.needsYTApi = this.hasAttribute("js-api") || navigator.vendor.includes("Apple") || navigator.userAgent.includes("Mobi");
    }
    /**
     * Add a <link rel={preload | preconnect} ...> to the head
     */
    static addPrefetch(kind, url, as) {
      const linkEl = document.createElement("link");
      linkEl.rel = kind;
      linkEl.href = url;
      if (as) {
        linkEl.as = as;
      }
      document.head.append(linkEl);
    }
    /**
     * Begin pre-connecting to warm up the iframe load
     * Since the embed's network requests load within its iframe,
     *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
     * So, the best we can do is warm up a few connections to origins that are in the critical path.
     *
     * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
     * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
     */
    static warmConnections() {
      if (_LiteYTEmbed.preconnected) return;
      _LiteYTEmbed.addPrefetch("preconnect", "https://www.youtube-nocookie.com");
      _LiteYTEmbed.addPrefetch("preconnect", "https://www.google.com");
      _LiteYTEmbed.addPrefetch("preconnect", "https://googleads.g.doubleclick.net");
      _LiteYTEmbed.addPrefetch("preconnect", "https://static.doubleclick.net");
      _LiteYTEmbed.preconnected = true;
    }
    fetchYTPlayerApi() {
      if (window.YT || window.YT && window.YT.Player) return;
      this.ytApiPromise = new Promise((res, rej) => {
        var el = document.createElement("script");
        el.src = "https://www.youtube.com/iframe_api";
        el.async = true;
        el.onload = (_) => {
          YT.ready(res);
        };
        el.onerror = rej;
        this.append(el);
      });
    }
    /** Return the YT Player API instance. (Public L-YT-E API) */
    getYTPlayer() {
      return __async(this, null, function* () {
        if (!this.playerPromise) {
          yield this.activate();
        }
        return this.playerPromise;
      });
    }
    addYTPlayerIframe() {
      return __async(this, null, function* () {
        this.fetchYTPlayerApi();
        yield this.ytApiPromise;
        const videoPlaceholderEl = document.createElement("div");
        this.append(videoPlaceholderEl);
        const paramsObj = Object.fromEntries(this.getParams().entries());
        this.playerPromise = new Promise((resolve) => {
          let player = new YT.Player(videoPlaceholderEl, {
            width: "100%",
            videoId: this.videoId,
            playerVars: paramsObj,
            events: {
              "onReady": (event) => {
                event.target.playVideo();
                resolve(player);
              }
            }
          });
        });
      });
    }
    // Add the iframe within <noscript> for indexability discoverability. See https://github.com/paulirish/lite-youtube-embed/issues/105
    addNoscriptIframe() {
      const iframeEl = this.createBasicIframe();
      const noscriptEl = document.createElement("noscript");
      noscriptEl.innerHTML = iframeEl.outerHTML;
      this.append(noscriptEl);
    }
    getParams() {
      const params = new URLSearchParams(this.getAttribute("params") || []);
      params.append("autoplay", "1");
      params.append("playsinline", "1");
      return params;
    }
    activate() {
      return __async(this, null, function* () {
        if (this.classList.contains("lyt-activated")) return;
        this.classList.add("lyt-activated");
        if (this.needsYTApi) {
          return this.addYTPlayerIframe(this.getParams());
        }
        const iframeEl = this.createBasicIframe();
        this.append(iframeEl);
        iframeEl.focus();
      });
    }
    createBasicIframe() {
      const iframeEl = document.createElement("iframe");
      iframeEl.width = 560;
      iframeEl.height = 315;
      iframeEl.title = this.playLabel;
      iframeEl.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframeEl.allowFullscreen = true;
      iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`;
      return iframeEl;
    }
    /**
     * In the spirit of the `lowsrc` attribute and progressive JPEGs, we'll upgrade the reliable
     * poster image to a higher resolution one, if it's available.
     * Interestingly this sddefault webp is often smaller in filesize, but we will still attempt it second
     * because getting _an_ image in front of the user if our first priority.
     *
     * See https://github.com/paulirish/lite-youtube-embed/blob/master/youtube-thumbnail-urls.md for more details
     */
    upgradePosterImage() {
      setTimeout(() => {
        const webpUrl = `https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`;
        const img = new Image();
        img.fetchPriority = "low";
        img.referrerpolicy = "origin";
        img.src = webpUrl;
        img.onload = (e) => {
          const noAvailablePoster = e.target.naturalHeight == 90 && e.target.naturalWidth == 120;
          if (noAvailablePoster) return;
          this.style.backgroundImage = `url("${webpUrl}")`;
        };
      }, 100);
    }
  };
  customElements.define("lite-youtube", LiteYTEmbed);

  // js/src/util/set-cookie-expiration-never.js
  var setCookieExpirationNever = () => {
    const d = /* @__PURE__ */ new Date();
    d.setTime(d.getTime() + 100 * 365 * 24 * 60 * 60 * 1e3);
    return `expires=${d.toUTCString()};`;
  };

  // js/src/util/get-cookie.js
  var getCookie = (name) => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);
    if (matched) {
      const cookie = matched[0].split("=");
      return cookie[1];
    }
    return false;
  };

  // js/src/alerts.js
  (() => {
    const topNoticeAlert = document.getElementById("topNoticeAlert");
    const topNotice = window.sessionStorage.getItem("notice");
    const cookieNoticeAlert = document.getElementById("cookieNoticeAlert");
    const cookieNoticeName = "chocolatey_hide_cookies_notice";
    if (topNoticeAlert) {
      if (topNotice) {
        topNoticeAlert.remove();
      } else {
        topNoticeAlert.classList.remove("d-none");
      }
      topNoticeAlert.querySelector("button").addEventListener("click", () => sessionStorage.setItem("notice", "true"), false);
    }
    if (cookieNoticeAlert) {
      if (getCookie(cookieNoticeName)) {
        cookieNoticeAlert.remove();
      } else {
        cookieNoticeAlert.classList.remove("d-none");
      }
      cookieNoticeAlert.querySelectorAll("button").forEach((el) => {
        el.addEventListener("click", () => {
          if (~location.hostname.indexOf("chocolatey.org")) {
            document.cookie = `${cookieNoticeName}=true; ${setCookieExpirationNever()}path=/; domain=chocolatey.org;`;
          } else {
            document.cookie = `${cookieNoticeName}=true; ${setCookieExpirationNever()}path=/;`;
          }
        }, false);
      });
    }
  })();

  // js/src/callouts.js
  (() => {
    const htmlCallouts = document.querySelectorAll(".callout");
    const markdownCallouts = document.querySelectorAll("blockquote");
    const applyCalloutStyles = (calloutType) => {
      calloutType.forEach((callout) => {
        let calloutHeader = callout.querySelector(".callout-header");
        if (callout.nodeName === "BLOCKQUOTE") {
          if (callout.querySelector("p:first-child") && callout.querySelector("p:first-child").textContent.includes(":choco-")) {
            calloutHeader = callout.querySelector("p:first-child");
          }
        }
        if (calloutHeader) {
          let calloutIcon = "";
          let calloutIconColor = "";
          let calloutHeaderText = calloutHeader.textContent;
          if (callout.classList.contains("callout-success") || calloutHeaderText.includes(":choco-success:")) {
            calloutIconColor = "success";
            calloutIcon = "check";
            callout.classList.add("callout-success");
          } else if (callout.classList.contains("callout-danger") || calloutHeaderText.includes(":choco-danger:")) {
            calloutIconColor = "danger";
            calloutIcon = "xmark";
            callout.classList.add("callout-danger");
          } else if (callout.classList.contains("callout-warning") || calloutHeaderText.includes(":choco-warning:")) {
            calloutIconColor = "warning";
            calloutIcon = "triangle-exclamation";
            callout.classList.add("callout-warning");
          } else if (callout.classList.contains("callout-tip") || calloutHeaderText.includes(":choco-tip:")) {
            calloutIconColor = "tip";
            calloutIcon = "lightbulb";
            callout.classList.add("callout-tip");
          } else {
            calloutIconColor = "info";
            calloutIcon = "info";
            callout.classList.add("callout-info");
          }
          if (calloutHeaderText.includes(":choco-")) {
            calloutHeaderText = calloutHeaderText.replace(/:.+?:/, "").trim();
          }
          const calloutHeaderContainer = `<div class="callout-header d-flex align-items-center"><span class="flex-shrink-0 text-bg-${calloutIconColor} h-px-30 w-px-30 d-flex align-items-center justify-content-center rounded me-3"><span class="fa-solid fa-${calloutIcon}"></span></span><p class="lead"><strong>${calloutHeaderText}</strong></p></div>`;
          calloutHeader.outerHTML = calloutHeaderContainer;
        }
      });
    };
    applyCalloutStyles(htmlCallouts);
    applyCalloutStyles(markdownCallouts);
  })();

  // js/src/lazyload.js
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
      if ("IntersectionObserver" in window) {
        const lazyVideoObserver = new IntersectionObserver((entries) => {
          entries.forEach((video) => {
            if (video.isIntersecting) {
              for (const source in video.target.children) {
                const videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src;
                }
              }
              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });
        lazyVideos.forEach((lazyVideo) => lazyVideoObserver.observe(lazyVideo));
      }
    });
  })();

  // js/src/org.js
  (() => {
    const tempData = document.getElementById("tempdata-message");
    if (tempData) {
      const tempDataModal = bootstrap.Modal.getOrCreateInstance(tempData, { keyboard: false });
      tempDataModal.show();
    }
    const videoModal = document.querySelectorAll(".video-story .modal");
    if (videoModal) {
      videoModal.forEach((el) => {
        const iFrame = el.querySelector("iframe");
        if (iFrame) {
          el.addEventListener("show.bs.modal", () => {
            iFrame.setAttribute("src", iFrame.getAttribute("data-src"));
          });
          el.addEventListener("hide.bs.modal", () => {
            iFrame.setAttribute("src", "");
          });
        }
      });
    }
    const emailSuccess = document.getElementById("Modal_EmailSuccess");
    if (emailSuccess && window.location.search.includes("emailsuccess=true")) {
      const emailSuccessModal = bootstrap.Modal.getOrCreateInstance(emailSuccess, { keyboard: false, backdrop: "static" });
      emailSuccessModal.show();
      emailSuccess.addEventListener("hidden.bs.modal", () => {
        emailSuccessModal.dispose();
      });
    }
    const speakerBtnContainers = document.querySelectorAll(".list-chocolatey-fest-speaker");
    for (const i of speakerBtnContainers) {
      const speakerModalBtns = i.querySelectorAll(".btn-link");
      speakerModalBtns.forEach((value, i2) => {
        if (i2 >= 1) {
          const parentDiv = value.parentNode;
          const divider = document.createElement("span");
          divider.innerText = "&";
          parentDiv.insertBefore(divider, value);
        }
      });
    }
  })();

  // js/src/sticky-top.js
  (() => {
    const stickyHeader = document.querySelector("header.sticky-top");
    if (stickyHeader) {
      const navImage = document.querySelector(".navbar-brand-desktop");
      const logoSmall = "/assets/images/global-shared/logo.svg";
      const logoLarge = "/assets/images/global-shared/logo-square.svg";
      document.body.classList.add("sticky-nav-active");
      if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        navImage.setAttribute("src", logoLarge);
      }
      document.addEventListener("scroll", () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          if (stickyHeader.classList.contains("sticky-header")) {
            stickyHeader.classList.remove("sticky-header");
            navImage.setAttribute("src", logoSmall);
          }
        } else {
          if (!stickyHeader.classList.contains("sticky-header")) {
            stickyHeader.classList.add("sticky-header");
            navImage.setAttribute("src", logoLarge);
          }
        }
      });
    }
  })();

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
