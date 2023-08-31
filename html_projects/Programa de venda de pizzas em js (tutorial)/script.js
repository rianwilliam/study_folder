'use strict' /* Se houver algum erro que não atenda a padronização do script 6, é recebida uma mensagem no console.log, esta é a finalidade deste comando */

//variáveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda,false);
btnEstorno.addEventListener('click', estorno,false);
btnPlanilha.addEventListener('click', planilha,false);

//funções

function venda(e) { //A letra "e" dentro da funcao é de evento
    if(document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00; //vinte e cinco é o valor da pizza
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else if(document.getElementById('mista').checked) {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendasMista').innerHTML = vendaMista.toFixed(2);

    }else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);      
    }
}

function estorno(e) { //A letra "e" dentro da funcao é de evento
    if(document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00; //vinte e cinco é o valor da pizza
        if(somaMussarela < 0) {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else if(document.getElementById('mista').checked) {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista < 0) {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendasMista').innerHTML = vendaMista.toFixed(2);

    }else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa < 0){
            somaCalabresa = 0
            vendaCalabresa = 0.00
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);      
    }
}

function planilha(e) {
    TableToExcel.convert(document.getElementById('table'))
}