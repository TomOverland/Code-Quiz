let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let counter = document.getElementById("count");
let start = document.getElementById("start");
let question = document.getElementById("question");

// This function will hide my start button on click, and reveal the buttons.
function hideStart() {
  //console.log("Start");  This console.log will add "start" to the console to give me a quick idea if the button is working
  //console.log(start.style);   This console.log tells me what the "style" of the start element is targeting
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

//This on click event will trigger the hideStart function
start.addEventListener("click", hideStart);
