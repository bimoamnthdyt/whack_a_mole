const land = document.querySelectorAll('.land');
const mouse = document.querySelectorAll('.mouse');
const scoreBoard = document.querySelector('.score-board');
const pop = document.querySelector('#pop');

let landBefore;
let finished;
let score;

function randomLand(land) {
    const l = Math.floor(Math.random() * land.length);
    const lRandom = land[l];
    if ( lRandom == landBefore) {
        randomLand(land);
    }

    landBefore = lRandom
    return lRandom;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function appearMouse() {
    const lRandom = randomLand(land);
    const wRandom = randomTime(400,800);
    lRandom.classList.add('appear');

    setTimeout(() => {
        lRandom.classList.remove('appear');
        if (!finished) {  
            appearMouse();
        }
    }, wRandom);
}

function start() {
    finished = false;
    score = 0;
    scoreBoard.textContent = 0;
    appearMouse();
    setTimeout(() => {
        finished = true;
    },15000)
}

function blow() {
    score++;
    this.parentNode.classList.remove('appear');
    pop.play();
    scoreBoard.textContent = score;


}

mouse.forEach(m => {
    m.addEventListener('click', blow);
});