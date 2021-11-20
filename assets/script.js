//assign necessary variables

var timeEl = document.querySelector(".timer-sec");
var startEl = document.querySelector("#start");
var questionsEl = document.getElementById("questions");
var quizEl = document.getElementById("quiz");
var nextEl = document.querySelector(".next");
var countdown = 100;


var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// Timer countdown function 
function timer() {
    var timeInterval = setInterval(function () {

        if (countdown > 0) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timeEl.textContent = countdown;
            // Decrement `timeLeft` by 1
            countdown--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timeEl.textContent = countdown;
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
              alert ("game over");
        }
    }, 1000);
}
startEl.addEventListener("click", timer);
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// // THEN I can save my initials and score

