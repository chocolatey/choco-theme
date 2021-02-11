(function() {
    var placeholderContainer = jQuery('.placeholder-container');

    placeholderContainer.each(function(){
        var placeholderImg = jQuery(this).find('div:first-child');
        var placeholderBg = jQuery(this).find('div:last-child');
        var bgColor = [
            'bg-primary', 
            'bg-primary',
            'bg-success', 
            'bg-success',
            'bg-danger',
            'bg-purple'
            ];
        var bgImg = [
            'bg-sun-tornado', 
            'bg-liquid-cheese',
            'bg-wintery-sunburst',
            'bg-bullseye-gradient',
            'bg-geometric-intersection',
            'bg-cornered-stairs'
            ];

        // Add background color
        placeholderBg.addClass(bgColor[~~(Math.random()*bgColor.length)]);

        // Add background img
        placeholderImg.addClass(bgImg[~~(Math.random()*bgImg.length)]);
    });
})();