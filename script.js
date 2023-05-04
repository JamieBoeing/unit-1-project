
// Set up variables for tracking game state
let currentLevel = 1
let currentQuestion = 0
let score = 0
let timeBonus = 0
let levelBonus = 0
let answers = []

// Define question data as an empty array
let questionData = []

// Load the question data 
function loadQuestionData() {
  // questions array
  questions = [
    {
      "question": "which Greek god is known as the king of gods?",
      "options": ["Zeus", "Hades", "Poseidon", "Apollo"],
      "answer": 0,
      "theme": "Greek Mythology"
  },
  {
      "question": "Who is the goddess of love and beauty in Greek mythology'?",
      "options": ["Hera", "Athena", "Aphrodite", "Artemis"],
      "answer": 2,
      "theme": "Greek Mythology"
  },
  {
      "question": "Which creature is part lion, part goat, and part serpent in Greek mythology",
      "options": ["Centaur", "Harpy", "Chimera", "Minotaur"],
      "answer": 2,
      "theme": "Greek Mythology"
  },
  {
      "question": "who is the ruler of the underworld in Greek mythology?",
      "options": ["Zeus", "Hades", "Poseidon", "Hermes"],
      "answer": 1,
      "theme": "Greek Mythology"
  },
  {
      "question": "which of the following is a unit of measurement for temperature?",
      "options": ["Watt", "Volt", "Celsius", "Ampere"],
      "answer": 2,
      "theme": "Science"
  },
  {
      "question": "what is the largest planet in our solar system?",
      "options": ["Mars", "Saturn", "Jupiter", "Earth"],
      "answer": 2,
      "theme": "Science"
  },
  {
      "question": "which of the following is a primary color?",
      "options": ["Orange", "Green", "Yellow", "Purple"],
      "answer": 2,
      "theme": "Science"
  },
  {
      "question": "what is the process by which plants convert sunlight into energy called?",
      "options": ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
      "answer": 0,
      "theme": "Science"
  },
  {
      "question": "which organ is responsible for pumping blood throughout the body?",
      "options": ["Brain", "lungs", "Heart", "Liver"],
      "answer": 2,
      "theme": "Science"
  },
  {
      "question": "who was the first President of the United States?",
      "options": ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"],
      "answer": 1,
      "theme": "History"
  },
  {
      "question": "which ancient civilization built the Great Wall of China?",
      "options": ["Romans", "Egyptians", "Greeks", "Chinese"],
      "answer": 3,
      "theme": "History"
  },
  {
      "question": "The Renaissance is known for its revival of interest in?",
      "options": ["Science and technology", "Philosopy and religion", "Politics and warfare", "Art and culture"],
      "answer": 3,
      "theme": "History"
  },
  {
      "question": "who wrote the famous play Romeo and Juliet?",
      "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      "answer": 0,
      "theme": "History"
  },
  {
      "question": "In which year did World War II end?",
      "options": ["1939", "1941", "1945", "1950"],
      "answer": 2,
      "theme": "History"
  },
  {
      "question": "which artist is known for painting the Mona Lisa?",
      "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
      "answer": 2,
      "theme": "Art & Music"
  },
  {
      "question": "Who composed the Symphony No. 9 in D minor, also known as 'Ode to Joy'?",
      "options": ["Ludwig van Beethoven", "Johann Sebastian Back", "Wolfgang Amadeus Mozart", "Franz Schubert"],
      "answer": 0,
      "theme": "Art & Music"
  },
  {
      "question": "Which art movement was characterized by bright colors and bold brushstrokes?",
      "options": ["Impressionism", "Cubism", "Surrealism", "Pop Art"],
      "answer": 0,
      "theme": "Art & Music"
  },
  {
      "question": "Which instrument is typically played with a bow?",
      "options": ["Guitar", "Piano", "Trumpet", "Violin"],
      "answer": 3,
      "theme": "Art & Music"
  },
  {
      "question": "Who is the author of the famous play Romeo and Juliet",
      "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      "answer": 0,
      "theme": "Art & Music"
  },
  {
      "question": "What is the name of Harry's pet owl in the Harry Potter book series?",
      "options": ["Hedwid", "Crookshanks", "Nagini", "Fawkes"],
      "answer": 0,
      "theme": "Pop Culture"
  },
  {
      "question": "Which artist released the hit single 'Shape of You' in 2017",
      "options": ["Justin Bieber", "Taylor Swift", "Ed Sheeran", "Rihanna"],
      "answer": 2,
      "theme": "Pop Culture"
  },
  {
      "question": "Which actor portrayed Iron Man in the Marvel Cinematic Universe?",
      "options": ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
      "answer": 2,
      "theme": "Pop Culture"
  },
  {
      "question": "Who is the creator of the popular animated TV show 'The Simpsons'?",
      "options": ["Seth MacFarlane", "Mike Judge", "Trey Parker", "Matt Groening"],
      "answer": 3,
      "theme": "Pop Culture"
  },
  {
      "question": "Which film won the Best Picture award at the 2020 Academy Awards?",
      "options": ["Parasite", "Joker", "1917", "The Shape of Water"],
      "answer": 0,
      "theme": "Pop Culture"
  }
  ]

  // Shuffle the questions array
  shuffleArray(questions)
}

