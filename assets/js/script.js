// any global variables needed
var questionsIndex = 0;

var time = questions.length * 15;
// for keeping a timer and score?
var timerId;

// variables to traverse the DOM aka html
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("answers");
var timeEl = document.getElementById("time");
var initialsEl = document.getElementById("initials");
var startBtn = document.querySelector(".start");
var submitBtn = document.getElementById("submit");
var quizStart = document.getElementById(".quizstart");
var scoreScreen = document.getElementById(".score-screen");

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

//function to start the quiz
function beginQuiz() {
    var startQuizEl = document.getElementById("quizStart");
    startQuizEl.setAttribute("class", ".hide");

    score-screenEl.removeAttribute("class");
}

//function to get the questions
function getQuestions() {

}

startBtn.addEventListener("click", beginQuiz);
//function to create the score and push it to high scores
