import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates.js';
import Player from './Player.js';

class Wheel {
  constructor() {
    this.values = [];
    this.currentIndex = [];
  }

  getRandomWheel() {
    let random = data.wheel[Math.floor(Math.random() * data.wheel.length)];
    console.log('randomWheelTest: ', random);
    if (random === 'LOSE A TURN') {
      domUpdates.displayLoseTurn(this);
      // iterates to next player
    }
    // if (this.currentIndex === 'BANKRUPT') {
      //   // iterates to next player
      //   player.roundScore === 0;
      //   domUpdates.diplayBankrupt()
      // } 
      // else {
        // display currentIndex wheel value
        // domUpdates.displayWheelValue();
      }
      // }
      
      // this.currentIndex.push(random);
  // getWheelValue() {

  //   //clean data to grab wheel values
  // }

}

export default Wheel;