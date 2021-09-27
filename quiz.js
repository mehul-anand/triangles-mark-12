const quizForm = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const answers = ["90°", "right angled","equilateral"];

function sumbitAndCheck() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === answers[index]) {
            score = score + 1;
        }index = index + 1;
    }
    if (index === 3){
        output.innerText = "Your Score is : " + score;
    }else{
        output.innerText = "Please answer all the questions"
    }

}

submitBtn.addEventListener("click", sumbitAndCheck)
