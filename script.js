//get user choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Invalid choice!');
    }
  };
//get computer choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
//see who wins -> check player vs game
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You won with a secret cheat code!';
    }
    
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
//show who wins -> users-> display score
const playGame = () => {
    const userChoice = getUserChoice('rock'); 
    const computerChoice = getComputerChoice();
    
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  
  playGame();

