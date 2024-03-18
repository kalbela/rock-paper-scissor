let gameControlSection = document.querySelector(".game-control");
let controlBtn = document.querySelector(".game-control button");

let allBtn = document.querySelector(".button-container")

controlBtn.addEventListener("click", () => {
    gameControlSection.style.opacity = '0';
    allBtn.style.zIndex = '2';
})