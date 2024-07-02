import { setCookieExpirationNever } from './util/set-cookie-expiration-never';
import { getCookie } from './util/get-cookie';

window.addEventListener('DOMContentLoaded', () => {
    const tabMultiAttribute = 'data-choco-tab-multi';
    const tabMultiElements = document.querySelectorAll<HTMLElement>(`[${tabMultiAttribute}]`);
    const tabCookies = new Set<string>(); // Use a Set to store unique cookie names

    if (tabMultiElements && tabMultiElements.value) {
        for (const tabElement of tabMultiElements) {
            const tabMultiConfigAttribute = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, '');
            let tabMultiConfig: { [key: string]: string } | null = null;

            // Ensure the data-choco-tab-multi attribute is valid JSON
            try {
                tabMultiConfig = JSON.parse(tabMultiConfigAttribute ?? '');
            } catch (error) {
                console.error(`Invalid JSON: ${tabMultiConfigAttribute}`);
                return; // Skip further processing
            }

            // Iterating over the object properties to obtain each unique cookie name
            for (const key in tabMultiConfig) {
                if (Object.prototype.hasOwnProperty.call(tabMultiConfig, key)) {
                    tabCookies.add(key);
                }
            }

            tabElement.addEventListener('click', () => {
                const tabMultiValue = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, '');

                // Show all tabs that include the same data-choco-tab-multi attributes
                for (const otherTab of tabMultiElements) {
                    const otherTabMultiValue = otherTab.getAttribute(tabMultiAttribute).replace(/\s/g, '');

                    if (otherTabMultiValue?.includes(tabMultiValue ?? '')) {
                        bootstrap.Tab.getOrCreateInstance(otherTab).show();
                    }
                }

                // Set the domain so the cookie is available on all subdomains
                const cookieDomain = ~location.hostname.indexOf('chocolatey.org') ? 'domain=chocolatey.org;' : '';

                // Store a cookie with the key and value of the data-choco-tab-multi attribute
                for (const key in tabMultiConfig) {
                    if (Object.prototype.hasOwnProperty.call(tabMultiConfig, key)) {
                        const value = tabMultiConfig[key];
                        document.cookie = `${key}=${value}; ${setCookieExpirationNever()}path=/; ${cookieDomain}`;
                    }
                }
            });
        }

        // If a cookie exists with the key and value of the data-choco-tab-multi attribute, show the corresponding tab(s)
        for (const cookieName of tabCookies) {
            const cookieValue = getCookie(cookieName);

            if (cookieValue) {
                for (const tabElement of tabMultiElements) {
                    const tabMultiValue = tabElement.getAttribute(tabMultiAttribute).replace(/\s/g, '');

                    if (tabMultiValue?.includes(cookieName) && tabMultiValue?.includes(cookieValue)) {
                        bootstrap.Tab.getOrCreateInstance(tabElement).show();
                    }
                }
            }
        }
    }
});
