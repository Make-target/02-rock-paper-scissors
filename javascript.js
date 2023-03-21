playerName = prompt("Your name?: ");
function cleanString(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function getComputerChoice() {
    // Generate random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    // Based on a random number, determine what the computer played
    if (randomNumber === 1) {
        computerChoice = "Paper";
    }
    else if (randomNumber === 2) {
        computerChoice = "Rock";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}
// Set up rules for the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a draw! Both players selected: " + computerSelection + ".";
    } else if (
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Rock" && computerSelection === "Scissors")
    ) {
        return playerName + " won! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "Computer won! " + computerSelection + " beats " + playerSelection + ".";
    }
}
// Show the round winner and count scores of the players
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Whay's your choice?: ");
        playerChoice = cleanString(playerChoice);
        let roundResult = playRound(playerChoice, getComputerChoice());
        if (roundResult.charAt(0) === playerName.charAt(0)) {
            playerScore++;
        }
        if (roundResult.charAt(0) === "C") {
            computerScore++;
        }
        console.log(roundResult);
        console.log(playerName + "'s score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
}
game();