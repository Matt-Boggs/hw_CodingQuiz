// object array of questions
//should be able to reference this array as part of the question function, so I dont have to write a function for each question
//the aim is to set the content of the referenced answer buttons, for each iteration

var questionArr = [
    {questionActual : "this is the first question",
     answerActA : "this is the answer",
     answerActB : "this is the second option",
     answerActC : "this is the third option",
     answerActD : "this is the fourth option"},

    {questionActual : "this is the second question",
     answerActA : "this is the 2nd first option",
     answerActB : "this is the answer",
     answerActC : "this is the 2nd third option",
     answerActD : "this is the 2nd fourth option"},
     
    {questionActual : "this is the third question",
     answerActA : "this is the 2nd first option",
     answerActB : "this is the 2nd second option",
     answerActC : "this is the answer",
     answerActD : "this is the 2nd fourth option"}

    
];
x=0;
score = 10 //amount of questions, each wrong question subtracts
// or
//score = 0 each correct answer adds

//Variables for start button
var start = document.getElementById("start").addEventListener("click", startTest);
var counter = document.getElementById("timerActual");
var timeLeft = 10;

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
    }, 1000);
    
    question(0);
};

function correct(){
    document.getElementById("say-correct").style.display = "block";
    document.getElementById("say-incorrect").style.display = "none";
    console.log("correct");
    x++;
    question(x);
    
    //display correct underneath card    
}

function incorrect(){
    document.getElementById("say-correct").style.display = "none";
    document.getElementById("say-incorrect").style.display = "block";
    console.log("incorrect");
    score--;
    timeLeft-5;
    console.log(score);
    x++;
    question(x);
    
    //display incorrect underneath card
};
//the correct and incorrect functions work correctly


//
//THEN I am presented with a question
function question(x){
    
        topQuestion.textContent = questionArr[x].questionActual;
        answerA.textContent = questionArr[x].answerActA;
        answerB.textContent = questionArr[x].answerActB;
        answerC.textContent = questionArr[x].answerActC;
        answerD.textContent = questionArr[x].answerActD;
    
        //this is a test
            if (x === 0){
                answerA.addEventListener("click", correct );
                answerB.addEventListener("click", incorrect);
                answerC.addEventListener("click", incorrect);
                answerD.addEventListener("click", incorrect);
            }
            if (x === 1){
                answerA.addEventListener("click", incorrect);
                answerB.addEventListener("click", correct);
                answerC.addEventListener("click", incorrect);
                answerD.addEventListener("click", incorrect);
            }
            if (x === 2){
                answerA.addEventListener("click", incorrect );
                answerB.addEventListener("click", incorrect);
                answerC.addEventListener("click", correct);
                answerD.addEventListener("click", incorrect);
            }

                
            
            
                
                
                
                

                

            
                //display incorrect, and eventually take time off of timer
            
            //move onto next question
        //

        // if(x > questionArr.length){
        //     console.log("stop");
        //     clearInterval(countdown)
        // } else {
        //     x++;
        //     question(x);
        // }
        
        
};
if (timeLeft === 0){
    clearInterval(countdown);
    alert("times up");
};
// WHEN I answer a question(how does code know if its a correct answer)
// THEN I am presented with another question <----- "another" i.e. Function
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over  (another function)
// WHEN the game is over
// THEN I can save my initials and score (will learn how to do this 929)


//custom attribute for which answer is the correct one (attribute is data-correct)
