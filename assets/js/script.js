// any global variables needed

// variables to traverse the DOM aka html
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("answers");
var timeEl = document.getElementById("time");
var initialsEl = document.getElementById("initials");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

// questions for the quiz
var questions = [
    {
        question: "What is Gonzo's preferred nickname?",
        choices: ["Nana", "Pingo", "Nano", "The Gonz"],
        answer: "Nano"
    },
    {
        question: "What is Gonzo's favorite food?",
        choices: ["Blue Buffalo dry fooed", "Fresh Pet", "Chocolate Cake", "String Cheese"],
        answer: "Fresh Pet"
    },
    {
        question: "What does Gonzo like more?",
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

//function to show the questions and log results

//function to create the score and push it to high scores
