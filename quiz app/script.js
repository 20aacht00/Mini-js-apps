const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answer: [
      { text: "Vatican city", correct: true },
      { text: "Monaco", correct: false },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Europe", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  nextBtn.style.display = "none";
  showQuestion();
  nextBtn.removeEventListener("click", startQuiz);
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", (ev) => {
      selectAnswer(ev, answer.correct);
      showCorrectAnswer();
    });
    answerBtns.appendChild(button);
  });
}

function selectAnswer(ev, correct) {
  const selectedBtn = ev.target;
  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
}

function showCorrectAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.answer.forEach((answer, index) => {
    if (answer.correct) {
      answerBtns.children[index].classList.add("correct");
    }
    answerBtns.children[index].disabled = true;
  });
  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Restart";
  nextBtn.style.display = "block";
  nextBtn.addEventListener("click", startQuiz);
}

startQuiz();
