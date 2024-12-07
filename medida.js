document.getElementById("playAudio").onclick = function() {
    let audio = document.getElementById("audioFile");
    audio.paused ? audio.play() : audio.pause();
};