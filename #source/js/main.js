// hamburger
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let lock = document.querySelector('.lock');
let body = document.body;

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
    burger.classList.toggle('hamburger_active')
    body.classList.toggle('lock')
});



// function scrollToAnchor() {
//     let linkAchors = document.querySelectorAll('.header__link');
//     if (linkAchor.length > 0) {
//         for (let i = 0; i < linkAchor.length; i++) {
            
//         }
//     }
// }

