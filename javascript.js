let gameControlSection = document.querySelector(".game-control");
let controlBtn = document.querySelector(".game-control button");

let allBtn = document.querySelector(".button-container")

let msg = document.querySelector(".msg")

let playerLife = document.querySelector(".player-life");
let computerLife = document.querySelector(".computer-life");

let playerPoint;
let computerPoint;

let computerLifeWidth;
let playerLifeWidth;

let playerLifeMinus;
let computerLifeMinus;

controlBtn.addEventListener("click", () => {
    gameControlSection.style.opacity = '0';
    controlBtn.disabled = true;
    controlBtn.style.cursor = "default";
    allBtn.style.zIndex = '2';

    msg.textContent = "";

    playerPoint = 5;
    computerPoint = 5;

    playerLife.style.width = "100%";
    computerLife.style.width = "100%";

    playerLifeWidth = window.getComputedStyle(playerLife).getPropertyValue("width").slice(0, -2);
    computerLifeWidth = window.getComputedStyle(playerLife).getPropertyValue("width").slice(0, -2);

    playerLifeMinus = computerLifeWidth / 5;
    computerLifeMinus = computerLifeWidth / 5;

    playerLife.style.borderRadius = "10px";
    computerLife.style.borderRadius = "10px";
})

let options = ["rock", "paper", "scissor"];

allBtn.addEventListener("click", playGame);

function playGame(event) {
    if (playerPoint > 0 && computerPoint > 0){
        let computerChoice = options[Math.floor(Math.random() * 3)];
        let playerChoice = event.target.id;
    
        if (playerChoice == computerChoice) {
            msg.textContent = "IT'S A TIE";
        } else if (playerChoice == "rock" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "scissor" ||
        playerChoice == "scissor" && computerChoice == "rock") {
            --playerPoint;
            displayWinner("GALLUP");
            roundCorner(playerLife);
            playerLife.style.width = `${playerLifeWidth - playerLifeMinus}px`;
            playerLifeWidth -= playerLifeMinus;
        } else if (playerChoice == "rock" && computerChoice == "scissor" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissor" && computerChoice == "paper") {
            --computerPoint;
            displayWinner("YOU");
            roundCorner(computerLife);
            computerLife.style.width = `${computerLifeWidth - computerLifeMinus}px`;
            computerLifeWidth -= computerLifeMinus;
        }
    }
}

function roundCorner(life) {
    life.style.borderRadius = "0";
    life.style.borderTopLeftRadius = "10px";
    life.style.borderBottomLeftRadius = "10px";
}

function displayWinner(winner) {
    if (playerPoint === 0 || computerPoint === 0) {
        msg.textContent = `${winner} WON FINALLY`;
        resetGame();
    }
    else msg.textContent = `${winner} WON THIS ROUND`;
}

function resetGame() {
    setTimeout(function() {
        gameControlSection.style.opacity = '1';
        controlBtn.disabled = false;
        controlBtn.style.cursor = "pointer";
    }, 3000);
    controlBtn.textContent = "PLAY AGAIN";
    allBtn.style.zIndex = '0';
}