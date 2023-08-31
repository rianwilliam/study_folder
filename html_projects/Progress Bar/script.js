let aumentar = document.querySelector('.aumentar1')
let diminuir = document.querySelector('.diminuir1')
let progress = document.querySelector('.progress1')

let more = () =>{
    if(progress.value > 100) {
        progress.value = 100;
    }
    else progress.value += 10
}

let less = () =>{
    if(progress.value < 0) {
        progress.value = 0
    }
    else progress.value -= 10
}

aumentar.addEventListener('click',function() {
    more()
})

diminuir.addEventListener('click',function() {
    less()
})