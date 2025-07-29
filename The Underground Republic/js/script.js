const audio = document.getElementById('background-audio');
const button = document.getElementById('audio-toggle');

function toggleAudio() {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
        button.textContent = '🔊';
    } else {
        audio.muted = true;
        button.textContent = '🔇';
    }
}
