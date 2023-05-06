// Set up variables for tracking game state
let currentLevel = 1
let currentQuestion =0
let score = 0

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

  // check if we've reached the end of the questions
  if (currentQuestion >= questionData[currentLevel - 1].questions.length) {
  // end game logic here
  endGame()
} else {
  loadQuestionData()
  }
}


// Function to end the game
function endGame() {
  // Hide the game screen and show the game-over screen
  const gameScreen = document.getElementById("game-screen")
  const gameOverScreen = document.getElementById("game-over-screen")
  gameScreen.style.display = "none"
  gameOverScreen.style.display = "block"

  // Display the final score and endgame message
  const endGameMessage = `Game Over! Your final score is ${score}.`
  displayMessage(endGameMessage)

  //reset game state
  score = 0
  currentLevel = 1
  currentQuestion = 0

  // reload inital level and questions
  loadQuestionData()
    displayScore()
    displayLevel() 
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


