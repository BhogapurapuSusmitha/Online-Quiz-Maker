let currentQuestion = 0;
let score = 0;
let questions = [];

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    loadQuestion();
  });

function loadQuestion() {
  const questionBox = document.getElementById('questionBox');
  const optionsBox = document.getElementById('optionsBox');
  const timer = document.getElementById('timer');
  timer.classList.remove('hide');

  questionBox.innerHTML = questions[currentQuestion].question;
  optionsBox.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.classList.add('optionBtn');
    btn.innerText = option;
    btn.addEventListener('click', () => selectOption(index));
    optionsBox.appendChild(btn);
  });

  document.getElementById('prevBtn').disabled = currentQuestion === 0;
  document.getElementById('nextBtn').disabled = true;
}

function selectOption(selectedIndex) {
  const correctIndex = questions[currentQuestion].answer;
  const optionButtons = document.querySelectorAll('.optionBtn');
  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) {
      btn.classList.add('correct');
    } else if (index === selectedIndex) {
      btn.classList.add('wrong');
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
  }
  document.getElementById('nextBtn').disabled = false;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

function showScore() {
  document.getElementById('timer').classList.add('hide');
  document.getElementById('questionBox').classList.add('hide');
  document.getElementById('optionsBox').classList.add('hide');
  document.querySelector('.button-group').classList.add('hide');

  const scoreBox = document.getElementById('scoreBox');
  scoreBox.classList.remove('hide');
  scoreBox.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button onclick="location.reload()">Retake Quiz</button>
  `;
}
