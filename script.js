// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "1. What does CPU stand for?",
    answers: [
      { text: "Central Program Unit", correct: false },
      { text: "Central Processing Unit", correct: true },
      { text: "Control Processing Unit", correct: false },
      { text: " Computer Processing Unit", correct: false },
    ],
  },
  {
    question: "2. Which one is an example of open-source software?",
    answers: [
      { text: "Microsoft Word", correct: false },
      { text: "Adobe Photoshop", correct: false },
      { text: "Linux", correct: true },
      { text: "CorelDRAW", correct: false },
    ],
  },
  {
    question: "3. What is the primary function of RAM?",
    answers: [
      { text: "Store permanent data", correct: false },
      { text: "Perform calculations", correct: false },
      { text: "Store temporary data", correct: true },
      { text: "Control system operations", correct: false },
    ],
  },
  {
    question: "4. In networking, what does IP stand for?",
    answers: [
      { text: "Internet Provider", correct: false },
      { text: "Internal Protocol", correct: false },
      { text: "Internet Protocol", correct: true },
      { text: "Integrated Program", correct: false },
    ],
  },
  {
    question: "5. Which protocol is used to browse the web?",
    answers: [
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "HTTP", correct: true },
      { text: "SNMP", correct: false },
    ],
  },
  {
    question: "6. What is the main language used to create Android apps?",
    answers: [
      { text: "Swift", correct: false },
      { text: "C#", correct: false },
      { text: "Java", correct: true },
      { text: "Python", correct: false },
    ],
  },
    {
    question: "7. Which type of malware demands payment to restore data?",
    answers: [
      { text: "Virus", correct: false },
      { text: "Worm", correct: false },
      { text: "Ransomware", correct: true },
      { text: "Spyware", correct: false },
    ],
  },
    {
    question: "8. What is the full form of URL?",
    answers: [
      { text: "Uniform Resource Locator", correct: true },
      { text: "Universal Resource Line", correct: false },
      { text: "Uniform Retrieval Link", correct: false },
      { text: "Unique Reference Locator", correct: false },
    ],
  },
    {
    question: "9. What is the function of an operating system?",
    answers: [
      { text: "Perform arithmetic", correct: false },
      { text: "Connect to the internet", correct: false },
      { text: "Manage computer hardware", correct: true },
      { text: "Write software code", correct: false },
    ],
  },
    {
    question: "10. Which database is best known for storing data in tables with rows and columns?",
    answers: [
      { text: "MongoDB", correct: false },
      { text: "Firebase", correct: false },
      { text: "MySQL", correct: true },
      { text: "Cassandra", correct: false },
    ],
  },
    {
    question: "11. What does DNS stand for?",
    answers: [
      { text: "Dynamic Network Service", correct: false },
      { text: "Domain Name System", correct: true },
      { text: "Data Name Server", correct: false },
      { text: "Digital Network System", correct: false },
    ],
  },
    {
    question: "12. Which of these is a compiled programming language?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: true },
      { text: "PHP", correct:  false},
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "13. Which company developed the Windows operating system?",
    answers: [
      { text: "Apple", correct: false },
      { text: "IBM", correct: false },
      { text: "Google", correct:  false},
      { text: "Microsoft", correct: true },
    ],
  },
  {
    question: "14. What is Git mainly used for?",
    answers: [
      { text: "Image editing", correct: false },
      { text: "Version control", correct: true },
      { text: "File transfer", correct:  false},
      { text: "Software testing", correct: false },
    ],
  },
  {
    question: "15. Which of the following is not a cloud computing platform?",
    answers: [
      { text: "AWS", correct: false },
      { text: "Azure", correct: false },
      { text: "Google Cloud", correct:  false},
      { text: "Oracle VM", correct: true },
    ],
  },
  {
    question: "16. Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct:  false},
      { text: "<url>", correct: false },
    ],
  },
  {
    question: "17. What does SSD stand for in computer storage?",
    answers: [
      { text: "Solid State Drive", correct: true },
      { text: "Serial Storage Disk", correct: false },
      { text: "Static System Drive", correct:  false},
      { text: "Secure Storage Device", correct: false },
    ],
  },
  {
    question: "18. Which one is a NoSQL database?",
    answers: [
      { text: "Oracle", correct: false },
      { text: "PostgreSQL", correct: false },
      { text: "MongoDB", correct:  true},
      { text: "SQLite", correct: false },
    ],
  },
  {
    question: "19. What does GUI stand for?",
    answers: [
      { text: "Graphical User Interface", correct: true },
      { text: "Global Utility Interface", correct: false },
      { text: "General User Interaction", correct:  false},
      { text: "Graphical Unified Interface", correct: false },
    ],
  },
  {
    question: "20. What is the function of a compiler?",
    answers: [
      { text: "Run code", correct: false },
      { text: "Convert code to machine language", correct: true },
      { text: "Edit source code", correct:  false},
      { text: "JDebug code", correct: false },
    ],
  },
  {
    question: "21. What does IoT stand for?",
    answers: [
      { text: "Internet of Things", correct: true },
      { text: "Input over Time", correct: false },
      { text: "Internet of Technology", correct:  false},
      { text: "Integration of Tools", correct: false },
    ],
  },
  {
    question: "22. Which of these is NOT a programming language?",
    answers: [
      { text: "Ruby", correct: false },
      { text: "HTML", correct: true },
      { text: "Python", correct:  false},
      { text: "Java", correct: false },
    ],
  },
  {
    question: "23. Which port is typically used for HTTPS?",
    answers: [
      { text: "21", correct: false },
      { text: "80", correct: false },
      { text: "443", correct:  true},
      { text: "8080", correct: false },
    ],
  },
  {
    question: "24. Which command is used to list files in a Linux directory?",
    answers: [
      { text: "ls", correct: true },
      { text: "list", correct: false },
      { text: "dir", correct:  false},
      { text: "show", correct: false },
    ],
  },
  {
    question: "25. What is the main purpose of a database index?",
    answers: [
      { text: "Store data", correct: false },
      { text: "Ensure security", correct: false },
      { text: "Speed up queries", correct:  true},
      { text: "Normalize data", correct: false },
    ],
  },
  
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false; /* this will disable the answer */

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";/*this math will give the persent correctly  */

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;// this will gives the selected button 
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}