let login = document.querySelector('#login');
let popup = document.querySelector('.popup');
let formUserName = document.querySelector('.user-name');
let loginBtn = document.querySelector('.login-btn');
let user = document.querySelector('.user');
let video = document.querySelector('video');
let html = document.querySelector('html');

document.addEventListener('DOMContentLoaded', function() {
    html.classList.add('on');
    setTimeout(() => {
        login.classList.add('on');
    }, 500);
})

function executar() {
    let userName = formUserName.value;
    if (userName.length < 1) {
        alert ('Por favor insira um nome válido')
    }
    else if (userName.length > 20) {
        alert ('Por favor insira um nome menor')
    }
    else {
        user.innerText = userName;
        login.classList.remove('on');
        html.classList.remove('on');
        setTimeout(() => {
            video.play();
        }, 700);
    }
}



loginBtn.addEventListener('click', function() {
    executar();
})



