// scripts.js

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {
    playerPick('rock')
});

pickPaper.addEventListener('click', function() {
    playerPick('paper')
});

pickScissors.addEventListener('click', function() {
    playerPick('scissors')
});

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
},
    
    computer = {
        score: 0
};

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
    break;
    
    case 'ended':
        newGameBtn.innerText = 'One more time';
    case 'notStarted':
    
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    roundNumber = document.getElementById('js-round-nr'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Please enter your name', 'player name');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }

}

function playerPick(playerPick) {
    //console.log(playerPick);
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'no one';
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else if (winnerIs == 'no one') {
        playerResultElem.innerHTML = "Tie!";
        computerResultElem.innerHTML = "Tie!";
    }
    
    setGamePoints();
    checkWinner();
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;   
}

function checkWinner() {
    if(player.score == 3) {
    setTimeout(function() {
        alert('You\'re a winner');
        endGame();
    }, 1 );        
    } else if(computer.score == 3) {
        setTimeout(function() {
        alert('You\'re a loser');
        endGame();
    }, 1 ); 
    }
}

function endGame() {
    gameState = 'ended';
    setGameElements();
}