function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

// Add an event listener for the reset score
// button using .addEventListener
document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    resetScore();
  });