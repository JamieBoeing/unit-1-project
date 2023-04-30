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
    if(currentLevel >= questionData.length) {
        currentLevel++
        currentQuestion = 0
        levelBonus += 10 //add points for level up
        displayLevel()
    } else {
        endGame()
        return
    }
}
