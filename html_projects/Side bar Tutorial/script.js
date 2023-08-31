let bars = document.querySelector('.bars');
let blurSideBar = document.querySelector('.blur-side-bar');
let sideBar = document.querySelector('.side-bar');
let closeMenu = document.querySelector('.close-menu')

function menuSideBar() {
    bars.classList.toggle('on')
    blurSideBar.classList.toggle('on');
    sideBar.classList.toggle('on');
}

bars.addEventListener('click', function() {
    menuSideBar()
})

closeMenu.addEventListener('click', function() {
    menuSideBar()
})