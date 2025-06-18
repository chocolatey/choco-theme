/*!
  * choco-theme v1.2.2 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/
(() => {
  // js/disqus.js
  (() => {
    const disqusShortname = "chocolatey";
    const dsq = document.createElement("script");
    dsq.type = "text/javascript";
    dsq.async = true;
    dsq.src = `//${disqusShortname}.disqus.com/embed.js`;
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);
    document.addEventListener("themeChanged", () => {
      if (document.readyState == "complete") {
        DISQUS.reset({ reload: true, config: disqus_config });
      }
    });
  })();
})();
