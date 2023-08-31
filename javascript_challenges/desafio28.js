//! Retorne a string retorne ela mesma só que sem as vogais

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '') //* .Raplace substitui os valore atribuidos dentro do escopo global por uma string vazia
}                                       //* o "i" serve para pegar também as letras maiusculas



console.log(disemvowel('qaAdveqejyydiauuaa'))