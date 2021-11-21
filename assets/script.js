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
// THEN I can save my initials and score



var timeEl = document.querySelector(".timer-sec");
var startEl = document.querySelector("#start");
var questionsEl = document.getElementById("question");
var quizEl = document.getElementById("quiz");
var nextEl = document.querySelector(".next");
var countdown = 100;

var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

choices= A, B, C, D
// var runningQuestion = 0;

var correct = 0;

// list of quiz questions
var questions = [
    {
        question: "Who created HTML?",
        choiceA: "A. Larry Page", 
        choiceB: "B. Tim Berners-Lee", 
        choiceC: "C. Ada Lovelace",
        choiceD: "D. Bob the Builder",
        correctAnswer: "A. Larry Page"
    },
    {
        question: "What does HTML stand for?",
        choiceA:"Hyper Text Markup Language",
        choiceB: "Hi Tom My Loser",
        choiceC: "House Today Makes Loner", 
        choiceD: "Hey Tim My Lies",
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "When was javascript created?",
        A: "1984", 
        B:" 2001", 
        C: "1995", 
        D: "1987",
        correctAnswer: "1995"
    },
    {
        question: "When was HTML created? \n  A: 1955",
        A: "1955",
        B: "1969",
        C: "1993",
        D: "2000",
        correctAnswer: "1993"
    },
    {
        question: "What was javascript originally called?",
        A: "livescript",
        B: "java", 
        C: "coffee",
        D: "mocha",
        correctAnswer: "mocha"
    }
]


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

// Show questions on quiz
var lastQuestionIndex= questions.length - 1;
var questionIndex = 0
var choices = document.querySelector('#choice')
function renderQuestion() {
    var q=questions[questionIndex]
    question.innerHTML= "<p>"+q.question+"</p>"
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML= q.choiceB;
    choiceC.innerHTML= q.choiceC;
    choiceD.innerHTML= q.choiceD;
    
    // for (var q = 0; q < q.length; q++) {
            
}
startEl.addEventListener("click", renderQuestion); 
startEl.addEventListener("click", timer);

    var choices = document.querySelector('#choice')
        

    choices.addEventListener("click", function (event) {
        var choicesAnswer = event.choices.innerHTML
        console.log(choicesAnswer)
             if (choicesAnswer === q[questionIndex].correctAnswer) {
                 questionIndex++
                renderQuestion()
                }
                else {
                    timer -= 10
                    questionIndex++
                    renderQuestion()
                }
            // }
        }
        )
    
//Set High Score
function saveScore() {
    var userName= prompt ("Enter your name to save your score.")
    localStorage.setItem(userName, countdown)
}

