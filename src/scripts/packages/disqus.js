(() => {
    const disqusShortname = 'chocolatey';

    const dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = `//${disqusShortname}.disqus.com/embed.js`;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

    // Disqus theme switching
    // Tutorial: https://thisdevbrain.com/disqus-auto-theme-switching/
    document.addEventListener('themeChanged', () => {
        if (document.readyState == 'complete') {
            // eslint-disable-next-line no-undef
            DISQUS.reset({ reload: true, config: disqus_config });
        }
    });
})();
