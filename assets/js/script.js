// any global variables needed
// var questionsIndex = 0;

// var time = questions.length * 15;
// for keeping a timer and score?
// var timerId;

// variables to traverse the DOM aka html
var quizBegin = document.getElementById("quizarea");
var questionEl = document.getElementById("question")
var choicesEl = document.getElementById("answers");
var timerArea = document.getElementById("timeleft");
var initialsEl = document.getElementById("initials");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var startScreen = document.getElementById("startscreen");
var scoreScreen = document.getElementById("score-screen");
var answerChoices = document.getElementById("answers")
var answerButtons = document.getElementById("answer-button")

// let shuffledQuestions

// variable to make sure question index starts at 0 so the quiz begins with the first question in array
var currentQuestionIndex = 0
//creating a let to define later as the current question as the user goes through them
let currentQuestion
// timer variable
// timer countdown variable
var timerCount



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
    startTimer()
    console.log("Started")
    startScreen.classList.add('hide')
    quizBegin.classList.remove('hide')
    currentQuestion = questions[currentQuestionIndex]
    getQuestions()
    

}

//function to get the questions
function getQuestions() {
    showQuestion(currentQuestion)
        // document.write ( question );
        // var options = questions[i].choices;
        // document.body.appendChild(document.createElement("br"));
}

// puts the random qauestion picked on the page
function showQuestion(question) {
    questionEl.innerText = question.question
    // questions.forEach(choices) 
    console.log(answer)
        
    }

// function to start a timer count    
function startTimer() {
    // Sets timer
    var timeLeft = 10;
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