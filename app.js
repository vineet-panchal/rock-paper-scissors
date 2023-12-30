const playerText = document.querySelector("#playerTxt");
const computerText = document.querySelector("#computerTxt");
const resultText = document.querySelector("#resultTxt");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(Btn => Btn.addEventListener("click", () => {
    player = Btn.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2: 
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner() {
    if (player === computer) {
        return "It's a tie! Try again.";
    } else if ((player === "Rock" && computer === "Scissors") || (player === "Scissors" && computer === "Paper") || (player === "Paper" && computer === "Rock")) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    return result;
}