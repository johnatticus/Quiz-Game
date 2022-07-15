// any global variables needed
// var questionsIndex = 0;

// var time = questions.length * 15;
// for keeping a timer and score?
// var timerId;


// start screen variables
var startScreen = document.getElementById("startscreen");
var startBtn = document.getElementById("start");

// quiz variables
var quizBegin = document.getElementById("quizarea");
var questionEl = document.getElementById("question")
var answerChoices = document.getElementById("answers") // this may be redundant due to 4 answer buttons used

// var for the four answer buttons
var answerButton1 = document.getElementById("answer-button1")
var answerButton2 = document.getElementById("answer-button2")
var answerButton3 = document.getElementById("answer-button3")
var answerButton4 = document.getElementById("answer-button4")

// next question button
var nextQuestionButton = document.getElementById("next-question")

// show YES or NO when a answer choice is picked
var yesNo = document.getElementById("yes-no")

// time variable
var timerArea = document.getElementById("timeleft");

// high score vars
var yourScore = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var highScores = document.getElementById("high-scores")
var highScoreList = document.getElementById("highscores")
// var backToStart = document.getElementById("show-start-screen")

// view post game screen
var scoreScreen = document.getElementById("score-screen");
// var resetGame = document.getElementById("reset")

// variable to make sure question index starts at 0 so the quiz begins with the first question in array
var currentQuestionIndex = 0
//creating a let to define later as the current question as the user goes through them

// timer variable with total time value
var timeLeft = 45;
var myScore



// questions for the quiz
var questions = [
    {
        question: "What is Gonzo's preferred nickname?",
        choices: ["Nana", "Pingo", "Nano", "The Gonz"],
        answer: "Nano"
    },
    {
        question: "What is Gonzo's favorite food?",
        choices: ["Blue Buffalo Dry Food", "Fresh Pet", "Chocolate Cake", "String Cheese"],
        answer: "Fresh Pet"
    },
    {
        question: "What does Gonzo like most?",
        choices: ["Fetching", "Fighting", "Barking", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "Who can defeat Gonzo?",
        choices: ["No One", "Mike Tyson", "Liam Neeson", "His Vet"],
        answer: "No One"
    },
]

// variable for the current question
let currentQuestion = questions[currentQuestionIndex]

// listen for the user to click 'Start' to begin quiz
startBtn.addEventListener('click', beginQuiz);

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
    if (currentQuestionIndex >= 4) {
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
        timeLeft -= 15
    }
    if (this.textContent === questions[currentQuestionIndex].answer) [
        console.log("CORRECT")
    ]
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
    finalScore()
    console.log(timeLeft)
    clearTimeout(myTimer)
    quizBegin.classList.add('hide')
    scoreScreen.classList.remove('hide')
    
}

// function to write a final score. does not work unfortunately
function finalScore() {
    localStorage.setItem("finalTimeScore", JSON.stringify(timeLeft));
    var myScore = JSON.parse(localStorage.getItem("finalTimeScore"))
    yourScore.textContent = myScore

}

// function to create the score and push it to high score
function addHighScore() {

}

function showHighScores() {
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