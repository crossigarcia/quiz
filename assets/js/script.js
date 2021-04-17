let quizQuestions = [
   {
      question: "question 1",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer c"
   },
   {
      question: "question 1",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer c"
   },
   {
      question: "question 1",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer c"
   },
   {
      question: "question 1",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer c"
   },   
];

let currentTimeEl = document.querySelector('#current-time');
let startScreenEl = document.querySelector('#start-screen');
let quizEl = document.querySelector('#quiz');
let endQuizEl = document.querySelector('#end-quiz');
let startButtonEl = document.querySelector('#start-btn');
let submitButtonEl = document.querySelector('#submit-btn');

let countDown = 60;
let timerId;
let highScore = 0;
let questionIndex = 0;
let quizOptionsIndex = 0;

quizEl.style.display = "none";
endQuizEl.style.display = "none";

function startQuiz() {
   startScreenEl.style.display = "none";
   quizEl.style.display = "block";

   timerId = setInterval(clockTick, 1000);

   generateQuestion();   
  
};

function generateQuestion() {
   let currentQuestion = quizQuestions[questionIndex];
   let questionTitleEl = document.querySelector('#question-title');

   questionTitleEl.textContent = currentQuestion.question;

   let choicesEl = document.querySelector('#choices');
   let currentOptionEl = quizQuestions[quizOptionsIndex];
   
   for (let i = 0; i < options.length; i++);
   

   //choicesEl.addEventListener('click', validateAnswer);
};

function validateAnswer() {
   questionIndex++;
};

function clockTick() {
 countDown--;
 currentTimeEl.textContent = countDown;

 if (countDown < 1) {
    endQuiz();
 }
};

function endQuiz() {
   clearInterval(timerId);
};

startButtonEl.onclick = startQuiz