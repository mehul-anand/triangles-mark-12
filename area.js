const sides = document.querySelectorAll(".side");
const areaBtn = document.querySelector("#area-button");
const output = document.querySelector("#output");

function checkNegatives(){
    if (Number(sides[0].value)<0 || Number(sides[1].value)<0){
       return "Negative" 
    }else{
        return "Positive"
    }
}

function displayArea(){
    const checker =checkNegatives()
    if (checker == "Positive"){
        const area = 0.5 * Number(sides[0].value) *  Number(sides[1].value)
        output.innerText = "Area is : "+area+" cm²"
    }else{
        output.innerText = "Base or Height can't be negative"
    }
}

areaBtn.addEventListener("click",displayArea)