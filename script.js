//get username 
let userName = prompt("What is your name?");
document.getElementById("userName").textContent = userName;
let userChoiceImg = document.getElementById('userChoiceImg')
let computerChoiceImg = document.getElementById('computerChoiceImg')

let computerChoice
let userChoice


//get computer choice
let  getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber)
  switch (randomNumber) {
    case 0:
      computerChoiceImg.src= '/imgs/rock.png';
      computerChoice='rock';
      break
    case 1:
    computerChoiceImg.src = '/imgs/paper.png';
     computerChoice='paper';
     break
    case 2:
      computerChoiceImg.src = '/imgs/scissors.png';
      computerChoice='scissors';
      break
  }
};

//get user choice

const updateUserChoice = (choice) => {
  
  if (choice === 'rock') {
    userChoiceImg.src  = '/imgs/rock.png';
  } else if (choice === 'paper') {
    userChoiceImg.src  = '/imgs/paper.png';
  } else if (choice === 'scissors') {
    userChoiceImg.src  = '/imgs/scissors.png';
  }
};


//see who wins -> check player vs game
const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
  }

  if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
  }

  if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
  }
};


function playGame(userChoice){
 updateUserChoice(userChoice)
 getComputerChoice()
 determineWinner(userChoice, computerChoice)

}