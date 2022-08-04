'use strict';

// 70. PROJECT #1 Guess My Number!
/*
console.log(document.querySelector('.message').textContent); // Najpierw wybieramy element należący do klasy message, następnie odczytujemy jego wartość tekstu

// 73. Selecting and Manipulating Elements

document.querySelector('.message').textContent = '🎉 Correct Number!'; //Zmiana wartości tekstu wybranej klasy
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // W przypadku input field musimy zmodyfikować argument o nazwie value
*/

// 73. Handling Click Events
// 74. Implementing the Game Logic
// 75. Manipulating CSS Styles
// 76. Coding Challenge #1
// 77. Implementing Highscores
// 78. Refactoring Our Code: The DRY Principle - DRY Don't Repeat Yourself

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Losowa liczba z zakresu 0-1, pomnożona * 20, pozbawiona cyfr po przecinku, dodane 1
let score = 20; // Nasz wynik
let highscore = 0;

const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // Wybieramy obiekt klasy check, dodajemy zdarzenie które JS ma wysłuchiwać (click), a następnie określamy co ma się wydarzyć
  const guess = Number(document.querySelector('.guess').value); // Domyślnie wszystko co trafia do nas od użytkownika z pola input ma typ string
  console.log(guess);

  // When there is no input
  if (!guess) {
    // Jeśli wartość guess to 0 czyli false kod się wykona, żadna wartość nie będzie wprowadzona
    // document.querySelector('.message').textContent = '⛔ No number!';
    dispalyMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    dispalyMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // Wszystkie zapisywane w CSS dwuczłonowe właściwości w JS zapisujey z camelCase a wartość zapisujemy stringiem

    document.querySelector('.number').style.width = '30rem'; // Zmieniając właściwości CSS dopisujemy do wybranego elementu argument o nazwie style = ... NIE ZMIENIAMY PLIKU CSS

    if (score > highscore) {
      highscore = score; // Nowy najwyższy wynik
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      dispalyMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost!';
      dispalyMessage('💥 You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // Dzięki Refaktoryzacji pozbyliśmy się zbędnego kodu
  // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

// Again functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  dispalyMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
