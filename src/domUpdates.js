import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';
import $ from 'jquery';

let domUpdates = {

  displayQuestionSolvePopup(game) {
     $('.popup').append(
      `<section class='question-popup'> 
          <h2 class='card'>Hint: ${game.currentPuzzle.description}</h2>
          <form class='solve-form'> 
            <input class='answer-input' placeholder='Type your answer here'>
            <button class='answer-submit'>Submit</button>
          </form>
        </section>`
        )
  },

  hideAnswer(game) {
    let answer = game.currentPuzzle.correct_answer.split('');
    answer.forEach((letter) => {
      if (letter === ' ' || '-' || '&') {
        $('.answer-display').append(`<p class = 'letter no-border'>${letter.toUpperCase()}</p>`);
      } else {
        $('.answer-display').append(`<p class = 'letter hidden'>${letter.toUpperCase()}</p>`);
      }
    })
  },

  disableQuit() {
    $('.quit-button').prop('disabled', true);
  },

  displayName() {
    $('.box-name').each((i, name) => {
      $(name).text($('.player-name-input').eq(i).val());
    });
  },

  displayCategoryName(game) {
    $('.category').text(game.currentPuzzle.category.toUpperCase());
  },

// displayScore() {

// },

  startGame(game, wheel) {
    game.createPlayer($('.player-name-input').eq(0).val(), 
      $('.player-name-input').eq(1).val(), 
      $('.player-name-input').eq(2).val());
    game.beginGame(game);
    wheel.getRandomWheel();
  },

  checkUserGuess(game) {
    let answer = game.currentPuzzle.correct_answer.toUpperCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let currentLetter = ($('#js-cons-input').val().toUpperCase());
    answer.forEach(letter => {
    // console.log(letter);
    if(letter === currentLetter) {
      $('.letter').css('color', 'white' );
     console.log(currentLetter);

    }
    //find letter at index of answer array that matches the currentLetter at it's index and then turn it into css property white
      //if user guesses correct letter it will toggle the letter to display on dom
      //push the current lettter to the guessed bank within puzzle class
      //maybe use .each() & .eq() to iterate through the answer and match it with currentLetter
    })
  }
}

export default domUpdates;