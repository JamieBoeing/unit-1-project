// Define global variables for tracking game stats
const questionContainer = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtnsEl = document.getElementById('answer-buttons')
const scoreEl = document.getElementById('score')
const timerEl = document.getElementById('timer')
const themeEl = document.getElementById('theme')
const levelEl = document.getElementById('level')
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const gameEndEl = document.getElementById('game-end')
const finalScoreEl = document.getElementById('final-score')
const achievementEl = document.getElementById('achievement')


let shuffledQuestion, currentQuestionIndex, score, timer, timeInterval

//set up constants 
const correctBonus = 10
const maxQuestions = 10

//functions
function startGame() {
    shuffledQuestions = shuffledQuestions(questions)
    currentQuestionIndex = 0
    score = 0
    timer 10
    resetTimer()
    setTimer()
    setNextQuestion()
}

function setTimer() {
    timeSet = setTimer(() => {
        timer--
        timerEl.innerText =`Time Left: ${timer}s`
        if (timer <= 0) {
            clearTimer(timeInterval)
            endGame()
        }
    }, 1000)
}

function resetTimer() {
    clearTimer(timeInterval)
    timerEl.innerText = `Time left: ${timer}s`
}