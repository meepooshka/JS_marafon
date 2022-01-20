const board = document.querySelector("#board");
const SQAUARES_NUMBER = 500;
const colors = ["#E74C3C", "#5499C7 ", "#F4D03F ", "#8E44AD ", "#27AE60", "#85C1E9", "#D35400"];


for (let i=0; i < SQAUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    board.append(square);
}

function setColor (element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor (element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #1d1d1d";
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}