let navToggle = document.querySelector('.nav-toggle');
let links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    links.classList.toggle('on');
    navToggle.classList.toggle('on')
})