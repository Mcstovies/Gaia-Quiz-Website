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

function showQuestion() {

  // Check if quiz finished
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  // Display question
  questionText.innerHTML =
    "Question " + (currentQuestion + 1) + "<br>" +
    questions[currentQuestion];

  // Display options
  optionButtons.forEach((button, index) => {
    button.textContent = options[currentQuestion][index];

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

  if (userAnswer === correctAnswers[currentQuestion]) {
    alert("Correct! Well done ");
    score++;
  } else {
    alert(
      "Wrong answer \nCorrect answer was option " +
      correctAnswers[currentQuestion]
    );
  }

  currentQuestion++;

  showQuestion();
}


// ===============================
// FINAL RESULTS
// ===============================

function showResults() {

  quizContainer.style.display = "none";

  resultText.style.display = "block";

  let message =
    "Quiz Complete!<br>" +
    "You got " + score + " out of 6 correct.<br><br>";

  // CHECK PASS (OVER 50%)
  if (score >= 3) {
    message += "You passed! Great job 🌍";
  } else {
    message += "You did not pass. Try again!";
  }

  resultText.innerHTML = message;
}