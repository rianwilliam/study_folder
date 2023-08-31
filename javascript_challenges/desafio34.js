//! Retorne a nota final do aluno de acordo com a soma de suas notas

function getGrade (s1, s2, s3) {
    let grades = s1+s2+s3
    return grades >= 270 ? "A" :
           grades >= 240 ? "B" :
           grades >= 210 ? "C" :
           grades >= 180 ? "D" : "F"
}

console.log(getGrade(100,90,90))