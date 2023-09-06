'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

const secretNumber = Math.ceil(Math.random() * 20)
// document.querySelector('.number').textContent = secretNumber
let score = 20

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!'
    //if user wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!'
    document.body.style.backgroundColor = '#60b347'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.number').style.width = '30rem'
    //guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!'
      score--
      document.querySelector('.score').textContent = score
      //guess too low
    } else {
      document.querySelector('.message').textContent = 'You lose!'
      document.querySelector('.score').textContent = 0
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lose!'
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', () => {
  document.body.style.backgroundColor = '#222'
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = 20
  document.querySelector('.guess').value = ''
})
