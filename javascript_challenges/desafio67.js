function Ship(draft,crew) {
    this.draft = draft; // * Peso total do navio
    this.crew = crew; // * Número de humanos no navio
    // * para cada crew/humano é adicionado +1.5 draft
    // * Se depois de remover a tripulação o draft for maior que 20, vale a pena saquear o navio

    this.isWorthIt = function() {
        return this.draft - (this.crew * 1.5) > 20
    }

}

let titanic = new Ship(100, 20);

console.log(titanic.isWorthIt())