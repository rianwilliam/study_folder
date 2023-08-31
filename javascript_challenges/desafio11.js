//! Aqui basicamente é um jogo no qual os espaços das strings são fantasmas, devo retirar os espaços e retornar que os fantasmas foram eliminados
//! Caso não tenha espaços ou seja fantasmas devo retornar outra frase

const ghostBusters = (building) => {
  if(building.includes(' ')) {
    return building.split(' ').join('') 
  }
  else return "You just wanted my autograph didn't you?"
}

console.log(ghostBusters('qqqqqqqqqq'))

//? Outras maneiras de fazer

function ghostBusters2(building) {
  return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
}