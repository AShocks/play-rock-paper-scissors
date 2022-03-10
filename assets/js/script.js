/* declare constants for DOM elements and possible choices */

const buttons = document.getElementsByClassName("game-option");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementsById("computer-score");
const playerImage = document.getElementsById("player-image");
const computerImage = document.getElementsById("computer-image");
const messages = document.getElementsById("message");
const choices = ["rock","paper","scissors"];

/* Add event listener to the buttons */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

/* The main game function */

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices(playerChoice);

    let computerChoice = Math.floor(Math.random()) * 3;

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices(computerChoice);

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

}