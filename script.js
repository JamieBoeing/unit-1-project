// Set up variables for tracking game state
let currentLevel = 1
let currentQuestion =0
let score = 0
let timer = 0
let questionData = []


async function loadQuestionData() {
  try {
    const res = await fetch("questions.json")
    const data = await res.json()
    return data
    } catch (err) {
        console.error(err)
    }
  }


// Add event listners to answer buttons
const answerBtns = document.querySelectorAll("#game-screen btn")
answerBtns.forEach((button) => {
  button.addEventListener("click", () => {
    answerQuestion(button.textContent)
      })
    })

// Function to start the game
async function startGame() {
  const questionData = await loadQuestionData()
  console.log(questionData)
  
  // Hide the intro screen and show the game screen
  const introScreen = document.getElementById("intro-screen")
  const gameScreen = document.getElementById("game-screen")
  introScreen.style.display = "none"
  gameScreen.style.display = "block"
  
  //show question
 
  //Start the timer for time bonus
  startTimer()

  // Add event listeners to answer buttons
  const answerA = document.getElementById("answer-a")
  answerA.addEventListener("click", () => answerQuestion("a"))

  const answerB = document.getElementById("answer-b")
  answerB.addEventListener("click", () => answerQuestion("b"))

  const answerC = document.getElementById("answer-c")
  answerC.addEventListener("click", () => answerQuestion("c"))

  const answerD = document.getElementById("answer-d")
  answerD.addEventListener("click", () => answerQuestion("d"))

  startBtn.addEventListener("click", () => {
    questionData()
  })
}

const startBtn = document.getElementById("start-btn")
startBtn.addEventListener('click', async function() {
  await loadQuestionData()
  startGame()
})
//Function to start the timer for time bonus
function startTimer() {

}
// Function to handle answering a question
function answerQuestion(choice, timeTaken) {
  clearInterval(timer)
  const question = questionData[currentLevel - 1].questions[currentQuestion]
  const correctAnswer = question.answer

  // Check if selected choice is correct
  if (choice === correctAnswer) {
    score++
    if (timeTaken <= 10) { // add bonus if time taken is less than 10 seconds
      score += 5
    }
    displayScore()
    playCorrectSound()
  } else {
    playWrongSound()
    newQuote()
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
const philosophers = [
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "I think, therefore I am. - René Descartes",
  "The unexamined life is not worth living. - Socrates",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde",
  "The mind is everything. What you think you become. - Buddha"
]
// Add messages for end game quotes
function newQuote() {
  const randomIndex = Math.floor(Math.random() * philosophers.length)
  return philosophers[randomIndex]
}

// Function to end the game
function endGame() {
  const gameScreen = document.getElementById("game-screen")
  const gameOverScreen = document.getElementById("game-over-screen")
  gameScreen.style.display = "none"
  gameOverScreen.style.display = "block"
  const quoteEl = document.getElementById("endgame-quote")
  quoteEl.textContent = newQuote()
  
  //reset screen 
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


