const HamToggleButton = document.getElementsByClassName("ham-menu")[0]
const NavLinks = document.getElementsByClassName("links")[0]
const navBar = document.getElementsByClassName("navbar")[0]

HamToggleButton.addEventListener('click', () =>{
    NavLinks.classList.toggle('active')
    navBar.classList.toggle('active')
})