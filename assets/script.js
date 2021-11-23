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
        choiceA: "Larry Page", 
        choiceB: "Tim Berners-Lee", 
        choiceC: "Ada Lovelace",
        choiceD: "Bob the Builder",
        correctAnswer: "Larry Page"
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
        choiceA: "1984", 
        choiceB:" 2001", 
        choiceC: "1995", 
        choiceD: "1987",
        correctAnswer: "1995"
    },
    {
        question: "When was HTML created? \n  A: 1955",
        choiceA: "1955",
        choiceB: "1969",
        choiceC: "1993",
        choiceD: "2000",
        correctAnswer: "1993"
    },
    {
        question: "What was javascript originally called?",
        choiceA: "livescript",
        choiceB: "java", 
        choiceC: "coffee",
        choiceD: "mocha",
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
var questionNum= 0 
var q=questions[questionNum]

function renderQuestion() {
    question.innerHTML= "<p>"+q.question+"</p>"
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML= q.choiceB;
    choiceC.innerHTML= q.choiceC;
    choiceD.innerHTML= q.choiceD;
    
    // for (var q = 0; q < q.length; q++) {
            
}
startEl.addEventListener("click", renderQuestion); 
startEl.addEventListener("click", timer);

    var choices = document.querySelector('.choice')
    

    choices.addEventListener("click", function (event) {
        // for (var i = 0; i < questions.length; i++) {
        var choicesAnswer = event.target.innerHTML
        console.log(choicesAnswer)
            //  if (choicesAnswer === q[questionIndex].correctAnswer) {
             if (choicesAnswer === questions[questionNum].correctAnswer) {
                console.log("answer is correct")
                alert ("answer is correct")
                // questionNum++
                // renderQuestion()
                }

                else {
                    alert ("answer is incorrect")
                    timer -= 10
                    // questionNum++
                    // renderQuestion()
                }
            // }
        }
    )     
    var addQuestion=document.querySelector('#next')

    function nextQuestion(){
        questionNum++
        renderQuestion()
        console.log (questionNum)
    }
    
    addQuestion.addEventListener("click", nextQuestion)

//Set High Score
var score= document.querySelector ('.scores')
function saveScore() {
    var userName= prompt ("Enter your name to save your score.")
    localStorage.setItem(userName, countdown)
}

score.addEventListener('click', saveScore)
    
