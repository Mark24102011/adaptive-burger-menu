const Header = document.querySelector(".frame")
const close = document.querySelector(".hidden-menu-top-close")
const hiddenMenu = document.querySelector(".hidden-menu")


Header.addEventListener('click',function(){
    document.getElementsByClassName('header-opasity')[0].style= "display: none"
    document.getElementsByClassName('hidden-menu')[0].style= "display: block"
})


close.addEventListener('click',function(){
    document.getElementsByClassName('header-opasity')[0].style= "display:block"
    document.getElementsByClassName('hidden-menu')[0].style= "display: none"
})