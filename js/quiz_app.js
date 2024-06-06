const Quizes = [
  {
    id: 1,
    question: "What is the capital of Bangladesh?",
    options: ["Dhaka", "Chittagong", "Rajshahi", "Khulna"],
    answer: "Dhaka",
    answers: ["Dhaka", "Chittagong", "Rajshahi"],
  },
  {
    id: 2,
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen",
    answers: ["Yen", "Dollar", "Euro"],
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    id: 4,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 5,
    question: "What is the currency of the United States?",
    options: ["Dollar", "Euro", "Yen", "Pound"],
    answer: "Dollar",
  },
  {
    id: 6,
    question: "What is the smallest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    id: 7,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Perth", "Canberra"],
    answer: "Canberra",
  },
  {
    id: 8,
    question: "What is the currency of the United Kingdom?",
    options: ["Dollar", "Euro", "Yen", "Pound"],
    answer: "Pound",
  },
  {
    id: 9,
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Venus",
  },
  {
    id: 10,
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    id: 11,
    question: "What is the currency of China?",
    options: ["Yuan", "Dollar", "Euro", "Pound"],
    answer: "Yuan",
  },
  {
    id: 12,
    question: "What is the coldest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Neptune"],
    answer: "Neptune",
  },
  {
    id: 13,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    answer: "Berlin",
  },
  {
    id: 14,
    question: "What is the currency of Russia?",
    options: ["Ruble", "Dollar", "Euro", "Pound"],
    answer: "Ruble",
  },
  {
    id: 15,
    question: "What is the brightest star in our night sky?",
    options: ["Polaris", "Betelgeuse", "Sirius", "Vega"],
    answer: "Sirius",
  },
];

let totalQuiz = Quizes.length;
let rightAnswer = 0;
let wrongAnswer = 0;
let rightAnswerIndicatore;
let wrongAnswerIndicatore;
let countDownDurationSeconds = 5;
let answerTimeOut = 3;

const digitFormateHandler = (singledigitfiger) => {
  return (singledigitfiger =
    singledigitfiger < 10 ? `0${singledigitfiger}` : singledigitfiger);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index
    let j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const createQuiz = (ul, quizData) => {
  shuffleArray(quizData).forEach((quiz, index) => {
    shuffleArray(quiz.options);

    let li = document.createElement("li");
    li.dataset.quizindex = index;
    li.innerHTML = `<div class="question">
    <h3 class="question-text">${quiz.question}</h3>
    <span><small>*</small>1 point</span>
</div>
<label for="option_1${quiz.id}">
    <input type="radio" name="quiz-option${index}" data-index="${index}" data-value="${quiz.options[0]}" id="option_1${quiz.id}">
    <span class="text" id="text">${quiz.options[0]}</span>
</label>
<label for="option_2${quiz.id}">
    <input type="radio" name="quiz-option${index}" data-index="${index}" data-value="${quiz.options[1]}" id="option_2${quiz.id}">
    <span class="text" id="text">${quiz.options[1]}</span>
</label>
<label for="option_3${quiz.id}">
    <input type="radio" name="quiz-option${index}" data-index="${index}" data-value="${quiz.options[2]}" id="option_3${quiz.id}">
    <span class="text" id="text">${quiz.options[2]}</span>
</label>
</label>
<label for="option_4${quiz.id}">
    <input type="radio" name="quiz-option${index}" data-index="${index}" data-value="${quiz.options[3]}" id="option_4${quiz.id}">
    <span class="text" id="text">${quiz.options[3]}</span>
</label>`;

    ul.append(li);
  });
  Array.from(
    document.querySelectorAll("#multiple-choise-quiz-box li label input")
  ).forEach((input) => {
    if (input.type === "radio") {
      input.addEventListener("change", () => {
        if (countDownDurationSeconds <= 0) {
          checkedOptionChecker(input);
        }
      });
    }
  });
};

const rightAnswerChecker = (checkedOptionValue, checkedQuestionAnswer) => {
  if (checkedOptionValue === checkedQuestionAnswer) {
    return true;
  }
};

const shakingAnimationRemover = (element) => {
  setTimeout(() => {
    if (element.classList.contains("shaking-animation")) {
      element.classList.remove("shaking-animation");
    }
  }, 1000);
};

const disabledHandler = (Option) => {
  Option.parentElement.parentElement
    .querySelectorAll('input[type="radio"]')
    .forEach((inp) => {
      console.log(inp);
      inp.disabled = true;
    });
};

const checkedOptionChecker = (inputOptions) => {
  if (inputOptions.checked) {
    let checkedOptionValue = inputOptions.dataset.value;
    let checkedQuestionIndex = inputOptions.dataset.index;
    let checkedQuestionAnswer = Quizes[checkedQuestionIndex].answer;
    let spanText =
      inputOptions.parentElement.parentElement.querySelector(".question span");
    let isRightAnswer = rightAnswerChecker(
      checkedOptionValue,
      checkedQuestionAnswer
    );
    let rightAnswerElement = document.querySelector("#rightanswer");
    let wrongAnswerElement = document.querySelector("#wronganswer");
    console.log(wrongAnswerElement)

    disabledHandler(inputOptions);

    if (isRightAnswer) {
      rightAnswer++;
      rightAnswerElement.innerHTML = `Right Answer : ${digitFormateHandler(
        rightAnswer
      )} `;
      rightAnswerElement.classList.add("shaking-animation");
      inputOptions.parentElement.classList.add("rightanswer");
      inputOptions.parentElement.parentElement.classList.add("rightanswer");
      spanText.innerHTML = `<small>*</small>1/1 point`;
      shakingAnimationRemover(rightAnswerElement);
    } else {
      wrongAnswer++;
      wrongAnswerElement.innerHTML = `Wrong Answer : ${digitFormateHandler(
        wrongAnswer
      )} `;
      wrongAnswerElement.classList.add("shaking-animation");
      inputOptions.parentElement.classList.add("wronganswer");
      inputOptions.parentElement.parentElement.classList.add("wronganswer");
      spanText.innerHTML = `<small>*</small>0/1 point`;
      shakingAnimationRemover(wrongAnswerElement);
    }
  }
};

let countdownText = document.querySelector(".controls h2");
document
  .getElementById("multi_quiz_start_btn")
  .addEventListener("click", () => {
    countdownText.innerHTML = `Your Quiz is being ready will serve after <mark>${digitFormateHandler(
      countDownDurationSeconds
    )}</mark> seconds.`;
    document.getElementById("multi_quiz_start_btn").style.display = "none";

    let countDownOfStartQuiz = setInterval(() => {
      countDownDurationSeconds--;

      countdownText.innerHTML = `Your Quiz is being ready will serve after <mark>${digitFormateHandler(
        countDownDurationSeconds
      )}</mark> seconds.`;

      if (countDownDurationSeconds === 0) {
        document.querySelector(".controls").style.display = "none";
        clearInterval(countDownOfStartQuiz);
        let quiz_box = document.getElementById("multiple-choise-quiz-box");
        if (!quiz_box.innerHTML) {
          createQuiz(quiz_box, Quizes);
          document.querySelector(".header h2").style.display = "flex";
        }
      }
    }, 1000);
  });

// console.table(shuffleArray(quizes))
