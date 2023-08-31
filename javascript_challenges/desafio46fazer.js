//! Cada elemento dentro do array representa um passo na caminhada faça o pecurso e retorne a posição original

function isValidWalk(walk) {
    return walk.length === 10 && walk[0] == walk[walk.length -2] ? true : false
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))