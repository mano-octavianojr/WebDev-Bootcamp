var drumNumb = document.querySelectorAll('.drum').length;

var counter = 0;

while (counter < drumNumb) {
    var drums = document.querySelectorAll('.drum')[counter];
    drums.addEventListener('click', function () {

        sound(this.textContent);
        buttonAnimation(this.innerHTML);
    });

    counter++;
}

document.addEventListener('keydown', function (event) {
    var character = event.code.substring(event.code.length - 1).toLowerCase();
    sound(character);
    buttonAnimation(event.key);
});

function buttonAnimation(current_key) {

    var active = document.querySelector('.' + current_key);

    active.classList.add('pressed');

    setTimeout(() => {
        active.classList.remove('pressed');
    }, 100);

}

function sound(drum_sound) {

    var audio = null;

    if (drum_sound === 'w') {
        audio = new Audio('sounds/crash.mp3');
        audio.play();
    } else if (drum_sound === 'a') {
        audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    } else if (drum_sound === 's') {
        audio = new Audio('sounds/snare.mp3');
        audio.play();
    } else if (drum_sound === 'd') {
        audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    } else if (drum_sound === 'j') {
        audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    } else if (drum_sound === 'k') {
        audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    } else if (drum_sound === 'l') {
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }


}
