function insert(string) {
    var texto = document.getElementById('tecladovirtual').innerHTML += string
}

function back() {
    var apagar = document.getElementById('tecladovirtual').innerHTML
    document.getElementById('tecladovirtual').innerHTML = apagar.substring(0, apagar.length -1)
}

function clean() {
    var clean = document.getElementById('tecladovirtual').innerHTML = ''
}
