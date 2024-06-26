import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { findBannerAccentColor } from './banner-accent-color';

export const showBanner = (data, isPreview = false) => {
    const hideBanner = window.sessionStorage.getItem('notice');
    const isData = data && Object.keys(data).length > 0;

    // Continue if session storage is not set and there is data
    // Continue if this is a preview and there is data
    if ((!hideBanner && isData) || (isPreview && isData)) {
        // Create banner elements
        const accentColor = findBannerAccentColor(data.accentColor);

        const banner = document.createElement('div');
        banner.id = 'topNoticeAlert';
        banner.classList.add(`alert-${accentColor}`, 'alert', 'alert-dismissible', 'alert-dismissible-center', 'fade', 'show', 'w-100');
        banner.setAttribute('role', 'alert');

        const dismiss = document.createElement('button');
        dismiss.classList.add('btn-close');
        dismiss.setAttribute('type', 'button');
        dismiss.setAttribute('data-bs-dismiss', 'alert');
        dismiss.setAttribute('aria-label', 'Close');

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-xmark');
        icon.setAttribute('aria-hidden', 'true');

        // Build the banner
        banner.innerHTML = DOMPurify.sanitize(marked.parse(data.text));
        dismiss.appendChild(icon);
        banner.appendChild(dismiss);

        // Add the banner to the header
        let isBannerAdded = false;

        // Ensure we don't add multiple banners, especially if this is in preview
        if (!isBannerAdded) {
            const header = document.querySelector('header');
            header.insertAdjacentElement('afterbegin', banner);
            isBannerAdded = true;
        }

        // Listen for clicks and set session storage if not in preview
        if (!isPreview) {
            const alert = document.getElementById('topNoticeAlert');

            alert.querySelector('button').addEventListener('click', () => {
                sessionStorage.setItem('notice', 'true');
            }, false);
        }
    }
};
