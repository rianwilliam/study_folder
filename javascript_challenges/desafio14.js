//! Retorne o nome ao contrário do que é inserido no parametro da funcao

const encode = (str) => str.split(' ').reverse().join(' ') //* Aqui usei o split para colocar o str dentro de um array depois reverti o valor do array e retirei usando o join

console.log(encode('teste1 teste2')) 