// Define variables
let currentLevel = 1
let currentQuestion = 1
let score = 0
let timeBonus =0
let answers = []

//define questions array
let question = []

// level 1: History
{
    questions: [
      {
        question: ""
        option:
        answer: 
        theme: 
      }
      // add more questions
        question:
        option:
        answer:
    ],
    theme: "History"
  },
  // Level 2: Science
  {
    questions: [
    {
      question: 
      option: []
      answer: 
    },
  // add more questions here
  question:
        option:
        answer:
    ],
    theme: "Science"
  },
   // add more levels here
   // level 3: Art
  {
    questions: [
      {
        question:
        option:
        answer: 
      }
      // add more questions
      question:
        option:
        answer:
    ],
    theme: "Art"
  },
  // level 4: Music
  {
    questions: [
      {
        question:
        option:
        answer: 
      }
      // add more questions
      question:
        option:
        answer:
    ],
    theme: "Music"
  },
  // level 5: Greek Mythology
  {
    questions: [
      {
        question:
        option:
        answer: 
      }
      // add more questions
      question:
        option:
        answer:
    ],
    theme: "Greek Mythology"
  },
  // level 6: Sports
  {
    questions: [
      {
        question:
        option:
        answer: 
      }
      // add more questions
      question:
        option:
        answer:
    ],
    theme: "Sports"
  },
  // level 7: Math
  {
    questions: [
      {
        question:
        option:
        answer: 
      }
      // add more questions
      question:
        option:
        answer:
    ],
    theme: "Math"
  },
  
  
  
  
  
  // reset, and start fresh with new questions
  function startGame() {
    // Reset variables
    questionCount = 0;
    score = 0;
  
    // Display first question
    displayQuestion();
  }

  function displayQuestion() {
    // Get current question object from questions array
    let currentQuestionData = currentLevelData.question[currentQuestion - 1]
    let currentLevelData = questionData[currentLevel -1]

    //display question and answer choices
    const questionELement = document.getElementbyId("question")
    questionElement.textContent = currentQuestionData.question

    //answer choices
    const questionElement = document.getElementById("options")
    optionElement.innerHTML = ""
    for(let i = 0; i , currentQuestionData.options.length; i++ ) {
        const optionElement = document.getElementById("li")
        optionElement.textContent =currentQuestionData.options[i]
        optionElement.dataset.index = 1
        optionElement.addEventListener("click", handleAnswerClick)
        optionsElement.appendChild(optionElement)
    }
}

// define function for handleClicks
function handleAnswerClick(event) {
    //get players answer and update the score; check time bonus
    const playerAnswer = event.currentTarget.dataset.index
    answers.push(playerAnswer)
    if (playerAnswer == questionData[currentLevel - 1].questions.length) {
        displayQuestion()
    } else {
        // end the level and award bonus points
        levelBonus = (timeBonus == questionData[currentLevel -1].questions.length) ? 5: 0
        score += levelBonus

        //check if the player has completed the level or the game
        if(currentLevel == questionData.length && currentQuestion > questionData[currentLevel -1].questions.length) {
            //end the game and display the players score and achievements
            const scoreElement = document.getElementById("score")
            scoreElement.textContent = `Final score: ${score}`
            //check and display achievements
        } else (currentQuestion > questionData[currentLevel -1].questions.length) {
            //end level and unlock the next level
            currentLevel++
            currentQuestion = 1
            timeBonus = 0
            levelBonus = 0
            answers = []
            displayQuestion()
        }
    }
}

// call the displayQuestion function to start the game

displayQuestion()