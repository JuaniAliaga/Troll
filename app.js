const btn = document.querySelector("button")
const video = document.querySelector("#video")


btn.addEventListener("click", () =>{
    
    if (video.paused) {
        video.src = "./img/josh-hutcherson-meme.mp4"
        video.play()
    }else{
        video.src = ""
    }
})