(function() {
    setNavigation();

    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);

        // Courses Section - Set Localstorage Items
        // Active
        $(".course-list li a").each(function () {
            var href = $(this).attr('href');
            if (path.substring(0, href.indexOf('courses/').length) === href) {
                window.localStorage.setItem('active', href);
            }
        });
        // Set Completed courses if user is NOT logged in
        $(".course-list:not(.authenticated) li a").each(function () {
            var href = $(this).attr('href');
            if (path.substring(0, href.indexOf('courses/').length) === href) {
                var completed = localStorage.completed === undefined ? new Array() : JSON.parse(localStorage.completed);
                if ($.inArray(href, completed) == -1) //check that the element is not in the array
                    completed.push(href);
                localStorage.completed = JSON.stringify(completed);
            }
        });
    }
    
    // Get Localstorage Items for Courses Section
    $(function () {
        // Get Active Localstorage Item
        var active = window.localStorage.getItem('active');
        if (active) {
            $('.course-list li a[href="' + active + '"]').parent().addClass('active');
        }
        // Get Completed Localstorage Items
        var completed = localStorage.completed === undefined ? new Array() : JSON.parse(localStorage.completed); //get all completed items
        for (var i in completed) { //<-- completed is the name of the cookie
            if (!$('.course-list li a[href="' + completed[i] + '"]').parent().hasClass('active') && !$('.course-list').hasClass("authenticated")) // check if this is not active
            {
                $('.course-list li a[href="' + completed[i] + '"]').parent().addClass('completed');
            }
        }
        // Remove completed local storage if use is logged in, tracking progress through profile
        if ($(".course-list").hasClass("authenticated")) {
            localStorage.removeItem('completed')
        }
        // Styleize
        $(".course-list li").mouseover(function () {
            $(this).children().addClass("hover");
        });
        $(".course-list li").mouseleave(function () {
            $(this).children().removeClass("hover");
        });
    });
    
    // Removes text from links in additional-course section
    $("#additional-courses .course-list a").each(function () {
        $(this).empty().append("<span class='additional-module'>...</span>");
    });

    // Forms
    $("#quiz .disable input").attr("disabled", "disabled");
    $("#quiz .mod-completed input[value='1']").addClass("correct").prop("checked", true).parent().children().attr("disabled", "disabled");
    $("#quiz .mod-completed .btn").addClass("d-none");
    // Completed Module Pop-up
    var quiz = document.getElementById('quiz-modal')
    if (quiz && window.location.search.includes('quiz=true')) {
        var quizModal = Modal.getInstance(quiz) ? Modal.getInstance(quiz) : new Modal(quiz, { keyboard: false, backdrop: 'static' });
        
        quizModal.show();
    }
    // Quiz
    $(document).change(function () {
        var numItems = $('#quiz .course-question').length;
        var checkedItems = $("#quiz input:checked").length;

        if (checkedItems == numItems) {
            $("#quiz .btn").removeClass("disabled");
        }
    });
    $("#quiz .btn").click(function (event) {
        var numItems = $('#quiz .course-question').length;
        var correctItems = $('#quiz .correct').length + $('#quiz .true').length;

        if (correctItems != numItems) {
            event.preventDefault();

            $(this).removeClass("btn-primary").addClass("btn-danger").attr("value", "Recheck Answsers");
            $("input").not("input:checked").removeClass("false");
            $(".true").removeClass("true").addClass("correct");
            $(".false").removeClass("false").addClass("wrong");
            $(".correct").parent().children().removeClass("wrong").not(".correct").attr("disabled", "disabled");
        }
    });
    $("#quiz input:radio").click(function (ev) {
        if (ev.currentTarget.value == "1") {
            $(this).addClass('true');

        } else if (ev.currentTarget.value == "0") {
            $(this).addClass('false');
            $(this).parent().children().removeClass("true");
        }
        $(this).parent().children().removeClass("wrong");
    });

    // Highlight Syntax
    $('pre').addClass('line-numbers py-2 m-0');
    Prism.highlightAll();
})();