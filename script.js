
// question array
const questions = [
  {
    question: "Who is the king of gods in Greek mythology?",
    answers: [
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
    question: "Which creature is part lion, part goat, and part serpent in Greek mythology?",
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
    question: "Which of the following is a unit of measurement for temperature?",
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
    question: "What is the process by which plants convert sunlight into energy called?",
    answers: [
      { text: "Photosynthesis", correct: true },
      { text: "Respiration", correct: false },
      { text: "Transpiration", correct: false },
      { text: "Digestion", correct: false }
    ]
  },
  {
    question: "Which organ is responsible for pumping blood throughout the body?",
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
    question: "Who composed the Symphony No. 9 in D minor, also known as 'Ode to Joy'?",
    answers: [
      { text: "Ludwig van Beethoven", correct: true },
      { text: "Johann Sebastian Bach", correct: false },
      { text: "Wolfgang Amadeus Mozart", correct: false },
      { text: "Franz Schubert", correct: false }
    ]
  },
  {
    question: "Which art movement was characterized by bright colors and bold brushstrokes?",
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
    question: "Who is the author of the famous play Romeo and Juliet?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "What is the name of the main character in the anime series 'Dragon Ball Z'?",
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
    question: "Which actor played the character Jon Snow in the TV series 'Game of Thrones'?",
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
    question: "What is the name of the main protagonist in the 'The Legend of Zelda' series?",
    answers: [
      { text: "Link", correct: true },
      { text: "Zelda", correct: false },
      { text: "Ganondorf", correct: false },
      { text: "Epona", correct: false }
    ]
  },
  {
    question: "Which actor portrayed Tony Stark/Iron Man in the Marvel Cinematic Universe?",
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
    answers: [
      { text: "Zeus", correct: false },
      { text: "Hades", correct: false },
      { text: "Poseidon", correct: true },
      { text: "Apollo", correct: false }
    ]
  },
  {
    question: "What is the process of permanently inserting ink into the skin to create a design called?",
    answers: [
      { text: "Tattooing", correct: true },
      { text: "Piercing", correct: false },
      { text: "Scarification", correct: false },
      { text: "Brandishing", correct: false }
    ]
  },
  {
    question: "Which of the following is a technique where the skin is cut to create a raised scar design?",
    answers: [
      { text: "Dermal punching", correct: false },
      { text: "Implanting", correct: false },
      { text: "Scarification", correct: true },
      { text: "Stretching", correct: false }
    ]
  },
  {
    question: "What type of body modification involves inserting jewelry into a hole made through a body part?",
    answers: [
      { text: "Tattooing", correct: false },
      { text: "Piercing", correct: true },
      { text: "Branding", correct: false },
      { text: "Implanting", correct: false }
    ]
  },
  {
    question: "Which ancient culture is known for practicing body modification, including stretched earlobes and lip plates?",
    answers: [
      { text: "Mayans", correct: false },
      { text: "Egyptians", correct: false },
      { text: "Aztecs", correct: false },
      { text: "Maasai", correct: true }
    ]
  },
  {
    question: "What is the term for the process of gradually enlarging a piercing hole using stretching jewelry?",
    answers: [
      { text: "Tattooing", correct: false },
      { text: "Dermal punching", correct: false },
      { text: "Scarification", correct: false },
      { text: "Stretching", correct: true }
    ]
  },
  {
    question: "Which British rock band released the album 'The Dark Side of the Moon' in 1973?",
    answers: [
      { text: "Pink Floyd", correct: true },
      { text: "Led Zeppelin", correct: false },
      { text: "The Rolling Stones", correct: false },
      { text: "The Who", correct: false }
    ]
  },
  {
    question: "Who is known as the 'King of Pop' and released the album 'Thriller' in 1982?",
    answers: [
      { text: "Michael Jackson", correct: true },
      { text: "Prince", correct: false },
      { text: "Madonna", correct: false },
      { text: "Stevie Wonder", correct: false }
    ]
  },
  {
    question: "Which iconic rock band performed at the historic Live Aid concert in 1985?",
    answers: [
      { text: "Queen", correct: true },
      { text: "The Beatles", correct: false },
      { text: "The Eagles", correct: false },
      { text: "The Beach Boys", correct: false }
    ]
  },
  {
    question: "Who released the hit single 'Smells Like Teen Spirit' in 1991?",
    answers: [
      { text: "Nirvana", correct: true },
      { text: "Pearl Jam", correct: false },
      { text: "Radiohead", correct: false },
      { text: "Guns N' Roses", correct: false }
    ]
  },
  {
    question: "Which female artist won a record-breaking 28 Grammy Awards, including Album of the Year for '1989'?",
    answers: [
      { text: "Taylor Swift", correct: true },
      { text: "Beyoncé", correct: false },
      { text: "Adele", correct: false },
      { text: "Rihanna", correct: false }
    ]
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
      { text: "France", correct: true },
      { text: "Brazil", correct: false },
      { text: "Germany", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "Who holds the record for the most home runs hit in Major League Baseball (MLB) history?",
    answers: [
      { text: "Barry Bonds", correct: true },
      { text: "Babe Ruth", correct: false },
      { text: "Hank Aaron", correct: false },
      { text: "Alex Rodriguez", correct: false }
    ]
  },
  {
    question: "Which basketball player won the most NBA championships in history?",
    answers: [
      { text: "Bill Russell", correct: true },
      { text: "Michael Jordan", correct: false },
      { text: "Magic Johnson", correct: false },
      { text: "Kareem Abdul-Jabbar", correct: false }
    ]
  },
  {
    question: "Who holds the record for the most goals scored in a single NHL season?",
    answers: [
      { text: "Wayne Gretzky", correct: true },
      { text: "Mario Lemieux", correct: false },
      { text: "Bobby Orr", correct: false },
      { text: "Jaromir Jagr", correct: false }
    ]
  },
  {
    question: "Which athlete has won the most Olympic gold medals in history?",
    answers: [
      { text: "Michael Phelps", correct: true },
      { text: "Usain Bolt", correct: false },
      { text: "Carl Lewis", correct: false },
      { text: "Serena Williams", correct: false }
    ]
  }, 
  {
    question: "Which continent is the largest by land area?",
    answers: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "North America", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "What is the capital city of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Perth", correct: false }
    ]
  },
  {
    question: "Which river is the longest in the world?",
    answers: [
      { text: "Nile", correct: true },
      { text: "Amazon", correct: false },
      { text: "Mississippi", correct: false },
      { text: "Yangtze", correct: false }
    ]
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answers: [
      { text: "China", correct: false },
      { text: "India", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false }
    ]
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Mount McKinley", correct: false },
      { text: "Mount Fuji", correct: false }
    ]
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    answers: [
      { text: "Marie Curie", correct: true },
      { text: "Rosa Parks", correct: false },
      { text: "Amelia Earhart", correct: false },
      { text: "Jane Austen", correct: false }
    ]
  },
  {
    question: "Who is often credited as the founder of modern nursing?",
    answers: [
      { text: "Florence Nightingale", correct: true },
      { text: "Harriet Tubman", correct: false },
      { text: "Coco Chanel", correct: false },
      { text: "Indira Gandhi", correct: false }
    ]
  },
  {
    question: "Who is the author of the book 'To Kill a Mockingbird'?",
    answers: [
      { text: "Maya Angelou", correct: false },
      { text: "Virginia Woolf", correct: false },
      { text: "Harper Lee", correct: true },
      { text: "Emily Dickinson", correct: false }
    ]
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    answers: [
      { text: "Margaret Thatcher", correct: true },
      { text: "Angela Merkel", correct: false },
      { text: "Jacinda Ardern", correct: false },
      { text: "Golda Meir", correct: false }
    ]
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    answers: [
      { text: "Aretha Franklin", correct: true },
      { text: "Ella Fitzgerald", correct: false },
      { text: "Nina Simone", correct: false },
      { text: "Billie Holiday", correct: false }
    ]
  }

]
// elements 
const startBtn = document.getElementById("start-btn")
const questionEl = document.getElementById("question")
const answerBtns = document.getElementById("answer-btns")
const nextBtn = document.getElementById("next-btn")


