// Get username
let userName = prompt("What is your name?");
document.getElementById("userName").textContent = userName;

let userChoiceImg = document.getElementById("userChoiceImg");
let computerChoiceImg = document.getElementById("computerChoiceImg");

let computerChoice;
let userChoice;
let userScore = 0;
let computerScore = 0;

// update scoreboard 
function updateScoreboard() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// Get computer choice
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoiceImg.src = "/imgs/rock.png";
            computerChoice = "rock";
            break;
        case 1:
            computerChoiceImg.src = "/imgs/paper.png";
            computerChoice = "paper";
            break;
        case 2:
            computerChoiceImg.src = "/imgs/scissors.png";
            computerChoice = "scissors";
            break;
    }
};

// Get user choice
const updateUserChoice = (choice) => {
    userChoice = choice;
    userChoiceImg.src = `/imgs/${choice}.png`;
};

// Determine winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return `${userName} wins this round!`;
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
};


// Play game
function playGame(userChoice) {
    updateUserChoice(userChoice);
    getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    
    updateScoreboard();

    // Check if someone has won 5 rounds
    if (userScore === 5) {
        alert(`${userName} wins the game! 🎉`);
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the game! 😢");
        resetGame();
    }
}


// Reset game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScoreboard();
}

//make the idle image and make scoreboard bigger 

