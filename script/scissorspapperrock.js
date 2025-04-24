let playerScore = 0;
let computerScore = 0;
let nama = prompt('siapa nama kamu ?')

if (nama === null || nama === '') {
    alert('Nama tidak boleh kosong');
    window.location.reload();}

    

const namaPlayer = document.getElementById('nama-player');
namaPlayer.textContent = nama;


function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    
    switch (player) {
        case 'rock':
            if (computer === 'scissors') {
                playerScore++;
                return "You win! Rock crushes scissors!";
            } else {
                computerScore++;
                return "Computer wins! Paper covers rock!";
            }
            break;
            
        case 'paper':
            if (computer === 'rock') {
                playerScore++;
                return "You win! Paper covers rock!";
            } else {
                computerScore++;
                return "Computer wins! Scissors cut paper!";
            }
            break;
            
        case 'scissors':
            if (computer === 'paper') {
                playerScore++;
                return "You win! Scissors cut paper!";
            } else {
                computerScore++;
                return "Computer wins! Rock crushes scissors!";
            }
            break;
            
        default:
            return "Invalid choice!";
    }
}


// kok gak bisa ya ?
localStorage.setItem('playerScore', playerScore);
localStorage.setItem('computerScore', computerScore);


function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = determineWinner(playerChoice, computerChoice);
    
    document.getElementById('result').textContent = 
        `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    if (playerScore === 5) {
        alert('You win the game!');
        window.location.reload();
    } else if (computerScore === 5) {
        alert('Computer wins the game!');
        window.location.reload();
    }
}
