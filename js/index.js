// *

const $video=document.querySelector("#video")
const $play=document.querySelector("#play")
const $pause=document.querySelector("#pause")
const $backward=document.querySelector("#backward")
const $forward=document.querySelector("#forward")

$play.addEventListener("click",handlePlay)
$pause.addEventListener("click",handlePause)
$backward.addEventListener("click",handleBackward)
$forward.addEventListener("click",handleForward)

function handlePlay(){
    $video.play()
    $play.hidden=true
    $pause.hidden=false
    console.log("Play");
}

function handlePause(){
    $video.pause()
    $pause.hidden=true
    $play.hidden=false
    console.log("pause");
}

function handleBackward(){
    $video.currentTime-=10
    console.log("Retrocede 10 s", $video.currentTime);
}

function handleForward(){
    $video.currentTime+=10
    console.log("Adelanta 10 seg", $video.currentTime);
}


const $progress=document.querySelector("#progress")
$video.addEventListener("loadedmetadata",handleLoaded)
$video.addEventListener("timeupdate",handleTimeUpdate)

function handleLoaded(){
    $progress.max=$video.duration
    console.log("Carga de video",$video.duration);
}

function handleTimeUpdate(){
    $progress.value=$video.currentTime
    console.log("Tiempo actual",$video.currentTime);
}

$progress.addEventListener("input",handleInput)

function handleInput(){
    $video.currentTime=$progress.value
    console.log($progress.value);
}