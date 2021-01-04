// hamburger
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
    burger.classList.toggle('hamburger_active')
});