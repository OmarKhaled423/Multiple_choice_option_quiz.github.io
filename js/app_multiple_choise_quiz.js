const Quizes = [{
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
// console.log(totalQuiz)
let rightAnswer = 0;
let wrongAnswer = 0;
let rightAnswerIndicatore;
let wrongAnswerIndicatore;
let countDownDurationSeconds = 3;
let answerTimeOut = 3;


function singleToDoubleDigitFiger(singledigitfiger) {
    return singledigitfiger = singledigitfiger < 10 ? `0${singledigitfiger}` : singledigitfiger;

}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index
        let j = Math.floor(Math.random() * (i + 1));

        // Swap elements at i and j
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



function createQuiz(ul, quizData) {

    shuffleArray(quizData).forEach((quiz, index) => {
        shuffleArray(quiz.options);

        let li = document.createElement("li");
        li.dataset.quizindex = index;
        li.innerHTML = `<div class="question">
    <h3 class="question-text">${quiz.question}</h3>
    <span><small>*</small>1 point</span>
</div>
<label for="option_1${quiz.id}">
    <input type="checkbox" data-index="${index}" data-value="${quiz.options[0]}" id="option_1${quiz.id}">
    <span class="text" id="text">${quiz.options[0]}</span>
</label>
<label for="option_2${quiz.id}">
    <input type="checkbox" data-index="${index}" data-value="${quiz.options[1]}" id="option_2${quiz.id}">
    <span class="text" id="text">${quiz.options[1]}</span>
</label>
<label for="option_3${quiz.id}">
    <input type="checkbox" data-index="${index}" data-value="${quiz.options[2]}" id="option_3${quiz.id}">
    <span class="text" id="text">${quiz.options[2]}</span>
</label>
</label>
<label for="option_4${quiz.id}">
    <input type="checkbox" data-index="${index}" data-value="${quiz.options[3]}" id="option_4${quiz.id}">
    <span class="text" id="text">${quiz.options[3]}</span>
</label>`

        ul.append(li);

    })

    ;
    [...document.querySelectorAll("#multiple-choise-quiz-box li label input")].forEach((input) => {
        if (input.type === "checkbox") {
            input.addEventListener("change", function () {
                // clearTimeout(rightAnswerIndicatore)
                // rightAnswerIndicatore = setTimeout(() => {

                if (countDownDurationSeconds <= 0) {
                    checkedOptionChecker(input)
                }
                // }, 1000 * answerTimeOut);
            })
        }
    })
}




function rightAnswerChecker(checkedOptionValue, checkedQuestionAnswer) {
    if (checkedOptionValue === checkedQuestionAnswer) {
        return true;
    }

}


function disabledHandler(Option) {
    Option.parentElement.parentElement.querySelectorAll('input[type="checkbox"]').forEach(inp => {
        inp.disabled = true;
    })
}




function fiftyFiftyHandler(Option) {
    Option.parentElement.parentElement.querySelectorAll('input[type="checkbox"]').forEach(inp => {
        let values = []
        if (inp.checked) {
            values.push(inp.dataset.value)
            // let answersDataArray = Quizes[inp.parentElement.dataset.quizindex].answers

            // if (values[Option.dataset.index] === answersDataArray[Option.dataset.index]) {

                // console.log("inp.dataset.value =" + "Quizes[Option.dataset.index].answers");
            // }
            // console.log(inp.dataset.value);
            // console.log("[]"=== "[]")
        }
    })
}


function checkedOptionChecker(inputOptions) {
    if (inputOptions.checked) {
        let checkedOptionValue = inputOptions.dataset.value;
        let checkedQuestionIndex = inputOptions.dataset.index;
        let checkedQuestionAnswer = Quizes[checkedQuestionIndex].answer;
        let isRightAnswer = rightAnswerChecker(checkedOptionValue, checkedQuestionAnswer);



        fiftyFiftyHandler(inputOptions);
        // disabledHandler(inputOptions);

        if (isRightAnswer) {
            rightAnswer++;
            document.querySelector("#rightanswer").innerHTML = `Right Answer : ${singleToDoubleDigitFiger(rightAnswer)} `;

            inputOptions.parentElement.classList.add("rightanswer")
            inputOptions.parentElement.parentElement.classList.add("rightanswer")

        } else {
            wrongAnswer++;
            document.querySelector("#wronganswer").innerHTML = `Wrong Answer : ${singleToDoubleDigitFiger(wrongAnswer)} `;
            inputOptions.parentElement.classList.add("wronganswer")
            inputOptions.parentElement.parentElement.classList.add("wronganswer")

        }
    } else {
        fiftyFiftyHandler(inputOptions);

        if (inputOptions.parentElement.classList.contains("rightanswer")) {
            rightAnswer--;
            inputOptions.parentElement.classList.remove("rightanswer")
            inputOptions.parentElement.parentElement.classList.remove("rightanswer")
        }
        if (inputOptions.parentElement.classList.contains("wronganswer")) {
            inputOptions.parentElement.classList.remove("wronganswer")
            inputOptions.parentElement.parentElement.classList.remove("wronganswer")

        }

    }

}



let countdownText = document.querySelector(".controls h2");
document.getElementById("multi_quiz_start_btn").addEventListener("click", function () {
    countdownText.innerHTML = `Your Quiz is being ready will serve after <mark>${singleToDoubleDigitFiger(countDownDurationSeconds)}</mark> seconds.`
    document.getElementById("multi_quiz_start_btn").style.display = "none";

    let countDownOfStartQuiz = setInterval(() => {
        countDownDurationSeconds--;

        countdownText.innerHTML = `Your Quiz is being ready will serve after <mark>${singleToDoubleDigitFiger(countDownDurationSeconds)}</mark> seconds.`

        if (countDownDurationSeconds == 0) {
            document.querySelector(".controls").style.display = "none";
            clearInterval(countDownOfStartQuiz);
            let quiz_box = document.getElementById("multiple-choise-quiz-box")
            if (!quiz_box.innerHTML) {
                createQuiz(quiz_box, Quizes)
                document.querySelector(".heading h2").style.display = "flex";
            }
        }

    }, 1000)

})








// console.table(shuffleArray(quizes))