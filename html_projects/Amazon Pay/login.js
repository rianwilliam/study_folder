let btn_login = document.querySelector('.btn_login');
let section_popup = document.querySelector('.section_popup');
let close_popup = document.querySelector('.close_popup');
let foto_de_perfil = document.querySelector('.foto_de_perfil');

let btn_logar = document.querySelector('.btn_logar');

let etapa = 0;

btn_login.addEventListener('click', function(){
    section_popup.classList.add('section_popup_open');
})

close_popup.addEventListener('click', function(){
    section_popup.classList.remove('section_popup_open');
    nome.value = '';
    email.value = '';
    senha.value = '';
    nome.classList.remove("campo_incorreto"); 
    email.classList.remove("campo_incorreto"); 
    senha.classList.remove("campo_incorreto");
})



btn_logar.addEventListener('click', function(){ 
    /* Name */
    const nome = document.querySelector('#nome');
    const nome_value = nome.value;
    /* Email */
    const email = document.querySelector('#email');
    const email_value = email.value;
    /* Senha */
    const senha = document.querySelector('#senha');
    const senha_value = senha.value;

    if(nome_value !== 'user') {
        etapa = 0;
        nome.classList.add('campo_incorreto');
        nome.addEventListener("click",function() {
            this.classList.remove("campo_incorreto")
        })
    }
    else {
        etapa += 1;
    }
    if (email_value !== 'user@email') {
        etapa = 0;
        email.classList.add("campo_incorreto");
        email.addEventListener("click",function() {
            this.classList.remove("campo_incorreto")
        })
    }
    else {
        etapa += 1
    }
    if (senha_value !== 'user123') {
        etapa = 0;
        senha.classList.add("campo_incorreto");
        senha.addEventListener("click",function() {
            this.classList.remove("campo_incorreto")
        })
    }
    else {
        etapa += 1
    }
    if (etapa > 3) {
        section_popup.classList.remove('section_popup_open');
        foto_de_perfil.classList.add('logado');
        btn_login.classList.add('btn_login_disabled');
        nome.value = '';
        email.value = '';
        senha.value = '';
        nome.classList.remove("campo_incorreto"); 
        email.classList.remove("campo_incorreto"); 
        senha.classList.remove("campo_incorreto");
    }
    console.log(etapa)
})

function logOut() {
    btn_login.classList.remove('btn_login_disabled');
    foto_de_perfil.classList.remove('logado');
    etapa = 0;
}