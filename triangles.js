const inputAngles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-triangle");
const output = document.querySelector("#output")

function checkNegatives(){
    if (Number(inputAngles[0].value ==0) || Number(inputAngles[1].value ==0) || Number(inputAngles[2].value ==0)){
        output.innerText = "Please fill all the fields (non-zero)"
        inputAngles[0].placeholder = 0
        inputAngles[1].placeholder = 0
        inputAngles[2].placeholder = 0
    }else{
        if (Number(inputAngles[0].value)<0 || Number(inputAngles[1].value)<0 || Number(inputAngles[2].value)<0){
            output.innerText = "Angles can't be negative"
        }else{
            return "Positive"
        }
    }
}

function checkForTriangle(){
    const checker = checkNegatives()
    if (checker == "Positive"){
        const angleOne = Number(inputAngles[0].value)
        const angleTwo = Number(inputAngles[1].value)
        const angleThree = Number(inputAngles[2].value)
        const sum = angleOne+angleTwo+angleThree
        if (sum === 180){
            output.innerText ="Yes ! It is a Triangle"
        }else{
            output.innerText ="No ! It is not a Triangle"
        }
    }
}

checkButton.addEventListener("click", checkForTriangle)