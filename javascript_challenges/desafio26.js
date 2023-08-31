//! Crie uma função que responda à pergunta "Você está tocando banjo?". Se o seu nome começar com a letra "R" ou "r" minúsculo, você está tocando banjo!

function areYouPlayingBanjo(name) {
    return name.startsWith('r') || name.startsWith('R') ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('br'))