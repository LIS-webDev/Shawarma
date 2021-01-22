let lock = document.querySelector('.lock');
let body = document.body;

// Burger
// ===============================================================================================================================================================
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.hamburger');
burger.addEventListener('click', () => {
    if (menu.classList.contains('header__menu_transition_fast')) {
        menu.classList.remove('header__menu_transition_fast')
    }
    if (menu.classList.contains('header__menu_active') && !burger.classList.contains('hamburger_active')) {
        menu.classList.toggle('header__menu_transition_fast')
    }
    menu.classList.toggle('header__menu_active');
    burger.classList.toggle('hamburger_active')
    body.classList.toggle('lock')
});
// ===============================================================================================================================================================

// Header
// ===============================================================================================================================================================
let headerList  = header.querySelector('.header__list');
let headerLinks = header.querySelectorAll('.header__link');
for (let headerLink of headerLinks) {
    headerLink.addEventListener('click', (e) => {
        e.preventDefault();
        let scrollToElem = headerLink.getAttribute('href');
        let coordinates = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinates - 100,
            behavior: "smooth"
        });
        if (menu.classList.contains('header__menu_active')){
            menu.classList.toggle('header__menu_active');
            burger.classList.toggle('hamburger_active')
        }
        if (!menu.classList.contains('header__menu_active')) {
            body.classList.remove('lock');
        };
        menu.classList.toggle('header__menu_transition_fast');
    })
}
// ===============================================================================================================================================================



// Popup
// ===============================================================================================================================================================
let addScroll = (link) => {
    let scrollToForm = link.getAttribute('href');
    let coordinates = document.querySelector(scrollToForm).offsetTop;
    window.scrollTo({
        top: coordinates - 100,
        behavior: "smooth"
    });
}

let openPopupOnBtn = (popupName, linkList) => {
    for (let link of linkList) {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            if (window.matchMedia("(max-height: 800px)").matches) {
                popupName.classList.remove('popup_active');
                addScroll(link)
            } else {
                popupName.classList.add('popup_active');
                body.classList.add('lock');
            }
        })
    }
}

let closeOnClickOutside = (popupName) => {
    popupName.addEventListener('click', (e) => {
        if (!e.target.closest('.popup__wrapper')) {
            popupName.classList.remove('popup_active');
            body.classList.remove('lock');
        }
    })
}

let closePopupOnBtn = (popupName,) => {
    closeBtn = document.querySelector('.popup__close-btn');
    closeBtn.addEventListener('click', () => {
        popupName.classList.remove('popup_active');
        body.classList.remove('lock');
    })
}


let btnLinksToForm = document.querySelectorAll('.btnToForm');
let popupForm = document.querySelector('.popup');
closeOnClickOutside(popupForm);
closePopupOnBtn(popupForm);
openPopupOnBtn(popupForm, btnLinksToForm);
// ===============================================================================================================================================================


// IBG
// ===============================================================================================================================================================
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();
// ===============================================================================================================================================================



// function scrollToAnchor() {
//     let linkAchors = document.querySelectorAll('.header__link');
//     if (linkAchor.length > 0) {
//         for (let i = 0; i < linkAchor.length; i++) {
            
//         }
//     }
// }

