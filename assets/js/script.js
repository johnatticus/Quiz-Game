// any global variables needed
// var questionsIndex = 0;

// var time = questions.length * 15;
// for keeping a timer and score?
// var timerId;

// variables to traverse the DOM aka html
var quizBegin = document.getElementById("quizarea");
var questionEl = document.getElementById("question")
var choicesEl = document.getElementById("answers");
var timeEl = document.getElementById("time");
var initialsEl = document.getElementById("initials");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var startScreen = document.getElementById("startscreen");
var scoreScreen = document.getElementById("score-screen");
var answerChoices = document.getElementById("answers")
var answerButtons = document.getElementById("answer-button")

let shuffledQuestions, currentQuestionIndex
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


//function to start the quiz and bring up questions
function beginQuiz() {
    console.log("Started")
    startScreen.classList.add('hide')
    quizBegin.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    getQuestions()
}

//function to get the questions
function getQuestions() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
        // document.write ( question );
        // var options = questions[i].choices;
        // document.body.appendChild(document.createElement("br"));
}

// puts the random qauestion picked on the page
function showQuestion(question) {
    questionEl.innerText = question.question
}
    

// function to create the score and push it to high score