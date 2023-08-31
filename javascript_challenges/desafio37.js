//! Some normalmente os itens depois do 0, qualquer número menor que zero deve-se soma-ló até somar no valor positivo

function getSum(a,b) {
    let sum = 0;
    if(a < 0) {
        for(let i = 0; a < b; i++) {
            sum += i
        }
    }
    return sum
}

console.log(getSum(-10,3))  