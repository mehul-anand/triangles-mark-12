const quizForm = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const answers = ["90°", "right angled"];

function sumbitAndCheck() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === answers[index]) {
            score = score + 1;
        }index = index + 1;
    }   
    output.innerText = "Your Score is : " + score;
}

submitBtn.addEventListener("click", sumbitAndCheck)