// function to shuffle an array 
function shuffleArray(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }
}

// Function to start the game
function startGame() {
    // hide the intro screen and show the game screen
    const introScreen = document.getElementById("intro-screen")
    const gameScreen = document.getElementById("game-screen")
    introScreen.style.display = "none"
    gameScreen.style.display = "block"

    // display the current level and score
    displayLevel()
    displayScore()

    //load the first question
    loadQuestion()
}

// add event listner for the start button
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", startGame)

// Function to load the next question
function loadQuestion() {

  const questionContainer = document.getElementById("question-container")
  const questionEl = document.getElementById("question")
  const choices = document.querySelectorAll(".choice")

// check if necessary elements are available
if (!questionContainer || !questionEl || choices.length === 0) {
  console.log("Error: Missing required elements")
  return
}


  // Check if all questions in the current level have been answered
  if (currentQuestion >= questionData[currentLevel - 1].questions.length) {
    // Move to the next level or end the game if all levels have been completed
    if (currentLevel < questionData.length) {
      currentLevel++
      currentQuestion = 0
      levelBonus += 10 // Add a bonus for completing a level
      displayLevel()
    } else {
      endGame() // End game if all levels have been completed
      return
    }
  }
  
    // Load the question and answer options...
  const question = questionData[currentLevel - 1].questions[currentQuestion]

  if (!question) {
    console.log("Erroar: Invalid question data")
    return
  }

  questionEl.textContent = question.question

  choices.forEach((choice, index) => {
    choice.textContent = question.options?.[index]

    // remove previous listener to prevent multiple listners on the same element
    choice.removeEventListener("click", answerQuestion)

    // add event listener to handle click on choice
    choice.addEventListener("click", answerQuestion)
  })
}
// Function to handle answering a question
function answerQuestion(choice) {
    const question = questionData[currentLevel - 1].questions[currentQuestion]
    const correctAnswer = question.answer

//check if selected choice is correct
    if(choice === correctAnswer) {
        score++
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

//Function to play the correct sound
function playCorrectSound() {
    const correctSound = document.getElementById("correct-sound")
    correctSound.play()
}

//Function to play the wrong sound
function playWrongSound() {
    const wrongSound = document.getElementById("wrong-sound")
    wrongSound.play()
}

// Function to end the game
function endGame() {
    //Hide the game screen and show the game over screen
    const gameScreen = document.getElementById("game-screen")
    const gameOverScreen = document.getElementById("game-over-screen")
    gameScreen.style.display = "none"
    gameOverScreen.style.display = "block"

    // display final score
    const finalScoreEl = document.getElementById("final-score")
    finalScoreEl.textContent = score
}
