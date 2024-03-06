const music = document.getElementById('music');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const muteButton = document.getElementById('mute');

music.volume = 0.020;

playButton.addEventListener('click', function() {
    music.play();
});

pauseButton.addEventListener('click', function() {
    music.pause();
});

muteButton.addEventListener('click', function() {
    if (music.volume === 0) {
        music.volume = 0.020;
    } else {
        music.volume = 0;
    }
});

document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

