const cards = document.querySelectorAll('.memory-card');
const memoryTimer = document.getElementById("memoryTimer");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let gameScore = 0;
let timeLeft = 30;

const timerInterval = setInterval(() => {
    timeLeft--;
    memoryTimer.textContent = `Time: ${timeLeft}s`;

    if (timeLeft === 0) {
        alert('Waktu Anda Habis');
        window.location.reload();
      }   
    }, 1000)


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

// fungsi untuk cek jika 2 kartu cocok
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  gameScore++;
  if (gameScore === 8) {
    alert('Selamat kamu menang');
    window.location.reload();
  }
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

// fungsi untuk reset jika 2 kartu tidak cocok
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// fungsi mengacak posisi kartu
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));