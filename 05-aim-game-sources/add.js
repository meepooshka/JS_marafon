const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
let time = 0;
let score = 0;
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const colors = ["#E74C3C", "#5499C7 ", "#F4D03F ", "#8E44AD ", "#27AE60", "#85C1E9", "#D35400"];

startBtn.addEventListener("click", (event) => {
     event.preventDefault();
     screens[0].classList.add("up");
});


timeList.addEventListener("click", event => {

    if (event.target.classList.contains("time-btn")){
        time = parseInt(event.target.getAttribute("data-time"));
        screens[1].classList.add("up");
        startGame();
    }
});

board.addEventListener("click", event => {
    if (event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createRandomCircle();
        
    }
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    console.log("123");    //
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime (value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame(){
    timeEl.parentNode.classList.add("hide");
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
    clearTimeout(decreaseTime);  //
}

function createRandomCircle () {
    const circle = document.createElement("div");
    circle.style.background = setColor(circle);
    const size = getRandomNumber(10,60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
}


function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function setColor (element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
}

