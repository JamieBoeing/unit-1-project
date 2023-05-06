// Set up variables for tracking game state
let currentLevel = 1
let currentQuestion =0
let score = 0
let timeBonus = 0
let levelBonus = 0
let answers = []
let achievements = []

// Define question data as an empty array
let questionData = []

// Load the question data from a JSON file
function loadQuestionData() {
  fetch('questions.json')
    .then(response => response.json())
    .then(data => {
      questionData = data;
      startGame()
    })
}

// Function to start the game
function startGame() {
  // Hide the intro screen and show the game screen
  const introScreen = document.getElementById("intro-screen")
  const gameScreen = document.getElementById("game-screen")
  introScreen.style.display = "none"
  gameScreen.style.display = "block"

  //Start the timer for time bonus
  startTimer()
}

// Function to load the next question
function loadQuestion() {
  // Check if all questions in the current level have been answered
  if (currentQuestion >= questionData[currentLevel - 1].questions.length) {
    // Move to the next level or end the game if all levels have been completed
    if (currentLevel < questionData.length) {
      currentLevel++
      currentQuestion = 0
      levelBonus += currentLevel * 10 // Add a bonus for completing a level, multiplied by the current level
      displayLevel()
    } else {
      endGame() // End game if all levels have been completed
      return
    }
  }

  // Load the question and answer options...
  const question = questionData[currentLevel - 1].questions[currentQuestion]

  const questionEl = document.getElementById("question")
  questionEl.textContent = question.question

  const choices = document.querySelectorAll(".choice")
  choices.forEach((choice, index) => {
    choice.textContent = question.options[index]
    choice.addEventListener("click", () => answerQuestion(index))
  })
}
//Function to start the timer for time bonus
function startTimer() {
  let timeLeft = 10
  const timeEl = document.getElementById("time")
  timeEl.textContent = `Time: ${timeLeft}s`
  const timerId = setInterval(() => {
    timeLeft--
    timeEl.textContent = `Time: ${timeLeft}s`
    if (timeLeft === 0) {
      clearInterval(timerId)
    }
  }, 1000)
}
// Function to handle answering a question
function answerQuestion(choice) {
  const question = questionData[currentLevel - 1].questions[currentQuestion]
  const correctAnswer = question.answer

  // Check if selected choice is correct
  if (choice === correctAnswer) {
    score++;
    displayScore()
    playCorrectSound()
  } else {
    playWrongSound()
  }

  // Move to the next question
  currentQuestion++
  loadQuestion()
}

// Function to display the current level
function displayLevel() {
  const levelEl = document.getElementById("level")
  levelEl.textContent = `Level: ${currentLevel}`
}

// Function to display the current score
function displayScore() {
  const scoreEl = document.getElementById("score")
  scoreEl.textContent = `Score: ${score}`
}

// Function to display the current level bonus
function levelBonusEl() {
  const levelBonusEl = document.getElementById("level-bonus")
  levelBonusEl.textContent = `Level Bonus: ${levelBonusEl}`
}

// Function to play the correct sound
function playCorrectSound() {
  const correctSound = document.getElementById("correct-sound")
  correctSound.play()
}

// Function to play the wrong sound
function playWrongSound() {
  const wrongSound = document.getElementById("wrong-sound")
  wrongSound.play()
}

// Function to end the game
function endGame() {
  // Hide the game screen and show the game-over screen
  const gameScreen = document.getElementById("game-screen")
  const gameOverScreen = document.getElementById("game-over-screen")
  gameScreen.style.display = "none"
  gameOverScreen.style.display = "block"

  // Display the final score
  const finalScoreEl = document.getElementById("final-score")
  finalScoreEl.textContent = score
}

