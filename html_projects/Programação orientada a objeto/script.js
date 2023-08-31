const f_nome = document.querySelector("#f_nome"); // * Campo de nome
const f_idade = document.querySelector("#f_idade"); // * Campo de idade
const sexo = [...document.querySelectorAll(".sexo")]; // * Campo do genêro
const setores = [...document.querySelectorAll(".btn-setor")]; // * Campo dos setores
const btnEnviar = document.querySelector("#btnEnviar"); // * Botão de adicionar
const table = document.querySelector(".tabela-funcionarios"); // * Tabela com os dados
let funcionarios = []

class Funcionario { // * Classe que guarda os valores dos inputs
    constructor(nome,idade,sexo,setor) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.setor = setor
    }

    setoresMarcados = function() {
        this.setor = this.setor.filter(item => {
            return item.classList.contains("marked")
        })
        return this.setor
    }
}

setores.map(item => { // * Efeito de marcar dos setores
    item.addEventListener("click", (evt) => item.classList.toggle("marked"))
})

const limpar = () => { // * Limpa os campos do form após adicionar um item
    f_nome.value = "";
    f_idade.value = null;
    sexo[0].checked = true;
    setores.map(item => item.checked = false);
    setores.map(item => item.classList.remove("marked"))
}


const addFuncionarios = () => { // * Obtém os dados do campo e cria um novo objeto com esses valores e adiciona ao array
    
    let sexoMarcado = sexo.filter((item) => item.checked)
    sexoMarcado = sexoMarcado[0].id
    
    const f = new Funcionario(f_nome.value,f_idade.value,sexoMarcado,setores);
    f.setoresMarcados();
    funcionarios.push(f);
}

const addElementos = () => { // * cria a linha e as colunas e adiciona na tabela com as informações do form
    funcionarios.map(item => {
        const tr = document.createElement("tr");;

        table.appendChild(tr);
        tr.setAttribute("data-nome",item.nome)
        
        for(let i = 0; i < 5; i++) { // * Cria 5 colunas
            const td = document.createElement("td");
            tr.appendChild(td)
        }

        // * E atribuí o determinado valor a cada uma delas
        tr.children[0].innerHTML = item.nome
        tr.children[1].innerHTML = item.idade
        tr.children[2].innerHTML = item.sexo
        tr.children[3].innerHTML += item.setor.map(item => item.value)
    })
}

btnEnviar.addEventListener("click", () => { // * Limpa a tabela a cada adição (para não duplicar os itens) e executa as funções de criar o objeto, adicionar ele e limpar o form
    table.innerHTML = '';
    addFuncionarios();
    addElementos();
    limpar();

})