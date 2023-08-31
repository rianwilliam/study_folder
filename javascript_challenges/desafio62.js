
function encrypt(text, n) {
    if (text == '' || n < 0) return text

    text = text.split('');
    console.log(text)
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr = [];
        for(e in text) {
            e % 2 != 0 ? arr.unshift(text[e]) : false
        }
        arr.reverse()

        for(e in text) {
            e % 2 == 0 ? arr.push(text[e]) : false
        }
        text = arr;
    }
    return text.join('');
}

function decrypt(encryptedText, n) {
    let arr1 = [];
    let arr2 = [];
    encryptedText = encryptedText.split('');
    let result = ''
    console.log(encryptedText.length)

    for (e in encryptedText) {
        e % 2 != 0 ? arr1.push(encryptedText[e]) : arr2.push(encryptedText[e])
    }



    return [arr1,arr2]
}


let teste = 'This is a test!'

let numero = 3
console.log(encrypt(teste,numero+2))

console.log(decrypt(encrypt(teste, numero), numero))