let quizQuestions = [
   {
      question: "question 1",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer a"
   },
   {
      question: "question 2",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer c"
   },
   {
      question: "question 3",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer d"
   },
   {
      question: "question 4",
      options: [
         "answer a",
         "answer b",
         "answer c",
         "answer d"
      ],
      correctAnswer: "answer b"
   }   
];

let currentTimeEl = document.querySelector('#current-time');
let startScreenEl = document.querySelector('#start-screen');
let quizEl = document.querySelector('#quiz');
let endQuizEl = document.querySelector('#end-quiz');
let scoreBoardEl = document.querySelector('#score-board');
let startButtonEl = document.querySelector('#start-btn');
let submitButtonEl = document.querySelector('#submit-btn');

let countDown = 60;
let timerId;
let questionIndex = 0;
let quizOptionsIndex = 0;

let playerScore = 0;

quizEl.style.display = "none";
endQuizEl.style.display = "none";
scoreBoardEl.style.display = "none";

function startQuiz() {
   startScreenEl.style.display = "none";
   quizEl.style.display = "block";

   timerId = setInterval(clockTick, 1000);

   generateQuestion();   
  
};

function generateQuestion() {
   let choicesEl = document.querySelector('#choices');
   
   let currentQuestion = quizQuestions[questionIndex];
   
   let questionTitleEl = document.querySelector('#question-title');

   questionTitleEl.textContent = currentQuestion.question;

   let buttonsDiv = document.createElement("div");
   for (i = 0; i < 4; i++) {
      let answerButtonEl = document.createElement("button");
      answerButtonEl.textContent = currentQuestion.options[i];
      buttonsDiv.appendChild(answerButtonEl);
      //answerButtonEl.addEventListener('click', saveScore(answerButtonEl, currentQuestion));
      answerButtonEl.addEventListener('click', nextQuestion);
   };
   choicesEl.appendChild(buttonsDiv);
};

function nextQuestion() {
   if (questionIndex > 2) {
      endQuiz();
   }

   else {
      questionIndex++;
      let choicesEl = document.querySelector('#choices');
      choicesEl.removeChild(choicesEl.childNodes[0]);
      generateQuestion();
   }
};

// function saveScore(answerButtonEl, currentQuestion) {
//     if (answerButtonEl.textContent === currentQuestion.correctAnswer) {
//       playerScore = playerScore + 5;
//    } else {
//       countDown = countDown - 5;
//    }  
//  };

function clockTick() {
 countDown--;
 currentTimeEl.textContent = countDown;

 if (countDown < 1) {
    endQuiz();
 }
};

function endQuiz() {
   clearInterval(timerId);
   currentTimeEl.textContent = 60;
   quizEl.style.display = "none";
   endQuizEl.style.display = "block";

   let finalScoreEl = document.querySelector('#final-score');
   finalScoreEl.textContent = playerScore;

   //setItem localStorage, initials and score

   //add event listener to submit button, take you to score-board

};

function scoreBoard() {
   endQuizEl.style.display = "none";
   scoreBoardEl.style.display = "block";
};

startButtonEl.onclick = startQuiz