quiz = {
  "name":"Super Hero Name Quiz",
  "description":"How many super heroes can you name?",
  "question":"What is the real name of ",
  "questions": [
    { "question": "Superman", "answer": "Clarke Kent" },
    { "question": "Batman", "answer": "Bruce Wayne" },
    { "question": "Wonder Woman", "answer": "Dianna Prince" }
  ]
}

var score = 0 // initialize score
play(quiz);

function ask(question) {
  return prompt(quiz.question + question); // this line changes
}

function check(answer) {
  if(answer === quiz.questions[i].answer){
    alert("Correct!");
    score++;
   } else {
       alert("Wrong!");
     }
}

function gameOver(){
    alert("Game Over, you scored " + score + " points");
  }
}

function play(quiz){
  for(var i=0, question, answer, max=quiz.questions.length; i<max;i++) 
  {
    question = quiz.questions[i].question; // change is made here
    answer = ask(question);
    check(answer);
  }
  gameOver();
}

