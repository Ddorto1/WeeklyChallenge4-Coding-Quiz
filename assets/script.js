//assign necessary variables

var timeEl = document.querySelector(".timer-sec");
var startEl = document.querySelector("#start");
var questionsEl = document.getElementById("questions");
var quizEl = document.getElementById("quiz");
var nextEl = document.querySelector(".next");
var countdown = 100;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// // THEN I can save my initials and score