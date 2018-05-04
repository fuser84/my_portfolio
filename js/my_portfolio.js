
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
        // this._el2.scrollIntoView({behavior: "smooth", block: "start"});
            window.scroll({
                top: `${top}`,
                behavior: "smooth",
            });
    }
}

// jQuery scroll
// $("#buttonDown").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#about").offset().top
//     }, 1000);
// });

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

let portfolio7 = new My_Portfolio_Scroll({
    el1: document.querySelector('#bottom_home'),
    el2: document.querySelector('#navbar-ex')
});

let portfolio8 = new My_Portfolio_Scroll({
    el1: document.querySelector('#bottom_about'),
    el2: document.querySelector('#about')
});

let portfolio9 = new My_Portfolio_Scroll({
    el1: document.querySelector('#bottom_portfolio'),
    el2: document.querySelector('#portfolio')
});

let portfolio10 = new My_Portfolio_Scroll({
    el1: document.querySelector('#bottom_contact'),
    el2: document.querySelector('#contact')
});

//ES6 approach
let navbarCollapse =() => {
    let navbar = document.querySelector('#navbar-ex');
    let toggler = document.querySelector(".navbar-toggler");
    let collapse = document.querySelector(".navbar-collapse");
    if (window.scrollY > 50) {
        //console.log(window.scrollY);
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
        toggler.classList.add("collapsed");
        toggler.setAttribute('aria-expanded', 'false');
        collapse.classList.remove("show");

    }
};
window.addEventListener('scroll', navbarCollapse);

//google-maps
function initMap() {
    let Kiev = {lat: 50.45466, lng: 30.5238};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: Kiev,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });
    let marker = new google.maps.Marker({
        position: Kiev,
        map: map
    });
}

//window.addEventListener('load', initMap);



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