// variables for game state
let currentQuestionIndex = 0
let score = 0


// button listeners to start and next question
startBtn.addEventListener("click",  startQuiz)
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++
  if (currentQuestionIndex >= questions.length || currentQuestionIndex >= 10) {
    showScore()
  } else {
    showQuestion()
  } 
})


// start quiz button function
function startQuiz() {
  startBtn.style.display = "none"
  answerBtns.classList.remove = ("hide")
  questionEl.classList.remove = ("hide")
  currentQuestionIndex = 0
  score = 0
  showQuestion()
}

//show question function 
function showQuestion() {
  resetState()
  //show question random
  let randomIndex = Math.floor(Math.random() * questions.length)
  let currentQuestion = questions[randomIndex]
  let questionNo = currentQuestionIndex + 1
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question

  // answers create buttons and adds each text
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerHTML = answer.text
    button.classList.add("btn")
    answerBtns.appendChild(button)
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerBtns.appendChild(button)
  })
 
  
}


// reset buttons
function resetState() {
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild)
  }
  nextBtn.style.display = "block"
}

// select and check answer for correct or incorrect
function selectAnswer(e) {
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === "true"
  if (isCorrect) {
    selectedBtn.classList.add("correct")
    score++
  } else {
    selectedBtn.classList.add("incorrect")
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct")
    }
    button.disabled = true
  })
  nextBtn.style.display = "block"
  questionEl.style.display = "block"
}

//show score and question amount
function showScore() {
  resetState()
  questionEl.innerHTML = `You scored ${score} out of ${Math.min(questions.length, 10
    )} questions`
  nextBtn.innerHTML = "Play Again!"
  nextBtn.addEventListener("click", playAgain)
  nextBtn.style.display = "block"
}

// play again button function to the next button 
function  playAgain() {
  currentQuestionIndex = 0
  score = 0
  showQuestion()
  nextBtn.innerHTML = "Next"
}

// start quiz
startQuiz()
