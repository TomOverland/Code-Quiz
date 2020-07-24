let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let counter = document.getElementById("count");
let start = document.getElementById("start");
let choices = document.getElementById("choices");
let instructions = document.getElementById("instructions");
let questionContainer = document.getElementById("questionContainer");
let timeLeft = 70;

let questions;

// This function will hide my start button on click, and reveal the buttons.
function hideStart() {
  //console.log("Start");  This console.log will add "start" to the console to give me a quick idea if the button is working
  //console.log(start.style);   This console.log tells me what the "style" of the start element is targeting
  if (start.classList.contains("show")) {
    start.classList.add("hide");
    start.classList.remove("show");
  }
  if (choices.classList.contains("hide")) {
    choices.classList.add("show");
    choices.classList.remove("hide");
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
}

// This function is what counts the clock down by 1 second
function countDown() {
  //console.log("countdown"); //this console.log tests if the addEventListener is working.
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

//This on click event will trigger the hideStart function
start.addEventListener("click", hideStart);
start.addEventListener("click", countDown);
