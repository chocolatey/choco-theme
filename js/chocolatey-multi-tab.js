(function() {
    document.querySelectorAll('.nav-link-multi-tab').forEach((t,i)=>{
        t.addEventListener('show.bs.tab', function (e) {
            let targetClass = t.dataset.bsTarget;
            var pane = document.querySelector('#multiTabB '+targetClass),
                sibling = document.querySelector('#multiTabB .tab-pane.active')

            // hide 2nd pane sibling
            sibling.classList.remove('show', 'active')

            // show 2nd pane
            pane.classList.add('show', 'active')
        })  
    });
})(); 