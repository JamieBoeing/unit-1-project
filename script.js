
document.addEventListener("DOMContentLoaded", function(){


// Define global variables for tracking game stats
const questionEl = document.getElementById("question")
const answerInputEl = document.getElementById("answer-input")
const submitAnswerBtn = document.getElementById("answer-btn")
const timerEl = document.getElementById("timer")
const themeEl = document.getElementById("theme")
const levelEl = document.getElementById("level")
const scoreEl = Document.getElementById("score")
const newGameBtn = Document.getElementById("new-game-btn")


let currentQuestionIndex = 0
let score = 0
let timeLeft = 10
let questions = []

// fetch questions from the JSON file
fetch("questions.json")
    .then(response => response.json())
    .then(data => {
        questions = data
        showQuestion()
    })
    .catch(error => console.log(error))



//functions
function newGame() {
    currentQuestionIndex = 0
    score = 0
    timeLeft = 10
}
// show a question
function showQuestion() {
    
}


//check the answer
function checkAnswer() {

}

//start the timer
function startTimer() {
    
}