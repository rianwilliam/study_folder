//! Determine a idade do gato e do cachorro de acordo com os anos de humano para cada ano de humano

//! Para o gato
//! +15 anos de gato no primeiro ano
//! +9 anos de gato no segundo ano
//! +4 anos de gatos para os próximos anos

//! E para o cachorro
//! +15 anos de cachorro no primeiro ano
//! +9 anos de cachorro no segundo ano
//! +5 anos de cachorro para os próximos anos

var humanYearsCatYearsDogYears = function(humanYears) {
    const arr = [humanYears,0,0]
    for(let i = 1; humanYears >= i; i++) {
            i == 1 ? arr[1] += 15 : 
            i == 2 ? arr[1] += 9 :
            i > 2 ? arr[1] += 4 : false
    }
    for(let e = 1; humanYears >= e; e++) {
            e == 1 ? arr[2] += 15 : 
            e == 2 ? arr[2] += 9 :
            e > 2 ? arr[2] += 5 : false
    }
    return arr
}

console.log(humanYearsCatYearsDogYears(3))

//? Maneiras corretas de se fazer

const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
}