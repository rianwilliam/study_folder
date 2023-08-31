//! Para cada letra será adicionado 30 ao price (os espaços contam com +30)

function billboard(name, price = 30) {
    let newPrice = 0;
    for(let i = 0; i < name.length; i++) {newPrice += price}
    return newPrice
}

console.log(billboard('152'))

//? Outras maneiras de fazer
//! Estudar esta maneira

const billboard2 = (name, price = 30) => [...name].reduce(pre => pre + price, 0);