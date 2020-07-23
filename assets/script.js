let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let counter = document.getElementById("count");
let start = document.getElementById("start");
let question = document.getElementById("question");

function hideStart() {
  console.log("Start");
  console.log(start.style);
  if (start.classList.contains("show")) {
    start.classList.add("hide");
    start.classList.remove("show");
  }
  if (quizButtons.classList.contains("hide")) {
    quizButtons.classList.add("show");
    quizButtons.classList.remove("hide");
  }
  if (question.classList.contains("hide")) {
    question.classList.add("show");
    question.classList.remove("hide");
  }
}

start.addEventListener("click", hideStart);
