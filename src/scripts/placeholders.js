(() => {
    const placeholderContainers = document.querySelectorAll('.placeholder-container');

    if (placeholderContainers) {
        placeholderContainers.forEach(el => {
            const placeholderImg = el.querySelector('div:first-child');
            const placeholderBg = el.querySelector('div:last-child');
            const bgColor = [
                'bg-primary',
                'bg-primary',
                'bg-success',
                'bg-success',
                'bg-danger',
                'bg-purple'
            ];
            const bgImg = [
                'bg-sun-tornado',
                'bg-liquid-cheese',
                'bg-wintery-sunburst',
                'bg-bullseye-gradient',
                'bg-geometric-intersection',
                'bg-cornered-stairs'
            ];

            // Add background color
            placeholderBg.classList.add(bgColor[~~(Math.random() * bgColor.length)]);

            // Add background img
            placeholderImg.classList.add(bgImg[~~(Math.random() * bgImg.length)]);
        });
    }
})();
