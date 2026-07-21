const questions = [
  {
    question: "Which is largest animal in the world ?" ,
    answers : [
      {text: "Shark",correct: false},
      {text: "Blue Whale",correct: true},
      {text: "Elephant",correct: false},
      {text: "Giraffe",correct: false}
    ]
  },
  {
    question: "who serve for the longest period as the Prime Minister of India ?" ,
    answers : [
      {text: "Jawahar lal nehru",correct: true},
      {text: "Narendra Modi",correct: false},
      {text: "Akilesh yadav",correct: false},
      {text: "Sonu sood",correct: false}
    ]
  },
  {
    question: "Who is the king of cricket ?" ,
    answers : [
      {text: "Brian lara ",correct: false},
      {text: "ms  Dhoni",correct: false},
      {text: "Ricky Ponting ",correct: false},
      {text: "Virat kohli",correct: true}
    ]
  },
  {
    question: "Who is the national bird of india ?" ,
    answers : [
      {text: "peacock",correct: true},
      {text: "Duck",correct: false},
      {text: "Parrot",correct: false},
      {text: "Penguin",correct: false}
    ]
  },
  {
    question: " Which constitutional amendment act introduced the Anti-Defection Law into the Indian Constitution?" ,
    answers : [
      {text: "The 52nd Constitutional Amendment Act passed in 1985.",correct: true},
      {text: "Bhang bhosda kanoon",correct: false},
      {text: "lauda",correct: false},
      {text: "bhosda",correct: false}
    ]
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score =0;

function startQuiz (){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let question_No = currentQuestionIndex + 1;
  questionElement.innerHTML = question_No + ". " + currentQuestion.question;
  currentQuestion.answers.forEach (answer =>{
    const button =document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer)
  });
}
function resetState(){
  nextButton.style.display ="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer (e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if (isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button=>{
    if (button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    else{
      button.classList.add("incorrect");
    }
    button.disabled = true;
  });
  nextButton.style.display ="block";
}
function showScore (){
  resetState();
  questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};
function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length){
    showQuestion();
  }
  else {
    showScore();
  }
}
nextButton.addEventListener("click",()=>{
  if (currentQuestionIndex  < questions.length){
    handleNextButton();
  }
  else {
    startQuiz();
  }
})
startQuiz();