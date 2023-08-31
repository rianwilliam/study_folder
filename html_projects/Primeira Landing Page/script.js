let rodapeImg1 = document.querySelector('.rodape-img1')
let rodapeImg2 = document.querySelector('.rodape-img2')
let rodapeImg3 = document.querySelector('.rodape-img3')

function img1_on() {
    rodapeImg1.classList.add('img1_on');
    rodapeImg2.classList.add('img_off');
    rodapeImg3.classList.add('img_off');
}

function img2_on() {
    rodapeImg2.classList.add('img2_on');
    rodapeImg1.classList.add('img_off');
    rodapeImg3.classList.add('img_off');
}

function img3_on() {
    rodapeImg3.classList.add('img3_on');
    rodapeImg1.classList.add('img_off');
    rodapeImg2.classList.add('img_off');
}

function img_off() {
    rodapeImg1.classList.remove('img1_on','img_off');
    rodapeImg2.classList.remove('img2_on','img_off');
    rodapeImg3.classList.remove('img3_on','img_off');
}