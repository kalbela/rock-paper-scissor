let gameControlSection = document.querySelector(".game-control");
let controlBtn = document.querySelector(".game-control button");

controlBtn.addEventListener("click", () => {
    gameControlSection.style.opacity = '0';
    gameControlSection.style.zIndex = '-1';
})