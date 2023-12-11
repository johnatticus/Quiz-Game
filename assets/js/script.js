// start screen variables
let startScreen = document.getElementById("startscreen");
let startBtn = document.getElementById("start-button");

// quiz variables
let quizBegin = document.getElementById("quizarea");
let questionEl = document.getElementById("question")

// var for the four answer buttons
let answerButton1 = document.getElementById("answer-button1")
let answerButton2 = document.getElementById("answer-button2")
let answerButton3 = document.getElementById("answer-button3")
let answerButton4 = document.getElementById("answer-button4")

// show YES or NO when a answer choice is picked
let yesNo = document.getElementById("yes-no")

// sound fx
let soundRight = new Audio("assets/sounds/positive.mp3");
let soundWrong = new Audio("assets/sounds/negative.mp3");

// time variable
let timerArea = document.getElementById("timeleft");

// high score vars
let yourScore = document.getElementById("final-score");
let initialsEl = document.getElementById("initials");
let submitBtn = document.getElementById("submit");
let highScores = document.getElementById("high-scores")
let highScoreList = document.getElementById("highscores")
// var backToStart = document.getElementById("show-start-screen")

// view post game screen
let scoreScreen = document.getElementById("score-screen");
// var resetGame = document.getElementById("reset")

// variable to make sure question index starts at 0 so the quiz begins with the first question in array
let currentQuestionIndex = 0
//creating a let to define later as the current question as the user goes through them

// timer variable with total time value
let timeLeft = 45;
let myScore



// questions for the quiz
let questions = [
    {
        question: "What is Gonzo's preferred nickname?",
        choices: ["Nana", "Pingo", "Nano", "The Gonz"],
        answer: "Nano"
    },
    {
        question: "What is Gonzo's favorite food?",
        choices: ["Blue Buffalo Dry Food", "Fresh Pet", "Chocolate Cake", "String Cheese"],
        answer: "String Cheese"
    },
    {
        question: "Who is Gonzo's favorite professional wrestler?",
        choices: ["Jinder Mahal", "Stone Cold Steve Austin", "Brock Lesnar", "The Rock"],
        answer: "Brock Lesnar"
    },
    {
        question: "What does Gonzo like most?",
        choices: ["Fetching", "Fighting", "Barking", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "Who can defeat Gonzo?",
        choices: ["No One", "Mike Tyson", "Liam Neeson", "His Vet"],
        answer: "His Vet"
    },
]

// variable for the current question
let currentQuestion = questions[currentQuestionIndex]

// listen for the user to click 'Start' to begin quiz
startBtn.addEventListener('click', beginQuiz);

submitBtn.addEventListener('click', addHighScore);

// event listener for viewing high score list
highScoreList.addEventListener('click', showHighScores);

//event listener for going back to the start screen
backToStart.addEventListener('click', showStartScreen);

resetGame.addEventListener('click', showStartScreen);

// function to start the timer and bring up the first question
// hides the start area aka startScreen and un-hides the quest area aka quizBegin
// indexes the first question in array to a currentQuestionIndex
// moves to next function that writes the current question to the html
function beginQuiz() {
    startTimer()
    console.log("Started")
    startScreen.classList.add('hide')
    quizBegin.classList.remove('hide')
    currentQuestion = questions[currentQuestionIndex]
    showQuestion(currentQuestion)
}

// shows the current question, which is indexed, and its possible answers
function showQuestion(question) {
    console.log(currentQuestionIndex)
    console.log(question)
    // if there are no questions left go to endQuiz function
    if (currentQuestionIndex >= 5) {
        endQuiz();
    // otherwise, run through all the questions and answers
    } else {
    answerButton1.textContent = question.choices[0]
    answerButton2.textContent = question.choices[1]
    answerButton3.textContent = question.choices[2]
    answerButton4.textContent = question.choices[3]
    questionEl.textContent = question.question
    answerButton1.onclick = questionClick
    answerButton2.onclick = questionClick
    answerButton3.onclick = questionClick
    answerButton4.onclick = questionClick
    }
}

// function to determine is the right or wrong answer was picked
function questionClick() {
    if (this.textContent !== questions[currentQuestionIndex].answer) {
        console.log("INCORRECT")
        timeLeft -= 10
        soundWrong.play();
    }
    if (this.textContent === questions[currentQuestionIndex].answer) {
        console.log("CORRECT")
        soundRight.play();
    }
    currentQuestionIndex++
    showQuestion(questions[currentQuestionIndex])
    console.log("working")
}    

// function to start a timer count
function startTimer() {
    // Sets timer
    myTimer = setInterval(function() {
    timeLeft--;
    if (timeLeft >= 0) {
        timerArea.textContent = timeLeft;
    }
    if (timeLeft <= 0) {
        endQuiz()
    }
        }, 1000);
}

// function to run when quiz is over
// first the timer is stopped
// the quiz area is set to hidden and the score screen is set to display
function endQuiz() {
    console.log(timeLeft)
    clearTimeout(myTimer)
    addHighScore()
    quizBegin.classList.add('hide')
    scoreScreen.classList.remove('hide')

    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = timeLeft;

    
}

// function to write a final score. does not work unfortunately
// function finalScore() {
//     localStorage.setItem("finalTimeScore", JSON.stringify(timeLeft));
//     var myScore = JSON.parse(localStorage.getItem("finalTimeScore"))
//     yourScore.textContent = myScore

// }

// function to create the score and push it to high score
function addHighScore() {
    // event.preventDefault();

    let initialsText = initialsEl.value.trim();

    if (initialsText === "") {
        return;
      }

    if (initialsText !== "") {
      let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    let newHighScore = {
        score: timeLeft,
        initials: initialsText
      };
  
      // save to localstorage
      highscores.push(newHighScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
    //   window.location.href = "index.html";

      showHighScores();
    }
}

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

function showStartScreen() {
    highScores.classList.add('hide')
    quizBegin.classList.add('hide')
    scoreScreen.classList.add('hide')
    startScreen.classList.remove('hide')
}