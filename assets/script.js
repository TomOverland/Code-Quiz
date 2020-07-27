let choice1 = document.getElementById("1");
let choice2 = document.getElementById("2");
let choice3 = document.getElementById("3");
let choice4 = document.getElementById("4");
let counter = document.getElementById("count");
let start = document.getElementById("start");
let choices = document.getElementById("choices");
let instructions = document.getElementById("instructions");
let questionContainer = document.getElementById("questionContainer");
let ending = document.getElementById("ending");
let score = document.getElementById("score");
let timer = document.getElementById("timer");
let initialInput = document.getElementById("initials");
let initialsBtn = document.getElementById("initialsBtn");
let goBack = document.getElementById("goBack");
let resetHighScores = document.getElementById("resetHighScore");
let highScoreList = document.getElementById("highScoreList");
let highScoreContainer = document.getElementById("highScore");
let highScoreBtn = document.getElementById("highScoreBtn");
let storedInitials = localStorage.getItem("initials");
let storedScore = localStorage.getItem("score");
let returnToStartBtn = document.getElementById("returnToStartBtn");
let timeLeft = 70;

// I created a question object to store the questions and button choices as an array
let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choice1: "Strings",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    correct: "3",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _________.",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parenthesis",
    choice4: "Square Brackets",
    correct: "3",
  },
  {
    question: "Arrays in JavaScript can be used to store ____________.",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the Above",
    correct: "4",
  },
  {
    question:
      "String values must be enclosed within ___________ when being assigned to variables.",
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parenthesis",
    correct: "3",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "Terminal / Bash",
    choice3: "For Loops",
    choice4: "console.log",
    correct: "4",
  },
];

// this variable defines the last question
let lastQuestionIndex = questions.length - 1;

// this variable defines the question that the question the user is currently answering
let runningQuestionIndex = 0;

// This function will take the key values from my question object and change the question and answer buttons.
function renderQuestion() {
  let q = questions[runningQuestionIndex];
  question.innerHTML = "<p>" + q.question + "<p>";
  choice1.innerHTML = q.choice1;
  choice2.innerHTML = q.choice2;
  choice3.innerHTML = q.choice3;
  choice4.innerHTML = q.choice4;
}

// This function defines what to do if the user answered the question correctly
function answerIsCorrect() {
  console.log("correct");
}

// This function defines what to do if the user answered incorrectly, and deducts 10 seconds from their score.
function answerIsWrong() {
  console.log("wrong");
  timeLeft -= 10;
}

// This function will check whether the button clicked defined as correct, or wrong.
function checkAnswer(answer) {
  if (questions[runningQuestionIndex].correct == answer) {
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  // This if statement will render a new question after the previous one was answered, and will clearInterval(timeLeft) after the last question has been answered.
  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    clearInterval(timeLeft);
    // This will then trigger the end screen, which will display your score as the remaining time.
    questionContainer.classList.add("hide");
    questionContainer.classList.remove("show");
    choices.classList.add("hide");
    choices.classList.remove("show");
    ending.classList.add("show");
    ending.classList.remove("hide");
    score.innerHTML = timeLeft;
    timer.classList.add("hide");
    timer.classList.remove("show");
  }
}

// This function will hide my start button on click, reveal the questions and answer buttons, as well as begin the timer.
function beginQuiz() {
  countDown();
  renderQuestion();
  //console.log("Start"); // This console.log will add "start" to the console to give me a quick idea if the button is working, used for debugging
  //console.log(start.style);  // This console.log tells me what the "style" of the start element is targeting, used for debugging
  if (start.classList.contains("show")) {
    start.classList.add("hide");
    start.classList.remove("show");
  }
  if (choices.classList.contains("hide")) {
    choices.classList.add("show");
    choices.classList.remove("hide");
  }
  if (instructions.classList.contains("show")) {
    instructions.classList.add("hide");
    instructions.classList.remove("show");
  }
  if (questionContainer.classList.contains("hide")) {
    questionContainer.classList.add("show");
    questionContainer.classList.remove("hide");
  }
  timer.classList.add("show");
  timer.classList.remove("hide");
}

// This function is what counts the clock down by 1 second
function countDown() {
  //console.log("countdown"); //this console.log tests if the addEventListener is working. Used for debugging.
  setInterval(function () {
    // This if statement prevents the timer from counting below zero.
    if (timeLeft <= 0) {
      clearInterval((timeLeft = 0));
    }
    // this causes the countdown to decrement by one each second
    counter.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
}

function saveToLocalStorage() {
  localStorage.setItem("initials", initialInput.value);
  localStorage.setItem("score", score.textContent);
}

function addToHighscore() {
  // preventDefault prevents the form asking for user initials from submitting
  event.preventDefault();
  saveToLocalStorage();
  highScoreList.innerHTML =
    "<li>" + storedInitials + ": " + storedScore + "</li>";
}

// This function will show the high score container and hide the other containers
function viewHighScore() {
  highScoreContainer.classList.add("show");
  highScoreContainer.classList.remove("hide");
  if (start.classList.contains("show")) {
    start.classList.add("hide");
    start.classList.remove("show");
  }
  if (choices.classList.contains("show")) {
    choices.classList.add("hide");
    choices.classList.remove("show");
  }
  if (instructions.classList.contains("show")) {
    instructions.classList.add("hide");
    instructions.classList.remove("show");
  }
  if (questionContainer.classList.contains("show")) {
    questionContainer.classList.add("hide");
    questionContainer.classList.remove("show");
  }
  if (ending.classList.contains("show")) {
    ending.classList.add("hide");
    ending.classList.remove("show");
  }
  if (timer.classList.contains("show")) {
    timer.classList.add("hide");
    timer.classList.remove("show");
  }
}

function returnToStart() {
  start.classList.add("show");
  start.classList.remove("hide");
  instructions.classList.add("show");
  instructions.classList.remove("hide");
  if (highScoreContainer.classList.contains("show")) {
    highScoreContainer.classList.add("hide");
    highScoreContainer.classList.remove("show");
  }
  if (choices.classList.contains("show")) {
    choices.classList.add("hide");
    choices.classList.remove("show");
  }
  if (questionContainer.classList.contains("show")) {
    questionContainer.classList.add("hide");
    questionContainer.classList.remove("show");
  }
  if (ending.classList.contains("show")) {
    ending.classList.add("hide");
    ending.classList.remove("show");
  }
  if (timer.classList.contains("show")) {
    timer.classList.add("hide");
    timer.classList.remove("show");
  }
}

//This on click event will trigger the beginQuiz function
start.addEventListener("click", beginQuiz);

//on button click will bring user to highscore screen
highScoreBtn.addEventListener("click", viewHighScore);

//when user submits their score & initials, it will save high score to local storage
initialsBtn.addEventListener("click", addToHighscore);

returnToStartBtn.addEventListener("click", returnToStart);

goBack.addEventListener("click", returnToStart);
