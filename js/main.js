let lock=document.querySelector(".lock"),body=document.body,addScroll=e=>{let t=e.getAttribute("href"),o=document.querySelector(t).offsetTop;window.scrollTo({top:o-100,behavior:"smooth"})},menu=document.querySelector(".header__menu"),burger=document.querySelector(".hamburger");burger.addEventListener("click",(()=>{menu.classList.contains("header__menu_transition_fast")&&menu.classList.remove("header__menu_transition_fast"),menu.classList.contains("header__menu_active")&&!burger.classList.contains("hamburger_active")&&menu.classList.toggle("header__menu_transition_fast"),menu.classList.toggle("header__menu_active"),burger.classList.toggle("hamburger_active"),body.classList.toggle("lock")}));let headerList=header.querySelector(".header__list"),headerLinks=header.querySelectorAll(".header__link"),headerLogo=header.querySelector(".header__logo");headerLogo.addEventListener("click",(function(e){e.preventDefault(),addScroll(headerLogo)}));for(let e of headerLinks)e.addEventListener("click",(t=>{t.preventDefault(),addScroll(e),menu.classList.contains("header__menu_active")&&(menu.classList.toggle("header__menu_active"),burger.classList.toggle("hamburger_active")),menu.classList.contains("header__menu_active")||body.classList.remove("lock"),menu.classList.toggle("header__menu_transition_fast")}));let openPopupOnBtn=(e,t)=>{for(let o of t)o.addEventListener("click",(t=>{t.preventDefault(),window.matchMedia("(max-height: 700px)").matches?(e.classList.remove("popup_active"),addScroll(o)):(e.classList.add("popup_active"),body.classList.add("lock"))}))},closeOnClickOutside=e=>{e.addEventListener("click",(t=>{t.target.closest(".popup__wrapper")||(e.classList.remove("popup_active"),body.classList.remove("lock"),clearInputs())}))},closePopupOnBtn=e=>{closeBtn=document.querySelector(".popup__close-btn"),closeBtn.addEventListener("click",(()=>{e.classList.remove("popup_active"),body.classList.remove("lock"),clearInputs()}))},btnLinksToForm=document.querySelectorAll(".btnToForm"),popupForm=document.querySelector(".popup");function addShawarmaName(){let e=document.querySelectorAll(".item-catalog");if(e.length>0)for(let t of e){let e=t.querySelector(".item-catalog__name");t.querySelector(".btnToForm").addEventListener("click",(()=>{let t=document.querySelectorAll(".form-popup__input");for(let o of t)"shawarmaName"==o.getAttribute("name")&&(o.value=e.innerHTML),"userName"==o.getAttribute("name")&&o.focus()}))}}function clearInputs(){let e=document.querySelectorAll(".form-popup__input");for(let t of e)t.value=""}function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}closeOnClickOutside(popupForm),closePopupOnBtn(popupForm),openPopupOnBtn(popupForm,btnLinksToForm),addShawarmaName(),ibg();