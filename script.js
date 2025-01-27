//get username 
let userName = prompt("What is your name?");
document.getElementById("userName").textContent = userName;


//get user choice
let userChoice = '';
const updateUserChoice = (choice) => {
    let imgSrc = '';
    if (choice === 'rock') {
      imgSrc = '/imgs/rock.png';
    } else if (choice === 'paper') {
      imgSrc = '/imgs/paper.png';
    } else if (choice === 'scissors') {
      imgSrc = '/imgs/scissors.png';
    }
    userChoiceImg.src = imgSrc;
  };

//get computer choice
const updateComputerChoice = (choice) => {
  let imgSrc = '';
  if (choice === 'rock') {
    imgSrc = '/imgs/rock.png';
  } else if (choice === 'paper') {
    imgSrc = '/imgs/paper.png';
  } else if (choice === 'scissors') {
    imgSrc = '/imgs/scissors.png';
  }
  computerChoiceImg.src = imgSrc;
};

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


playGame();
