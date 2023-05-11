const questions = [
  {
    question: "Who is the king of gods in Greek mythology?",
    Answers: [
      { text: "Zeus", correct: true },
      { text: "Hades", correct: false },
      { text: "Poseidon", correct: false },
      { text: "Apollo", correct: false }
    ]
  },
  {
    question: "Who is the goddess of love and beauty in Greek mythology?",
    answers: [
      { text: "Hera", correct: false },
      { text: "Athena", correct: false },
      { text: "Aphrodite", correct: true },
      { text: "Artemis", correct: false }
    ]
  },
  {
    question:
      "Which creature is part lion, part goat, and part serpent in Greek mythology?",
    answers: [
      { text: "Centaur", correct: false },
      { text: "Harpy", correct: false },
      { text: "Chimera", correct: true },
      { text: "Minotaur", correct: false }
    ]
  },
  {
    question: "Who is the ruler of the underworld in Greek mythology?",
    answers: [
      { text: "Zeus", correct: false },
      { text: "Hades", correct: true },
      { text: "Poseidon", correct: false },
      { text: "Hermes", correct: false }
    ]
  },
  {
    question: "Who is the goddess of wisdom and warfare in Greek mythology?",
    answers: [
      { text: "Hera", correct: false },
      { text: "Athena", correct: true },
      { text: "Aphrodite", correct: false },
      { text: "Artemis", correct: false }
    ]
  },
  {
    question:
      "Which of the following is a unit of measurement for temperature?",
    answers: [
      { text: "Watt", correct: false },
      { text: "Volt", correct: false },
      { text: "Celsius", correct: true },
      { text: "Ampere", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false }
    ]
  },
  {
    question: "Which of the following is a primary color?",
    answers: [
      { text: "Orange", correct: false },
      { text: "Green", correct: false },
      { text: "Yellow", correct: true },
      { text: "Purple", correct: false }
    ]
  },
  {
    question:
      "What is the process by which plants convert sunlight into energy called?",
    answers: [
      { text: "Photosynthesis", correct: true },
      { text: "Respiration", correct: false },
      { text: "Transpiration", correct: false },
      { text: "Digestion", correct: false }
    ]
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    answers: [
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "Abraham Lincoln", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John F. Kennedy", correct: false }
    ]
  },
  {
    question: "Which ancient civilization built the Great Wall of China?",
    answers: [
      { text: "Romans", correct: false },
      { text: "Egyptians", correct: false },
      { text: "Greeks", correct: false },
      { text: "Chinese", correct: true }
    ]
  },
  {
    question: "The Renaissance is known for its revival of interest in?",
    answers: [
      { text: "Science and technology", correct: false },
      { text: "Philosophy and religion", correct: false },
      { text: "Art and culture", correct: false }
    ]
  },
  {
    question: "Who wrote the famous play Romeo and Juliet?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1939", correct: false },
      { text: "1941", correct: false },
      { text: "1945", correct: true },
      { text: "1950", correct: false }
    ]
  },
  {
    question: "Which artist is known for painting the Mona Lisa?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question:
      "Who composed the Symphony No. 9 in D minor, also known as 'Ode to Joy'?",
    answers: [
      { text: "Ludwig van Beethoven", correct: true },
      { text: "Johann Sebastian Bach", correct: false },
      { text: "Wolfgang Amadeus Mozart", correct: false },
      { text: "Franz Schubert", correct: false }
    ]
  },
  {
    question:
      "Which art movement was characterized by bright colors and bold brushstrokes?",
    answers: [
      { text: "Cubism", correct: false },
      { text: "Impressionism", correct: true },
      { text: "Surrealism", correct: false },
      { text: "Pop Art", correct: false }
    ]
  },
  {
    question: "Which instrument is typically played with a bow?",
    answers: [
      { text: "Guitar", correct: false },
      { text: "Piano", correct: false },
      { text: "Trumpet", correct: false },
      { text: "Violin", correct: true }
    ]
  },
  {
    Question: "Who is the author of the famous play Romeo and Juliet?",
    Answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question:
      "What is the name of the main character in the anime series 'Dragon Ball Z'?",
    answers: [
      { text: "Goku", correct: true },
      { text: "Naruto", correct: false },
      { text: "Luffy", correct: false },
      { text: "Ichigo", correct: false }
    ]
  },
  {
    question: "Which video game franchise features the character Master Chief?",
    answers: [
      { text: "Halo", correct: true },
      { text: "Call of Duty", correct: false },
      { text: "Assassin's Creed", correct: false },
      { text: "Fallout", correct: false }
    ]
  },
  {
    question:
      "Which actor played the character Jon Snow in the TV series 'Game of Thrones'?",
    answers: [
      { text: "Kit Harington", correct: true },
      { text: "Peter Dinklage", correct: false },
      { text: "Emilia Clarke", correct: false },
      { text: "Maisie Williams", correct: false }
    ]
  },
  {
    question: "Who painted the famous artwork 'The Starry Night'?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: true },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question: "Who is the author of the famous novel 'Pride and Prejudice'?",
    answers: [
      { text: "Jane Austen", correct: true },
      { text: "Charlotte Brontë", correct: false },
      { text: "Emily Dickinson", correct: false },
      { text: "Virginia Woolf", correct: false }
    ]
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: false },
      { text: "Skin", correct: true }
    ]
  },
  {
    question:
      "What is the name of the main protagonist in the 'The Legend of Zelda' series?",
    answers: [
      { text: "Link", correct: true },
      { text: "Zelda", correct: false },
      { text: "Ganondorf", correct: false },
      { text: "Epona", correct: false }
    ]
  },
  {
    question:
      "Which actor portrayed Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    answers: [
      { text: "Chris Evans", correct: false },
      { text: "Chris Hemsworth", correct: false },
      { text: "Robert Downey Jr.", correct: true },
      { text: "Mark Ruffalo", correct: false }
    ]
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel in Vatican City?",
    answers: [
      { text: "Leonardo da Vinci", correct: false },
      { text: "Raphael", correct: false },
      { text: "Donatello", correct: false },
      { text: "Michelangelo", correct: true }
    ]
  },
  {
    question: "Which famous battle marked the end of the Napoleonic Wars?",
    answers: [
      { text: "Battle of Waterloo", correct: true },
      { text: "Battle of Gettysburg", correct: false },
      { text: "Battle of Hastings", correct: false },
      { text: "Battle of Stalingrad", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for the element gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Hg", correct: false }
    ]
  },
  {
    question: "Who is the god of the sea in Greek mythology?",
    Answers: [
      { text: "Zeus", correct: false },
      { text: "Hades", correct: false },
      { text: "Poseidon", correct: true },
      { text: "Apollo", correct: false }
    ]
  }
];

const startBtn = document.getElementById("start-btn")
const questionEl = document.getElementById("question")
const answerBtns = document.getElementById("answer-btns")
const nextBtn = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion()
  } else {
    showScore()
  }
})

function startQuiz() {
   startBtn.style.display = "none"
  currentQuestionIndex = 0
  score = 0
  showQuestion()
}

function showQuestion() {
  resetState()
  //show question random
  let randomIndex = Math.floor(Math.random() * questions.length)
  let currentQuestion = questions[randomIndex]
  let questionNo = currentQuestionIndex + 1
  questionEl.innerHTML = questionNo + "." + currentQuestion.question

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerHTML = answer.text
    button.classList.add("btn")
    answerBtns.appendChild(button)
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild)
  }
  nextBtn.style.display = "none"
}

function selectAnswer(e) {
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === "true"
  if (isCorrect) {
    selectedBtn.classList.add("correct")
    score++;
  } else {
    selectedBtn.classList.add("incorrect")
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct")
    }
    button.disabled = true
  });
  nextBtn.style.display = "block"
}

function showScore() {
  resetState()
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}`
  nextBtn.innerHTML = "Play Again!"
  nextBtn.style.display = "block"
}



startQuiz()
