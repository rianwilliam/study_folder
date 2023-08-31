//! Retorne apenas as strings que contém 4 caracteres nehum a mais nenhum a menos

function friend(friends){
    return friends.filter((item) => item.length == 4)
}

console.log(friend(['rian','123','voce','edu']))