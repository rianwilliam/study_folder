//! Calcule o IMC e retorne a frase de acordo com o valor

function bmi(weight, height) {
    let calculation = weight / Math.pow(height, 2)
    return calculation <= 18.5 ? 'Underweight' : calculation <= 25.0 ? 'Normal' : calculation <= 30.0 ? 'Overweight' : 'Obese'
}

console.log(bmi(80, 1.80))