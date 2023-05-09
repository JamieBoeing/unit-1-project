const loadQuestionData = async () => {
  try {
  const res = await fetch("questions.json")
  const data = await res.json() 
  return data
} catch (error) {
  return console.error(error)
  }
}


// Set up variables for tracking game state
let currentLevel = 1
let currentQuestion = 0
let score = 0
let questionData = []
let questionTimer = 0
let timeLeft = 0
let timerEl = document.querySelector("#timer") 
//select timer element
let optionEls = []
let questions = []


function startTimer() {
   // clear any existing timer intervals
   clearInterval(questionTimer)

//set the time to the initial value
timeLeft = 120

   // set interval to count down the question time
   questionTimer = setInterval(() => {
    timeLeft--
    timerEl.innerHTML = `Time remaining: ${timeLeft} seconds`
    if (timeLeft === 0) {
      clearInterval()
      answerQuestion(null, timeLeft) 
      // call answer question with a null choice
    }
   }, 1000)
}



// function to display the current question
function displayQuestion() {
  const questionEl = document.getElementById("question")
  const optionsEl = document.getElementById("options")


  // increment the counter
  currentQuestion++

 if (currentQuestion > 10) {
  endGame()
  return
 }

 // select a random question
 const randomIndex = Math.floor(Math.random() * questions.length)
 const question = questionData[randomIndex]

 // display the question
 questionEl.innerText = question.question
 
 // clear any previous options
 optionsEl.innerHTML = ""

// Display the answer options
for (let i = 0; i < question.options.length; i++) {
  const optionEl = document.createElement("button")
  optionEl.textContent = question.options[i]
  optionEl.addEventListener("click", () => {
    checkAnswer(question.options[i], timeLeft)
  }) 
  optionsEl.appendChild(optionEl)
  }
}

// Function to start the game
function startGame() {
    console.log("Game Started!")
    displayQuestion()
    displayLevel()
    startTimer()
  }

  // // Function to handle answering a question
function answerQuestion(choice, timeTaken) {
  clearInterval(questionTimer)
  const question = questionData[currentLevel - 1].questions[currentQuestion]
  const correctAnswer = question.answer

  // Check if selected choice is correct
  if (choice === correctAnswer) {
    score++
    if (timeTaken <= 10) { 
      // add bonus if time taken is less than 10 seconds
      score += 5
    }
    displayScore()
    playCorrectSound()
  } else {
    playWrongSound()
    newQuote()
  }

  // Move to the next question or level
  currentQuestion++
  if (currentQuestion >= questionData[currentLevel - 1].questions.length) {
    if (currentLevel >= questionData.length) {
      endGame()
} else {
  currentLevel++
  displayLevel()
  currentQuestion= 0
  displayQuestion()
  startTimer()
    }
  }
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


  //Load question data and display the first question 
  loadQuestionData().then((questions) => {
    questionData = questions
    displayScore()
    displayLevel()
  })

// end game message array
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
}

