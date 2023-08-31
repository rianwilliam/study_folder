function getMiddle(s) {
    s = s.split('')
    return s.length % 2 != 0 ? s.slice(s.length/2)[0] : s.slice(s.length/2-1,s.length/2+1).join('')
}

let impar = 'testing'

let par = 'testinga'

console.log(getMiddle(impar))
console.log(getMiddle(par))
