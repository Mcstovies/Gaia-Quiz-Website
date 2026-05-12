// ===============================================================
// DECLARING VARIABLES AND ARRAYS OF QUESTIONS, OPTIONS, AND ANSWERS
// ===============================================================

const questions = [
    "What gas do trees absorb?",
    "What should you recycle?",
    "What causes global warming?",
    "Which energy is renewable?",
    "What happens when ice caps melt?",
    "What helps reduce pollution?",
];

// Arrays that store answer options
const options = [
  ["Oxygen", "Carbon Dioxide", "Nitrogen"],
  ["Plastic", "Glass", "Both"],
  ["Cars", "Trees", "Rain"],
  ["Solar", "Coal", "Oil"],
  ["Sea levels rise", "Nothing", "Mountains grow"],
  ["Cycling", "Driving more", "Burning fuel"]
];

// Arrays that store correct answer
const answers = [2,3,1,1,1,1];

// Variables to track the score and question number
let score = 0;
let currentQuestion = 0;

// ===============================================================
// HTML ELEMENTS
// ===============================================================

const startButton = document.getElementById("startBtn");
const quizContainer = document.getElementById("quiz");
const questionText = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const resultText = document.getElementById("result");
const feedbackArea = document.getElementById("feedback");
const resetButton = document.getElementById("resetBtn");

// ===============================
// START BUTTON
// ===============================

startButton.addEventListener("click", startQuiz);

// Function to start the quiz, hide the start button, and show quiz container
function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";

  showQuestion();
}


// ===============================
// SHOW QUESTION
// ===============================


  // Displays current question and options, and sets up click handlers for answers
function showQuestion() {

  // Check if quiz finished
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  // Clear feedback
  feedbackArea.textContent = "";
  feedbackArea.classList.remove("show", "correct", "wrong");

  // Display question
  questionText.innerHTML =
    "Question " + (currentQuestion + 1) + "<br>" +
    questions[currentQuestion];

  // Display options
  optionButtons.forEach((button, index) => {
    button.textContent = options[currentQuestion][index];
    button.disabled = false;
    button.style.opacity = "1";

    // When user clicks an answer
    button.onclick = function () {
      checkAnswer(index + 1);
    };
  });
}

// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(userAnswer) {

  // Disable all buttons
  optionButtons.forEach(button => {
    button.disabled = true;
    button.style.opacity = "0.5";
  });

  // Check if answer is correct
  if (userAnswer === answers[currentQuestion]) {
    score++;
    feedbackArea.innerHTML = '<span class="feedback-symbol">✓</span><span>Correct! Well done!</span>';
    feedbackArea.classList.add("show", "correct");

    // Highlight correct answer and show wrong symbol
  } else {
    const correctOption = answers[currentQuestion];
    feedbackArea.innerHTML = `<span class="feedback-symbol">✕</span><span>Wrong! Correct answer was option ${correctOption}</span>`;
    feedbackArea.classList.add("show", "wrong");
  }

  // Move to next question after 1 seconds
  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1000);
}

// ===============================
// FINAL RESULTS
// ===============================

function showResults() {

  quizContainer.style.display = "none";

  resultText.style.display = "block";
  resetButton.style.display = "block";

  let message =
    "Quiz Complete!<br>" +
    "You got " + score + " out of 6 correct.<br><br>";

  // CHECK PASS (OVER 50%)
  if (score >= 3) {
    message += "You passed! Great job !";
  } else {
    message += "You did not pass. Try again!";
  }

  resultText.innerHTML = message;
}


// ===============================
// RESET BUTTON
// ===============================

resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {

  // Reset quiz state
  score = 0;
  currentQuestion = 0;

  // Hide results and reset button
  resultText.style.display = "none";
  resetButton.style.display = "none";

  // Hide quiz area
  quizContainer.style.display = "none";

  // Show start button again
  startButton.style.display = "inline-block";

  // Clear feedback
  feedbackArea.textContent = "";
  feedbackArea.classList.remove("show", "correct", "wrong");

  // Re-enable buttons
  optionButtons.forEach(button => {
    button.disabled = false;
    button.style.opacity = "1";
  });
}