// Define variables for tracking game stats
let currentLevel = 1
let currentQuestion = 1
let score = 0
let timeBonus =0
let levelBonus = 0
let answers = []
let achievements = []

//define questions array
let questionData = []

//set up timer variables
let startTime
let endTime
let timer

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
}