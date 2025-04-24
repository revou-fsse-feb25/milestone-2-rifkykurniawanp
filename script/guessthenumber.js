       // Game variables
       let targetNumber;
       let attempts;
       
       // Initialize the game
       function initGame() {
           targetNumber = Math.floor(Math.random() * 100) + 1;
           attempts = 0;
           document.getElementById('attempts').textContent = 'Attempts: 0';
           document.getElementById('message').textContent = '';
           document.getElementById('guessInput').value = '';
           console.log('Target number is: ' + targetNumber); // For debugging
       }
       
       // Check the user's guess
       function checkGuess() {
           const guessInput = document.getElementById('guessInput');
           const message = document.getElementById('message');
           const attemptsDisplay = document.getElementById('attempts');
           
           const userGuess = parseInt(guessInput.value);
           
           if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
               message.textContent = 'Please enter a valid number between 1 and 100!';
               message.style.color = 'red';
               return;
           }
           
           attempts++;
           attemptsDisplay.textContent = `Attempts: ${attempts}`;
           if (attempts > 8) {
               message.textContent = 'You have reached the maximum number of attempts. Game over!';
               message.style.color = 'red';
               guessInput.disabled = true;
               return;
           }
           
           if (userGuess === targetNumber) {
               message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
               message.style.color = 'green';
               guessInput.disabled = true;
           } else if (userGuess < targetNumber) {
               message.textContent = 'Too low! Try a higher number.';
               message.style.color = 'red';
           } else {
               message.textContent = 'Too high! Try a lower number.';
               message.style.color = 'blue';
           }
           
           guessInput.value = '';
           guessInput.focus();
       }
       
       // Reset the game
       function resetGame() {
           initGame();
           document.getElementById('guessInput').disabled = false;
       }
       
       // Start the game when the page loads
       window.onload = initGame;
       
       // Allow pressing Enter to submit guess
       document.getElementById('guessInput').addEventListener('keypress', function(e) {
           if (e.key === 'Enter') {
               checkGuess();
           }
       });