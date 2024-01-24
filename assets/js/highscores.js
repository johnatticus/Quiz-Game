function showHighScores() {

    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // sort highscores by score property in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    // create li tag for each high score
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + ": " + score.score;

    // display on page
    let olEl = document.getElementById("high-score-list");
    olEl.appendChild(liTag);
  });

    highScores.classList.remove('hide')
    quizBegin.classList.add('hide')
    scoreScreen.classList.add('hide')
    startScreen.classList.add('hide')
}

showHighScores()