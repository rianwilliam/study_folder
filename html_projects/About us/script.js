const reviews = [
    {
        id: 1,
        funcionario: 'roberto',
        img: './perfil 1.png',
        trabalho: 'Engenheiro',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor consequat dolor, ac commodo leo cursus at. In sit amet fringilla turpis, vitae convallis nulla. Curabitur id nunc ultricies, eleifend eros vitae, pellentesque magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla euismod eu urna non pellentesque. Proin efficitur augue ac luctus malesuada.'        
    },
    {
        id: 2,
        funcionario: 'marcos',
        img: './perfil 2.png',
        trabalho: 'investidor',
        descricao: 'Quisque tristique porta risus at venenatis. Aenean ante elit, viverra in vulputate at, vehicula eget risus. Duis ultrices eleifend auctor. Curabitur lobortis volutpat purus, fringilla maximus justo. Praesent facilisis erat pharetra lorem gravida, id euismod urna iaculis. Sed'
    },
    {
        id: 3,
        funcionario: 'carlos',
        img: './perfil 3.png',
        trabalho: 'professor',
        descricao: 'Sed tortor lacus, scelerisque sit amet ultricies ac, fringilla sed justo. Proin sagittis pretium lectus quis porttitor. Nulla hendrerit ac urna in mollis. Vestibulum rhoncus leo nisi, dapibus auctor tellus dictum eget. Suspendisse aliquet, urna id convallis gravida, nisi sapien sagittis purus, in congue leo ante nec felis. Morbi non erat consequat, tristique ex et, sodales leo. Nulla diam ante, ultricies vel aliquam eget'
    }
]

let img = document.getElementById('img');
let funcionario = document.getElementById('funcionario');
let trabalho = document.getElementById('trabalho');
let descricao = document.getElementById('descricao');

let currentItem = 0;

let proximo = document.querySelector('.proximo');
let anterior = document.querySelector('.anterior');

window.addEventListener('DOMContentLoaded', function(){
    person();
})

function person() {
    let item = reviews[currentItem];
    img.src = item.img;
    funcionario.textContent = item.funcionario;
    trabalho.textContent = item.trabalho;
    descricao.textContent = item.descricao;
}

proximo.addEventListener("click", function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    person();
    transicao();
})

anterior.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    person();
})