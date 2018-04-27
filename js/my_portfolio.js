// $(document).ready(function(){
//     window.scroll({
//         top: -1,
//         behavior: "auto"
//     });
// });


//add scrollspy behavior to the navbar
$('body').scrollspy({ target: '#navbar-ex' });


class My_Portfolio_Scroll{
    constructor({el1: element1, el2: element2}){
        this._el1 = element1;
        this._el2 = element2;
        this._el1.addEventListener("click", this._scroll.bind(this));
    }
    _scroll(event){
        let top = this._el2.offsetTop;
        event.preventDefault();
        //this._el2.scrollIntoView({behavior: "smooth", block: "start"});
            window.scroll({
                top: `${top}`,
                behavior: "smooth",
            });
    }
}

let portfolio1 = new My_Portfolio_Scroll({
    el1: document.querySelector('#buttonDown'),
    el2: document.querySelector('#about')
});

let portfolio2 = new My_Portfolio_Scroll({
    el1: document.querySelector('#buttonUp'),
    el2: document.querySelector('#main')
});

let portfolio3 = new My_Portfolio_Scroll({
    el1: document.querySelector('#about_me'),
    el2: document.querySelector('#about')
});

let portfolio4 = new My_Portfolio_Scroll({
    el1: document.querySelector('#my_portfolio'),
    el2: document.querySelector('#portfolio')
});

let portfolio5 = new My_Portfolio_Scroll({
    el1: document.querySelector('#my_contact'),
    el2: document.querySelector('#contact')
});

let portfolio6 = new My_Portfolio_Scroll({
    el1: document.querySelector('.navbar-brand'),
    el2: document.querySelector('#name')
});

//ES6 approach
let navbarCollapse =() => {
    let navbar = document.querySelector('#navbar-ex');
    if (window.scrollY > 50) {
        //console.log(window.scrollY);
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
        let toggler = document.querySelector(".navbar-toggler");
        let collapse = document.querySelector(".navbar-collapse");
        toggler.classList.add("collapsed");
        toggler.setAttribute('aria-expanded', 'false');
        collapse.classList.remove("show");

    }
};
window.addEventListener('scroll', navbarCollapse);


//jQuery approach

// var navbarCollapse = function() {
//     if ($("#navbar-ex").offset().top > 50) {
//         $("#navbar-ex").addClass("navbar-shrink");
//     } else {
//         $("#navbar-ex").removeClass("navbar-shrink");
//     }
// };
// // Collapse now if page is not at top
// navbarCollapse();
// // Collapse the navbar when page is scrolled
// $(window).scroll(navbarCollapse);