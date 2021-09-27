const inputAngles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-triangle");
const output = document.querySelector("#output")

function checkNegatives(){
    if (Number(inputAngles[0].value)<0 || Number(inputAngles[1].value)<0 || Number(inputAngles[2].value)<0){
        return "Negative"
    }else{
        return "Positive"
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
    }else{
        output.innerText="The Angles should be positive"
    }
}

checkButton.addEventListener("click", checkForTriangle)
