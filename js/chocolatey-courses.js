(function() {
    setNavigation();

    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);

        // Courses Section - Set Localstorage Items
        // Active
        jQuery(".course-list li a").each(function () {
            var href = jQuery(this).attr('href');
            if (path.substring(0, href.indexOf('courses/').length) === href) {
                window.localStorage.setItem('active', href);
            }
        });
        // Set Completed courses if user is NOT logged in
        jQuery(".course-list:not(.authenticated) li a").each(function () {
            var href = jQuery(this).attr('href');
            if (path.substring(0, href.indexOf('courses/').length) === href) {
                var completed = localStorage.completed === undefined ? new Array() : JSON.parse(localStorage.completed);
                if (jQuery.inArray(href, completed) == -1) //check that the element is not in the array
                    completed.push(href);
                localStorage.completed = JSON.stringify(completed);
            }
        });
    }
    
    // Get Localstorage Items for Courses Section
    jQuery(function () {
        // Get Active Localstorage Item
        var active = window.localStorage.getItem('active');
        if (active) {
            jQuery('.course-list li a[href="' + active + '"]').parent().addClass('active');
        }
        // Get Completed Localstorage Items
        var completed = localStorage.completed === undefined ? new Array() : JSON.parse(localStorage.completed); //get all completed items
        for (var i in completed) { //<-- completed is the name of the cookie
            if (!jQuery('.course-list li a[href="' + completed[i] + '"]').parent().hasClass('active') && !jQuery('.course-list').hasClass("authenticated")) // check if this is not active
            {
                jQuery('.course-list li a[href="' + completed[i] + '"]').parent().addClass('completed');
            }
        }
        // Remove completed local storage if use is logged in, tracking progress through profile
        if (jQuery(".course-list").hasClass("authenticated")) {
            localStorage.removeItem('completed')
        }
        // Styleize
        jQuery(".course-list li").mouseover(function () {
            jQuery(this).children().addClass("hover");
        });
        jQuery(".course-list li").mouseleave(function () {
            jQuery(this).children().removeClass("hover");
        });
    });
    
    // Removes text from links in additional-course section
    jQuery("#additional-courses .course-list a").each(function () {
        jQuery(this).empty().append("<span class='additional-module'>...</span>");
    });

    // Forms
    jQuery("#quiz .disable input").attr("disabled", "disabled");
    jQuery("#quiz .mod-completed input[value='1']").addClass("correct").prop("checked", true).parent().children().attr("disabled", "disabled");
    jQuery("#quiz .mod-completed .btn").addClass("d-none");
    // Completed Module Pop-up
    var quiz = document.getElementById('quiz-modal')
    if (quiz && window.location.search.includes('quiz=true')) {
        var quizModal = Modal.getInstance(quiz) ? Modal.getInstance(quiz) : new Modal(quiz, { keyboard: false, backdrop: 'static' });
        
        quizModal.show();
    }
    // Quiz
    jQuery(document).change(function () {
        var numItems = jQuery('#quiz .course-question').length;
        var checkedItems = jQuery("#quiz input:checked").length;

        if (checkedItems == numItems) {
            jQuery("#quiz .btn").removeClass("disabled");
        }
    });
    jQuery("#quiz .btn").click(function (event) {
        var numItems = jQuery('#quiz .course-question').length;
        var correctItems = jQuery('#quiz .correct').length + jQuery('#quiz .true').length;

        if (correctItems != numItems) {
            event.preventDefault();

            jQuery(this).removeClass("btn-primary").addClass("btn-danger").attr("value", "Recheck Answsers");
            jQuery("input").not("input:checked").removeClass("false");
            jQuery(".true").removeClass("true").addClass("correct");
            jQuery(".false").removeClass("false").addClass("wrong");
            jQuery(".correct").parent().children().removeClass("wrong").not(".correct").attr("disabled", "disabled");
        }
    });
    jQuery("#quiz input:radio").click(function (ev) {
        if (ev.currentTarget.value == "1") {
            jQuery(this).addClass('true');

        } else if (ev.currentTarget.value == "0") {
            jQuery(this).addClass('false');
            jQuery(this).parent().children().removeClass("true");
        }
        jQuery(this).parent().children().removeClass("wrong");
    });

    // Highlight Syntax
    jQuery('pre').addClass('line-numbers py-2 m-0');
    Prism.highlightAll();
})();