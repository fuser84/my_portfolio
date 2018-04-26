

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