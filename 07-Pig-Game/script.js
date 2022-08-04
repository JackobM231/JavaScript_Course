'use strict';

// 82. PROJECT #3: Pig Game
// 83. Rolling the Dice
// 84. Switching the Active Player
// 85. Holding Current Score
// 86. Resetting the Game

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// Sposoby na wybranie elementu po jego id
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing; //  Musimy zadeklarować zmienne poza funkcją by były dostępne w poza nią

// Starting conditions
const init = function () {
  scores = [0, 0]; // Główne wyniki
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Wyzerować wyniki graczy, zdobyte punkty oraz style
  for (let i = 0; i < scores.length; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
    document.querySelector(`.player--${i}`).classList.remove('player--winner');
    document.querySelector(`.player--${i}`).classList.remove('player--active');
  }

  diceEl.classList.add('hidden');
  // Ustawić styl active na aktywnym graczu
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
init();

// Switch to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // Jeśli aktywny gracz to gracz 0 zmień wartość na 1
  player0El.classList.toggle('player--active'); // Sprawdza czy element posiada tę klasę, jeżeli posiada to ją usuwa, w przeciwnym razie dodaje mu ją
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Genereting a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is <= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
