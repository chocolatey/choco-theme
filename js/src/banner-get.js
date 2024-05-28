import { showBanner } from './util/banner-show';

(async () => {
    const data = {
        accentColor: 'yellow',
        text: 'Here is a test. [Here is a link.](https://chocolatey.org)',
        startDate: '2023-05-31T03:00:00Z',
        endDate: '2023-06-31T03:00:00Z'
    };

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(`${window.location.protocol}//${window.location.host}/api/banner`,);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return await response.json();
    //     } catch (error) {
    //         console.error('Failed to fetch data:', error);
    //         return null;
    //     }
    // };

    // const data = await fetchData();

    showBanner(data);
})();
