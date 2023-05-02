// Define global variables for tracking game stats
const questionContainer = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')
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
// question data from the JSON file
function loadQuestionData() {
    fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questionData = data
        startGame()
    })
}

//load to next question
function loadQuestion() {
    //check if all questions in the current level have been answered
    if (currentQuestion >= question.Data[currentLevel - 1].questions.length) {
        //move to the next leve or end the game if all levels have been completed
    if(currentLevel < questionData.length) {
        currentLevel++
        currentQuestion = 0
        levelBonus += 10 //add points for level up
        displayLevel()
    } else {
        endGame()
        return
    }
}
 const question = questionData[currentLevel - 1].questions[currentQuestion]
 // load the question and answer options

 // start the timer
 startTime = new Date().getTime()
 timer = setTimeout(() => {
    endTimer()
 }, 10000) // 10 seconds time limit
}

// end the timer and add bonus points
function endTimer() {
    endTime = new Date().getTime()
    const timeElapsed = endTime - startTime

    if(timeElapsed <= 10000) {//time limit in milliseconds
        timeBonus = 5 //set the bonus points
    } else {
        timeBonus = 0 //no bonus if exceeded time limit
    }
    currentQuestion++
    loadQuestion()
}
// function to handle answering a question 
function answerQuestion(choice) {
    const question = questionData[currentLevel -1].questions[currentQuestion]
    const correctAnswer = question.answer

    //check if the selected choice is correct
    if (choice === correctAnswer) {
        score++
        displayScore()
    } else {
        return('Better Luck Next Time')
    }
    clearTimeout(timer)

    const totalScore = score + timeBonus + levelBonus 
}