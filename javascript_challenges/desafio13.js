//! Alguém trouxe dálmatas para sua casa, qual seria sua reação? faça sua reação dependendo do número de dálmatas que lhe foi entregue

function howManyDalmatians(numer) {
    dogs = ['Hardly any', 'More than a handful!', 'Woah that\'s a lot of dogs!', '101 DALMATIANS!!!' ]
    respond = numer <= 10 ? dogs[0] 
            : numer <= 50 ? dogs[1] 
            : numer == 101 ? dogs[3] : dogs[2]
    return respond
}  

console.log(howManyDalmatians(101))


