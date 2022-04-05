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
var answerChoices = document.getElementById("answers")

// var for the four answer buttons
var answerButton1 = document.getElementById("answer-button1")
var answerButton1 = document.getElementById("answer-button2")
var answerButton1 = document.getElementById("answer-button3")
var answerButton1 = document.getElementById("answer-button4")

// show YES or NO when a answer choice is picked
var yesOrNo = document.getElementById("yes-no")

// time variable
var timerArea = document.getElementById("timeleft");

// high score vars
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");

// view high scores
var scoreScreen = document.getElementById("score-screen");

// variable to make sure question index starts at 0 so the quiz begins with the first question in array
var currentQuestionIndex = 0
//creating a let to define later as the current question as the user goes through them
let currentQuestion
// timer variable
// timer countdown variable



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
        choices: ["No One", "Mike Tyson", "Liam Neeson", "A Pitbull"],
        answer: "No One"
    },
]

// listen for the user to click 'Start' to begin quiz
startBtn.addEventListener('click', beginQuiz);


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

// puts the random qauestion picked on the page
function showQuestion(question) {
    questionEl.innerText = question.question
    array.forEach(choices => {
        answerButton1.innerText = question.choices(0)
        
    });
    }

// function to start a timer count
// sets a var to the total time for the quiz    
function startTimer() {
    // Sets timer
    var timeLeft = 11;
    setInterval(function() {
    timeLeft--;
    if (timeLeft >= 0) {
    timerArea.textContent = timeLeft;
    }
        }, 1000);
}
    // for each for question.choices
    // make a button for each choice
    // give each button a value of correct answer

    

// function to create the score and push it to high score