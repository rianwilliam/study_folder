//! Retorne true para seguências com 4 ou 6 dígitos e falso caso o número seja diferente destes

function validatePIN (pin) {
    pin = pin.replace(/[a-z]/gi,'.').replace(/[' ']/g,'.')
    if(pin.includes('.')) {
        return false
    }
    if(pin.length === 4 || pin.length === 6) {
        return !isNaN(parseInt(pin)) && isFinite(pin) && pin >= 0
    }
    else return false
}

console.log(validatePIN('123'))

//! Estudar regex para fazer este