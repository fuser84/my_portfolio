
class My_Portfolio_Scroll{
    constructor({el1: element1, el2: element2}){
        this._el1 = element1;
        this._el2 = element2;
        this._el1.addEventListener("click", this._scroll.bind(this));
    }
    _scroll(event){
        let top = this._el2.offsetTop;
        event.preventDefault();
            window.scrollTo({
                top: `${top}`,
                behavior: "smooth",
            });
    }
}

let portfolio1 = new My_Portfolio_Scroll({
    el1: document.querySelector('#about'),
    el2: document.querySelector('#web')
});

let portfolio2 = new My_Portfolio_Scroll({
    el1: document.querySelector('#up'),
    el2: document.querySelector('#main')
});