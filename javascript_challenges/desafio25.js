//! há um número de dragões cada dragão precisa de duas balas para ser derrotado, o número de balas é aleatório
//! verifique se há balas o suficientes se sim retorne true, se não retorne false

function hero(bullets, dragons){
    let bulletsRemain = bullets - dragons*2
    if(bulletsRemain >= 0) {
        return true
    }
    return false
}
    
console.log(hero(20,10))

//? Maneira correta de se fazer

function hero(bullets, dragons){
    return bullets >= dragons * 2
}

console.log(hero(40,20))