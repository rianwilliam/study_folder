let button = document.querySelector("#cargos")
let optionsContainer = document.querySelector('.options-container')

function toggleOptions() {
    teste = optionsContainer.classList.toggle('activate')
}

function changeOption(cargo) {
    button.innerHTML = cargo
    toggleOptions()
}

let cadastros = document.querySelector('.cadastros')
let send = document.querySelector('.send')

send.addEventListener('click',function() {
    let nome = document.querySelector('#nome').value
    let idade = document.querySelector('#idade').value
    let masculino = document.querySelector('#masculino')
    let cargo = button.innerHTML
    let sexo = 'Não informado'

    if (masculino.checked) {
        sexo = 'Masculino'
    }
    if (feminino.checked) {
        sexo = 'Feminino'
    }
    if (cargo == 'Escolha uma opção') {
        cargo = 'Não informado  '
    }
    if (nome == '') {
        nome = 'Não informado'
    }
    if (idade == '') {
        idade = 'Não informada'
    }
    const informacoes = [nome,idade,sexo,cargo]
    
    let linha = document.createElement('tr')
    cadastros.append(linha)
    for (i in informacoes) {
        let dados = document.createElement('td')
        dados.innerHTML = informacoes[i]
        linha.append(dados)
        let acao = document.createElement('button')
        acao.innerHTML = 'X'
        if (i == 3) {
            linha.append(acao)
        }
    }
})