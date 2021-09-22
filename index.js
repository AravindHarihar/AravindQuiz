var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ")
console.log("Welcome to the quiz " + userName +"!!!")
console.log("Let us see how well you know aravind")
console.log("------------------------------------")

var score = 0;

var quesAnsArray = [
  {
    question : "What is my age? ",
    answer: "25"
  },
  {
    question : "Which city do I live in? ",
    answer: "Bangalore"
  },
  {
    question : "What is my favourite sport? ",
    answer: "Swimming"
  },
  {
    question : "Where do I work? ",
    answer: "Bluejeans"
  },
]


function play(question, answer){
  var userAnswer = readlineSync.question(question)
    if(userAnswer === answer){
      console.log("You are right");
      score ++;
    }else{
      console.log("You are wrong")
    }

    console.log("Your score is : " + score)
    console.log("------------------------------------")
}

for(i=0; i< quesAnsArray.length; i++){
  var currentQuestion = quesAnsArray[i]
  play(currentQuestion.question, currentQuestion.answer)
}