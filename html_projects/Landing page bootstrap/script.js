
//! Loading...

let siteContent = document.querySelector("#site-content")
siteContent.style.visibility = 'hidden'

let progressBar = document.querySelector(".progress-bar");
let progress = document.querySelector(".progress");
let cnt = 0;
let loadingMessage = document.querySelector(".loading-msg");
let containerLoading = document.querySelector(".loading")


let loadingProgressBar = setInterval(() => {
    progressBar.style.width = cnt+"%"

    if (cnt >= 100) {
        clearInterval(loadingProgressBar)
        setTimeout(() => {
            containerLoading.style.transform = 'translateY(-100%)'
            siteContent.style.visibility ='visible'   
        }, 200);
    }

    loadingMessage.innerHTML = `Carregamento em processo, por favor aguarde`
    progressBar.innerHTML = cnt+'%'
    
    cnt++
}, 5);



