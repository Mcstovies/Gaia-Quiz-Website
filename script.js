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

const options = [
  ["Oxygen", "Carbon Dioxide", "Nitrogen"],
  ["Plastic", "Glass", "Both"],
  ["Cars", "Trees", "Rain"],
  ["Solar", "Coal", "Oil"],
  ["Sea levels rise", "Nothing", "Mountains grow"],
  ["Cycling", "Driving more", "Burning fuel"]
];

const answers = [2,3,1,1,1,1];

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

let answeredQuestion = false;

// ===============================
// START BUTTON
// ===============================

startButton.addEventListener("click", startQuiz);
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
  answeredQuestion = false;

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
      if (!answeredQuestion) {
        checkAnswer(index + 1);
      }
    };
  });
}

// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(userAnswer) {
  answeredQuestion = true;

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
    // Highlight correct answer
  } else {
    const correctOption = answers[currentQuestion];
    feedbackArea.innerHTML = `<span class="feedback-symbol">✕</span><span>Wrong! Correct answer was option ${correctOption}</span>`;
    feedbackArea.classList.add("show", "wrong");
  }

  // Move to next question after 2 seconds
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
  answeredQuestion = false;

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