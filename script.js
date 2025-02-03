// Get username from the user using a prompt
let userName = prompt("What is your name?");

// Display the entered username in an HTML element with the ID "userName"
document.getElementById("userName").textContent = userName;

// Get references to the user and computer choice images from the HTML
let userChoiceImg = document.getElementById("userChoiceImg");
let computerChoiceImg = document.getElementById("computerChoiceImg");

// Declare variables to store the user’s and computer’s choices
let computerChoice;
let userChoice;

// Initialize user and computer scores
let userScore = 0;
let computerScore = 0;

// Function to update the scoreboard with the latest scores
function updateScoreboard() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// Function to randomly generate the computer’s choice (rock, paper, or scissors)
let getComputerChoice = () => {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Use a switch statement to assign the choice based on the random number
    switch (randomNumber) {
        case 0:
            computerChoiceImg.src = "imgs/rock.png"; // Update image to rock
            computerChoice = "rock"; // Set computer choice to "rock"
            break;
        case 1:
            computerChoiceImg.src = "imgs/paper.png"; // Update image to paper
            computerChoice = "paper"; // Set computer choice to "paper"
            break;
        case 2:
            computerChoiceImg.src = "imgs/scissors.png"; // Update image to scissors
            computerChoice = "scissors"; // Set computer choice to "scissors"
            break;
    }
};

// Function to update the user's choice and change the image
const updateUserChoice = (choice) => {
    userChoice = choice; // Store the user's choice
    userChoiceImg.src = `imgs/${choice}.png`; // Update the image based on the choice
};

// Function to determine the winner of the round
const determineWinner = (userChoice, computerChoice) => {
    // If both choices are the same, it's a tie
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    // Check if the user wins (rock beats scissors, paper beats rock, scissors beat paper)
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++; // Increase user's score
        return `${userName} wins`; // Return a message that the user won
    } else {
        computerScore++; // Increase computer's score
        return "Computer wins"; // Return a message that the computer won
    }
};

// Function to play the game when the user makes a choice
function playGame(userChoice) {
    updateUserChoice(userChoice); // Update user choice and image
    getComputerChoice(); // Get a random choice for the computer
    let result = determineWinner(userChoice, computerChoice); // Determine the winner

    updateScoreboard(); // Update the scoreboard with new scores

    // Check if the user or computer has reached 5 points to win the game
    if (userScore === 5) {
        alert(`${userName} wins the game`); // Show alert if user wins
        resetGame(); // Reset the game
    } else if (computerScore === 5) {
        alert("Computer wins the game"); // Show alert if computer wins
        resetGame(); // Reset the game
    }
}

// Function to reset the game
function resetGame() {
    userScore = 0; // Reset user score to 0
    computerScore = 0; // Reset computer score to 0

    updateScoreboard(); // Update the scoreboard to show reset scores

    // Reset both user and computer choice images to default (paper)
    document.getElementById("userChoiceImg").src = "/imgs/paper.png";
    document.getElementById("computerChoiceImg").src = "/imgs/paper.png";
}
