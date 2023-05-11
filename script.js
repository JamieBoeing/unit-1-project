const questions = [
  {
    Question: "Who is the king of gods in Greek mythology?",
    Answers: [
      { text: "Zeus", correct: true },
      { text: "Hades", correct: false },
      { text: "Poseidon", correct: false },
      { text: "Apollo", correct: false }
    ]
  },
  {
    Question: "Who is the goddess of love and beauty in Greek mythology?",
    Answers: [
      { text: "Hera", correct: false },
      { text: "Athena", correct: false },
      { text: "Aphrodite", correct: true },
      { text: "Artemis", correct: false }
    ]
  },
  {
    Question:
      "Which creature is part lion, part goat, and part serpent in Greek mythology?",
    Answers: [
      { text: "Centaur", correct: false },
      { text: "Harpy", correct: false },
      { text: "Chimera", correct: true },
      { text: "Minotaur", correct: false }
    ]
  },
  {
    Question: "Who is the ruler of the underworld in Greek mythology?",
    Answers: [
      { text: "Zeus", correct: false },
      { text: "Hades", correct: true },
      { text: "Poseidon", correct: false },
      { text: "Hermes", correct: false }
    ]
  },
  {
    Question: "Who is the goddess of wisdom and warfare in Greek mythology?",
    Answers: [
      { text: "Hera", correct: false },
      { text: "Athena", correct: true },
      { text: "Aphrodite", correct: false },
      { text: "Artemis", correct: false }
    ]
  },
  {
    Question:
      "Which of the following is a unit of measurement for temperature?",
    Answers: [
      { text: "Watt", correct: false },
      { text: "Volt", correct: false },
      { text: "Celsius", correct: true },
      { text: "Ampere", correct: false }
    ]
  },
  {
    Question: "What is the largest planet in our solar system?",
    Answers: [
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false }
    ]
  },
  {
    Question: "Which of the following is a primary color?",
    Answers: [
      { text: "Orange", correct: false },
      { text: "Green", correct: false },
      { text: "Yellow", correct: true },
      { text: "Purple", correct: false }
    ]
  },
  {
    Question:
      "What is the process by which plants convert sunlight into energy called?",
    Answers: [
      { text: "Photosynthesis", correct: true },
      { text: "Respiration", correct: false },
      { text: "Transpiration", correct: false },
      { text: "Digestion", correct: false }
    ]
  },
  {
    Question:
      "Which organ is responsible for pumping blood throughout the body?",
    Answers: [
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false }
    ]
  },
  {
    Question: "Who was the first President of the United States?",
    Answers: [
      { text: "Abraham Lincoln", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John F. Kennedy", correct: false }
    ]
  },
  {
    Question: "Which ancient civilization built the Great Wall of China?",
    Answers: [
      { text: "Romans", correct: false },
      { text: "Egyptians", correct: false },
      { text: "Greeks", correct: false },
      { text: "Chinese", correct: true }
    ]
  },
  {
    Question: "The Renaissance is known for its revival of interest in?",
    Answers: [
      { text: "Science and technology", correct: false },
      { text: "Philosophy and religion", correct: false },
      { text: "Art and culture", correct: false }
    ]
  },
  {
    Question: "Who wrote the famous play Romeo and Juliet?",
    Answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    Question: "In which year did World War II end?",
    Answers: [
      { text: "1939", correct: false },
      { text: "1941", correct: false },
      { text: "1945", correct: true },
      { text: "1950", correct: false }
    ]
  },
  {
    Question: "Which artist is known for painting the Mona Lisa?",
    Answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    Question:
      "Who composed the Symphony No. 9 in D minor, also known as 'Ode to Joy'?",
    Answers: [
      { text: "Ludwig van Beethoven", correct: true },
      { text: "Johann Sebastian Bach", correct: false },
      { text: "Wolfgang Amadeus Mozart", correct: false },
      { text: "Franz Schubert", correct: false }
    ]
  },
  {
    Question:
      "Which art movement was characterized by bright colors and bold brushstrokes?",
    Answers: [
      { text: "Cubism", correct: false },
      { text: "Impressionism", correct: true },
      { text: "Surrealism", correct: false },
      { text: "Pop Art", correct: false }
    ]
  },
  {
    Question: "Which instrument is typically played with a bow?",
    Answers: [
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
    Question:
      "What is the name of the main character in the anime series 'Dragon Ball Z'?",
    Answers: [
      { text: "Goku", correct: true },
      { text: "Naruto", correct: false },
      { text: "Luffy", correct: false },
      { text: "Ichigo", correct: false }
    ]
  },
  {
    Question: "Which video game franchise features the character Master Chief?",
    Answers: [
      { text: "Halo", correct: true },
      { text: "Call of Duty", correct: false },
      { text: "Assassin's Creed", correct: false },
      { text: "Fallout", correct: false }
    ]
  },
  {
    Question:
      "Which actor played the character Jon Snow in the TV series 'Game of Thrones'?",
    Answers: [
      { text: "Kit Harington", correct: true },
      { text: "Peter Dinklage", correct: false },
      { text: "Emilia Clarke", correct: false },
      { text: "Maisie Williams", correct: false }
    ]
  },
  {
    Question: "Who painted the famous artwork 'The Starry Night'?",
    Answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: true },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    Question: "Who is the author of the famous novel 'Pride and Prejudice'?",
    Answers: [
      { text: "Jane Austen", correct: true },
      { text: "Charlotte Brontë", correct: false },
      { text: "Emily Dickinson", correct: false },
      { text: "Virginia Woolf", correct: false }
    ]
  },
  {
    Question: "What is the largest organ in the human body?",
    Answers: [
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: false },
      { text: "Skin", correct: true }
    ]
  },
  {
    Question:
      "What is the name of the main protagonist in the 'The Legend of Zelda' series?",
    Answers: [
      { text: "Link", correct: true },
      { text: "Zelda", correct: false },
      { text: "Ganondorf", correct: false },
      { text: "Epona", correct: false }
    ]
  },
  {
    Question:
      "Which actor portrayed Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    Answers: [
      { text: "Chris Evans", correct: false },
      { text: "Chris Hemsworth", correct: false },
      { text: "Robert Downey Jr.", correct: true },
      { text: "Mark Ruffalo", correct: false }
    ]
  },
  {
    Question: "Who painted the ceiling of the Sistine Chapel in Vatican City?",
    Answers: [
      { text: "Leonardo da Vinci", correct: false },
      { text: "Raphael", correct: false },
      { text: "Donatello", correct: false },
      { text: "Michelangelo", correct: true }
    ]
  },
  {
    Question: "Which famous battle marked the end of the Napoleonic Wars?",
    Answers: [
      { text: "Battle of Waterloo", correct: true },
      { text: "Battle of Gettysburg", correct: false },
      { text: "Battle of Hastings", correct: false },
      { text: "Battle of Stalingrad", correct: false }
    ]
  },
  {
    Question: "What is the chemical symbol for the element gold?",
    Answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Hg", correct: false }
    ]
  },
  {
    Question: "Who is the god of the sea in Greek mythology?",
    Answers: [
      { text: "Zeus", correct: false },
      { text: "Hades", correct: false },
      { text: "Poseidon", correct: true },
      { text: "Apollo", correct: false }
    ]
  }
];

const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  startBtn.innerHTML = "Start";
  startBtn.addEventListener("click", (e) => {
    startBtn.style.display = "none";
  });
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  startBtn.style.direction = "block";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again!";
  nextBtn.style.display = "block";
}

function handleNextButton(question) {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
