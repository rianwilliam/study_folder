//! retire os pontos de dentro da string e substitua por hífens

function replaceDots(str) {
    return str.replace(/['.']/g,'-')
}

console.log(replaceDots('one.two.three.four'))