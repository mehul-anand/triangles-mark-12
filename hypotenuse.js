const sides = document.querySelectorAll(".input-side");
const calcBtn = document.querySelector("#calc-hypotenuse")
const output = document.querySelector("#output");

function checkNegatives(){
    if (Number(sides[0].value)<0 || Number(sides[1].value)<0){
        return "Negative"
    }else{
        return "Positive"
    }
}

function calcHypotenuse (){
    const checker = checkNegatives()
    if (checker == "Positive"){
        const sqSum = squaresSum (Number(sides[0].value),Number(sides[1].value))
        const hypotenuse = sqSum**0.5
        output.innerText = "Hypotenuse is : "+hypotenuse+" cm"
    }else{
        output.innerText="The Sides should be positive"
    } 

}

function squaresSum (a,b){
    const sum = ((a**2)+(b**2))
    return sum
}

calcBtn.addEventListener("click",calcHypotenuse);