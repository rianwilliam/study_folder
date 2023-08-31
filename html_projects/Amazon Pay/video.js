let play_video = document.querySelector(".play_video");
let legenda_video1 = document.querySelector(".legenda_video1");
let legenda_video2 = document.querySelector(".legenda_video2")
let video = document.querySelector(".video")
let interruptor = 0;
let body = document.getElementById('body')

play_video.addEventListener('click', function(){
    if (interruptor === 0) {
        play_video.classList.add("video_ligado");
        legenda_video1.classList.add("off")
        legenda_video2.classList.add("on")
        video.classList.add('video_on')
        interruptor = 1;

    }
    else {
        play_video.classList.remove("video_ligado");
        legenda_video1.classList.remove("off")
        legenda_video2.classList.remove("on")
        video.classList.remove("video_on")
        interruptor = 0
    }
})