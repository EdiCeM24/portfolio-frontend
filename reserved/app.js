// to select all elements within the section, controls, control
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.main-content');


function pageTransitions(){
    // Button click active class
    for(let i =0; i < sections.length; i ++) {
        sectBtn [i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('active-btn');
            currentBtn [0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
    // sections active class (allsections.forEach((section)))
    allsections.addEventListener('click', (e) => {
        // console.log(e.target);
        const id = e.target.dataset.id;
        if(id) {
            // remove selected from the other btn
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            // hid other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransitions ();