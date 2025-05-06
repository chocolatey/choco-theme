(() => {
    if (window.location.pathname.includes('courses')) {
        const setNavigation = () => {
            let path = window.location.pathname;
            path = path.replace(/\/$/, '');
            path = decodeURIComponent(path);

            // Courses Section - Set Localstorage Items
            // Active
            document.querySelectorAll('.course-list li a').forEach(el => {
                const href = el.getAttribute('href');

                if (path.substring(0, href.indexOf('courses/').length) === href) {
                    window.localStorage.setItem('active', href);
                }
            });

            // Set Completed courses if user is NOT logged in
            document.querySelectorAll('.course-list:not(.authenticated) li a').forEach(el => {
                const href = el.getAttribute('href');

                if (path.substring(0, href.indexOf('courses/').length) === href) {
                     
                    const completed = localStorage.completed === undefined ? [] : JSON.parse(localStorage.completed);

                    if (completed.indexOf(href) == -1) { // check that the element is not in the array
                        completed.push(href);
                    }

                    localStorage.completed = JSON.stringify(completed);
                }
            });
        };

        setNavigation();

        // Get Localstorage Items for Courses Section
        const getCourseStorage = () => {
            // Get Active Localstorage Item
            const activeModule = window.localStorage.getItem('active');

            if (activeModule) {
                const activeModuleLinks = document.querySelectorAll(`.course-list li a[href="${activeModule}"]`);

                for (const i of activeModuleLinks) {
                    i.parentNode.classList.add('active');
                }
            }

            // Get Completed Localstorage Items
             
            const completed = localStorage.completed === undefined ? [] : JSON.parse(localStorage.completed); // get all completed items

            for (const i in completed) { // <-- completed is the name of the cookie
                const completedLinks = document.querySelectorAll(`.course-list li a[href="${completed[i]}"]`);

                for (const completedLink of completedLinks) {
                    if (!completedLink.parentNode.classList.contains('active') && !document.querySelector('.course-list').classList.contains('authenticated')) { // check if this is not active
                        completedLink.parentNode.classList.add('completed');
                    }
                }
            }

            // Remove completed local storage if use is logged in, tracking progress through profile
            if (document.querySelector('.course-list').classList.contains('authenticated')) {
                localStorage.removeItem('completed');
            }

            // Stylize
            document.querySelector('.course-list li').addEventListener('mouseenter', e => e.target.children[0].classList.add('hover'));
            document.querySelector('.course-list li').addEventListener('mouseleave', e => e.target.children[0].classList.remove('hover'));
        };

        getCourseStorage();

        // Removes text from links in additional-course section
        document.querySelectorAll('#additionalCourses .course-list a').forEach(el => {
            el.innerHTML = '<span class="additional-module">...</span>';
        });

        // Completed Module Pop-up
        const quiz = document.getElementById('quiz-modal');

        if (quiz && window.location.search.includes('quiz=true')) {
            const quizModal = bootstrap.Modal.getOrCreateInstance(quiz, { keyboard: false, backdrop: 'static' });

            quizModal.show();
        }

        // Quiz & Forms
        const completedQuiz = document.querySelector('#quiz .mod-completed');
        const quizQuestions = document.querySelectorAll('#quiz .course-question');
        const quizRadios = document.querySelectorAll('#quiz input[type="radio"]');
        const quizSubmitBtn = document.querySelector('#quiz .btn');

        if (completedQuiz) {
            quizRadios.forEach(el => {
                if (el.value == '1') {
                    el.classList.add('correct');
                    el.checked = true;
                } else {
                    el.disabled = true;
                }
            });

            quizSubmitBtn.classList.add('d-none');
        }

        quizRadios.forEach(el => {
            el.addEventListener('change', () => {
                const quizQuestionsChecked = document.querySelectorAll('#quiz input[type="radio"]:checked');
                const parentQuestionChildren = el.parentNode.children;

                if (quizQuestions.length == quizQuestionsChecked.length) {
                    quizSubmitBtn.classList.remove('disabled');
                }

                if (el.value == '1') {
                    el.classList.add('true');
                } else {
                    el.classList.add('false');

                    for (const i of parentQuestionChildren) {
                        i.classList.remove('true');
                    }
                }

                for (const i of parentQuestionChildren) {
                    i.classList.remove('wrong');
                }
            });
        });

        if (quizSubmitBtn) {
            quizSubmitBtn.addEventListener('click', e => {
                const quizQuestionsCorrect = document.querySelectorAll('#quiz .correct').length + document.querySelectorAll('#quiz .true').length;

                if (quizQuestions.length != quizQuestionsCorrect) {
                    e.preventDefault();

                    quizSubmitBtn.classList.remove('btn-primary');
                    quizSubmitBtn.classList.add('btn-danger');
                    quizSubmitBtn.setAttribute('value', 'Recheck Answers');

                    for (const i of quizRadios) {
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
                            const parentQuestionChildren = i.parentNode.children;

                            for (const el of parentQuestionChildren) {
                                el.classList.remove('wrong');

                                if (!el.classList.contains('correct')) {
                                    el.disabled = true;
                                }
                            }
                        }
                    }
                }
            });
        }

        // Installing module
        const installModal = document.querySelector('#installation-pop');
        const installModule = () => {
            const method = window.localStorage.getItem('method');
            const select = document.querySelector('#select-method');
            const reselect = document.querySelector('#reselect-method');
            const installModalInstance = bootstrap.Modal.getOrCreateInstance(installModal, { keyboard: false, backdrop: 'static' });

            const showInstallMethod = method => {
                document.querySelector(`#${method}`).style.display = 'block';
                document.querySelector(`#${method}`).classList.add('method');
                document.querySelector(`#${method}`).scrollIntoView();
            };

            if (method) {
                showInstallMethod(method);
            } else {
                installModalInstance.show();
            }

            const methodSelector = e => {
                const method = e.target.value.substring(e.target.value.indexOf('#') + 1);

                installModalInstance.hide();

                // Set things back to beginning state
                if (document.querySelector('.method')) {
                    document.querySelector('.method').style.display = 'none';
                    document.querySelector('.method').classList.remove('method');
                }

                window.localStorage.setItem('method', method); // save current id of installation method
                window.history.replaceState(null, null, `?method=${method}`); // Change querystring parameter without reloading

                // Navigate to area on page and show
                showInstallMethod(method);
            };

            select.addEventListener('change', methodSelector);
            reselect.addEventListener('change', methodSelector);
        };

        if (installModal) {
            installModule();
        }

        // Highlight Syntax
        const codeBlocks = document.querySelectorAll('pre');

        for (const i of codeBlocks) {
            i.classList.add('line-numbers');
        }

        Prism.highlightAll();
    }
})();
