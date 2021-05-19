(function() {
    setNavigation();

    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);
        
        // Courses Section - Set Localstorage Items
        // Active
        document.querySelectorAll('.course-list li a').forEach(function(el) {
            var href = el.getAttribute('href');

            if (path.substring(0, href.indexOf('courses/').length) === href) {
                window.localStorage.setItem('active', href);
            }
        });

        // Set Completed courses if user is NOT logged in
        document.querySelectorAll('.course-list:not(.authenticated) li a').forEach(function(el) {
            var href = el.getAttribute('href');

            if (path.substring(0, href.indexOf('courses/').length) === href) {
                var completed = localStorage.completed === undefined ? new Array() : JSON.parse(localStorage.completed);
                if (completed.indexOf(href) == -1) //check that the element is not in the array
                    completed.push(href);
                localStorage.completed = JSON.stringify(completed);
            }
        });
    }
    
    // Get Localstorage Items for Courses Section
    getCourseStorage();
    function getCourseStorage() {
        // Get Active Localstorage Item
        var activeModule = window.localStorage.getItem('active');
        if (activeModule) {
            var activeModuleLinks = document.querySelectorAll('.course-list li a[href="' + activeModule + '"]');
            for (var activeModuleLink of activeModuleLinks) {
                activeModuleLink.parentNode.classList.add('active');
            }
        }

        // Get Completed Localstorage Items
        var completed = localStorage.completed === undefined ? new Array() : JSON.parse(localStorage.completed); //get all completed items
        for (var i in completed) { //<-- completed is the name of the cookie
            var completedLinks = document.querySelectorAll('.course-list li a[href="' + completed[i] + '"]');

            for (var completedLink of completedLinks) {
                if (!completedLink.parentNode.classList.contains('active') && !document.querySelector('.course-list').classList.contains('authenticated')) // check if this is not active
                {
                    completedLink.parentNode.classList.add('completed');
                }
            }
        }

        // Remove completed local storage if use is logged in, tracking progress through profile
        if (document.querySelector('.course-list').classList.contains('authenticated')) {
            localStorage.removeItem('completed')
        }

        // Styleize
        document.querySelector('.course-list li').addEventListener("mouseenter", function(e) {
            e.target.children[0].classList.add('hover');
        });

        document.querySelector('.course-list li').addEventListener("mouseleave", function(e) {
            e.target.children[0].classList.remove('hover');
        });
    }

    // Removes text from links in additional-course section
    document.querySelectorAll('#additional-courses .course-list a').forEach(function(el) {
        el.innerHTML = '<span class="additional-module">...</span>';
    });

    // Completed Module Pop-up
    var quiz = document.getElementById('quiz-modal')
    if (quiz && window.location.search.includes('quiz=true')) {
        var quizModal = Modal.getInstance(quiz) ? Modal.getInstance(quiz) : new Modal(quiz, { keyboard: false, backdrop: 'static' });
        
        quizModal.show();
    }

    // Quiz & Forms
    var completedQuiz = document.querySelector('#quiz .mod-completed'),
        quizQuestions = document.querySelectorAll('#quiz .course-question'),
        quizRadios = document.querySelectorAll('#quiz input[type="radio"]'),
        quizSubmitBtn = document.querySelector('#quiz .btn');

    if (completedQuiz) {
        quizRadios.forEach(function(el) {
            if (el.value == '1') {
                el.classList.add('correct');
                el.checked = true;
            } else {
                el.disabled = true;
            }
        });

        quizSubmitBtn.classList.add('d-none');
    }

    quizRadios.forEach(function(el) {
        el.addEventListener("change", function(e) {
            var quizQuestionsChecked = document.querySelectorAll('#quiz input[type="radio"]:checked'),
                parentQuestionChildren = el.parentNode.children;

            if (quizQuestions.length == quizQuestionsChecked.length) {
                quizSubmitBtn.classList.remove('disabled');
            }

            if (el.value == '1') {
                el.classList.add('true');
            } else {
                el.classList.add('false');

                for (var parentQuestionChild of parentQuestionChildren) {
                    parentQuestionChild.classList.remove('true');
                }
            }

            for (var parentQuestionChild of parentQuestionChildren) {
                parentQuestionChild.classList.remove('wrong');
            }
        });
    });

    if (quizSubmitBtn) {
        quizSubmitBtn.addEventListener('click', function(e) {
            var quizQuestionsCorrect = document.querySelectorAll('#quiz .correct').length + document.querySelectorAll('#quiz .true').length;

            if (quizQuestions.length != quizQuestionsCorrect) {
                e.preventDefault();

                quizSubmitBtn.classList.remove('btn-primary');
                quizSubmitBtn.classList.add('btn-danger');
                quizSubmitBtn.setAttribute('value','Recheck Answers');

                for (var i of quizRadios) {
                    if (i.checked === false) {
                        i.classList.remove('false');
                    }
                    if (i.classList.contains('true')) {
                        i.classList.remove('true');
                        i.classList.add('correct');
                    }
                    if (i.classList.contains('false')) {
                        i.classList.remove('false');
                        i.classList.add('wrong');
                    }
                    if (i.classList.contains('correct')) {
                        var parentQuestionChildren = i.parentNode.children;

                        for (var parentQuestionChild of parentQuestionChildren) {
                            parentQuestionChild.classList.remove('wrong');

                            if (!parentQuestionChild.classList.contains('correct')) {
                                parentQuestionChild.disabled = true;
                            }
                        }
                    }
                }
            }
        });
    }

    // Highlight Syntax
    var codeBlocks = document.querySelectorAll('pre');
    for (var i of codeBlocks) {
        i.classList.add('line-numbers', 'py-2', 'm-0');
    }
    Prism.highlightAll();
})();