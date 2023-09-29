const menuBtn = document.querySelector('.menu_btn')
const navMenu = document.querySelector('.navbar_menu')
menuBtn.onclick = function() {
    navMenu.classList.toggle('open')
}