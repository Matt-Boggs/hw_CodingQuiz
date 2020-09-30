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
     answerActA : "this is the 3rd first option",
     answerActB : "this is the 3rd second option",
     answerActC : "this is the answer",
     answerActD : "this is the 3rd fourth option"}
];

x = 0; // Represents the question number in the question function
score = 0;

// Variables for start button
var start = document.getElementById("start").addEventListener("click", startTest);

// Variables for timer
var counter = document.getElementById("timerActual");
var timeLeft = 10;
counter.textContent = "Timer: " + timeLeft;

//variables for question header and answer buttons
var topQuestion = document.getElementById("topQuestion");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");

// Timer function  // Needed to put the interval clearing if INSIDE of the function
function countdown(){
    var countBegin = setInterval(function(){
        timeLeft--;
        counter.textContent = "Timer: " + timeLeft;
        if (timeLeft === 0){
            clearInterval(countBegin);
            endTest();
        };
        if (timeLeft < 0){
            clearInterval(countBegin);
            counter.textContent = "Timer:";
        };
    },1000);     
};
//Timer starts with click, runs this function
function startTest(){
    answerA.style.display = "block";
    answerB.style.display = "block";
    answerC.style.display = "block";
    answerD.style.display = "block";
    timeLeft = 10;
    countdown();// Timer begins
    question(0);// First question is asked
};

function endTest(){
    timeLeft = -1
    console.log("test end");
    topQuestion.textContent = "Your score is " + score + " out of " + questionArr.length;
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    answerD.style.display = "none";

    var info = document.createElement("h3");
    info.textContent = "Save your highscore?";
    var hsName = document.createElement("input");
    hsName.setAttribute("type", "text");
    hsName.setAttribute("placeholder", "input your initials here");
    var card = document.getElementById("input-area");
    card.appendChild(info);
    card.appendChild(hsName);
    hsName.addEventListener("keydown", function(e) {
        if(e.key === "Enter") {
            localHs = hsName.value;
            console.log(localHs);
            console.log(score)
            saveName();
         }
    });
};



function correct(){
    document.getElementById("say-correct").style.display = "block";
    document.getElementById("say-incorrect").style.display = "none";
    x++;
    score++;
    if (x < questionArr.length){
        question(x);
    } else {
        endTest();
    }   
};
function incorrect(){
    document.getElementById("say-correct").style.display = "none";
    document.getElementById("say-incorrect").style.display = "block";
    console.log("incorrect");
    x++;
    if (x < questionArr.length){
        question(x);

    } else {
        endTest();
    }
};


//
//THEN I am presented with a question
function question(x){
    topQuestion.textContent = questionArr[x].questionActual;
    answerA.textContent = questionArr[x].answerActA;
    answerB.textContent = questionArr[x].answerActB;
    answerC.textContent = questionArr[x].answerActC;
    answerD.textContent = questionArr[x].answerActD;
    
        //  Adding and removing eventlisteners is the long way I'm sure
        if (x === 0){
            answerA.addEventListener("click", correct );
            answerB.addEventListener("click", incorrect);
            answerC.addEventListener("click", incorrect);
            answerD.addEventListener("click", incorrect);
        }
        if (x === 1){
            answerA.removeEventListener("click", correct );
            answerB.removeEventListener("click", incorrect);
            answerC.removeEventListener("click", incorrect);
            answerD.removeEventListener("click", incorrect);

            answerA.addEventListener("click", incorrect);
            answerB.addEventListener("click", correct);
            answerC.addEventListener("click", incorrect);
            answerD.addEventListener("click", incorrect);
        }
        if (x === 2){
            answerA.removeEventListener("click", incorrect);
            answerB.removeEventListener("click", correct);
            answerC.removeEventListener("click", incorrect);
            answerD.removeEventListener("click", incorrect);

            answerA.addEventListener("click", incorrect );
            answerB.addEventListener("click", incorrect);
            answerC.addEventListener("click", correct);
            answerD.addEventListener("click", incorrect);
        }
        if (x === questionArr.length){
            answerA.removeEventListener("click", incorrect );
            answerB.removeEventListener("click", incorrect);
            answerC.removeEventListener("click", correct);
            answerD.removeEventListener("click", incorrect);
            endTest();
        }       
};
    
function saveName(){
    localStorage.setItem("yourScore", score)
    localStorage.setItem("initials", localHs);
    alert("saved");
}

function showHS(){
    scorePage = document.getElementById("localScores");
    var yourInit = localStorage.getItem("initials");
    var yourScore = localStorage.getItem("yourScore");
    scorePage.textContent = yourInit + ":" + yourScore;
}



