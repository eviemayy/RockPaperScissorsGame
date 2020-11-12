//scopeing everything inside this function
const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
        });

        //random computer assignment
        const computerOptions = ['rock', 'paper', 'scissors'];


        //rock, paper, or scissors?
        options.forEach(option => {
            option.addEventListener('click', function () {

                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Update images
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //update Text
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = 'It\'s a Tie!';
            return;
        }
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                checkForWinner(pScore, cScore);
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                checkForWinner(pScore, cScore);
                return;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                checkForWinner(pScore, cScore);
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                checkForWinner(pScore, cScore);
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                checkForWinner(pScore, cScore);
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                checkForWinner(pScore, cScore);
                return;
            }
        }
    }

    const checkForWinner = (pScore, cScore) => {
        const winner = document.querySelector('.winner');
        if (pScore === 3) {
            winner.textContent = 'Player Wins! Game Over';
        }
        if (cScore === 3) {
            winner.textContent = 'Computer Wins! Game Over';
        }
        else {
            return;
        }

        setTimeout(() => {
            endGame();
        }, 2000);
    }

    const endGame = () => {

        pScore = 0;
        cScore = 0;
        updateScore();

        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        introScreen.classList.remove('fadeOut');
        match.classList.remove('fadeIn');
        introScreen.classList.add('fadeIn');
        match.classList.add('fadeOut');
    }

    //call all the inner functions
    startGame();
    playMatch();

}

//start the "big" function
game();