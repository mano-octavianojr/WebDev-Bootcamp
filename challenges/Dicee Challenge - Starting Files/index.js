function generateNumber() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    return randomNumber1;
}

var numb1 = generateNumber();
var image1 = 'images/dice' + numb1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', image1);

var numb2 = generateNumber();
var image2 = 'images/dice' + numb2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', image2);

if (numb1 > numb2) {
    document.querySelector('h1').textContent = 'Player 1 Wins';
}
else if (numb1 < numb2) {
    document.querySelector('h1').textContent = 'Player 2 Wins';
}
else {
    document.querySelector('h1').textContent = 'Draw';
}

