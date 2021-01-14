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


function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();


// function scrollToAnchor() {
//     let linkAchors = document.querySelectorAll('.header__link');
//     if (linkAchor.length > 0) {
//         for (let i = 0; i < linkAchor.length; i++) {
            
//         }
//     }
// }

