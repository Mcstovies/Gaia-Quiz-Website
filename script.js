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

