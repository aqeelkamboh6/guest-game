'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number ';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 +1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener(
	'click', function(){
		const guess = Number(document.querySelector('.guess').value);
		console.log( guess, typeof guess);
     
		if(!guess){
			document.querySelector('.message').textContent = 'No number';
		}
		else if (guess === secretNumber){
			document.querySelector('.message').textContent = 'Correct Number You Wins!';
			document.querySelector('body').style.backgroundColor ='#60b247';
			document.querySelector('.number').style.width = '30rem';
			document.querySelector('.number').textContent = secretNumber;

			if(score > highScore ){
				highScore = score;
				document.querySelector('.highscore').textContent = highScore;			
			}
		}
		else if(guess > secretNumber){
			if (score > 1) {
			document.querySelector('.message').textContent = 'To high';
			score--;
			document.querySelector('.score').textContent = score;
			}
			else {
				document.querySelector('.message').textContent = 'You Lost the Game';
				document.querySelector('.score').textContent= 0;
				document.querySelector('body').style.backgroundColor ='	#FF0000';
				}
	
		}
		else if(guess < secretNumber){
			if (score > 1) {
			document.querySelector('.message').textContent = 'To Low';
			score--;
			document.querySelector('.score').textContent = score;
			}
			else {
				document.querySelector('.message').textContent = 'You Lost the Game';
				document.querySelector('.score').textContent= 0;
				document.querySelector('body').style.backgroundColor ='#FF0000';
			}
		}
	});

document.querySelector('.again').addEventListener(
	'click', function(){
		console.log('hello shapper');
	
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20 +1);
      document.querySelector('.message').textContent = 'guessing the number.....';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
	});