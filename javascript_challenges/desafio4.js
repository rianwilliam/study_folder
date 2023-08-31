//! retire todos os espaços das strings colocadas dentro do console.log

function noSpace(x){
    return x.replace(/ /g, "") //* as barras com o pesaço dentro acompanhado do 'g' indicam uma propriedade global
}

console.log(noSpace('teste teste t t t '))

function noSpace(x){
    return x.split(' ').join(''); //* O split serve para retirar os elementos, enquanto o join os adiciona
}

console.log(noSpace('teste teste t t t '))


//! Teste do split

function retirarString(x) {
    return x.split('k')
} 

console.log(retirarString('h h k k k k k k k k k k k')) //* aqui por exemplo estou colocando as strings dentro de um array e cortando todas as letras 'k' dentro dela