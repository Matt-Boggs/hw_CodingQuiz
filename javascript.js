// object array of questions
//should be able to reference this array as part of the question function, so I dont have to write a function for each question
//the aim is to set the content of the referenced answer buttons, for each iteration

var questionArr = [
    
];

//Variables for start button
var start = document.getElementById("start").addEventListener("click", startTest);
var counter = document.getElementById("timerActual");
var timeLeft = 100;

//variables for question header and answer buttons
var topQuestion = document.getElementById("topQuestion");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");

//Timer starts of click, runs this function
function startTest(){
    var countdown = setInterval(function(){
        timeLeft--;
        counter.textContent = "Timer: " + timeLeft;
    }, 1000)
};

//THEN I am presented with a question
function question(){

}
// WHEN I answer a question(how does code know if its a correct answer)
// THEN I am presented with another question <----- "another" i.e. Function
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over  (another function)
// WHEN the game is over
// THEN I can save my initials and score (will learn how to do this 929)


//custom attribute for which answer is the correct one (attribute is data-correct)
