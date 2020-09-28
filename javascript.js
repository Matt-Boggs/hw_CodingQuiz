//GIVEN I am taking a code quiz
// WHEN I click the start button

//Variables for start button
var start = document.getElementById("start").addEventListener("click", startTest);
var counter = document.getElementById("timerActual")
var timeLeft = 100


//Timer starts of click, runs this function
function startTest(){
    var countdown = setInterval(function(){
        timeLeft--;
        counter.textContent = "Timer: " + timeLeft;
    }, 1000)
}

// THEN a timer starts 
//THEN I am presented with a question
// WHEN I answer a question(how does code know if its a correct answer)
// THEN I am presented with another question <----- "another" i.e. Function
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over  (another function)
// WHEN the game is over
// THEN I can save my initials and score (will learn how to do this 929)


//custom attribute for which answer is the correct one (attribute is data-correct)
