const sides = document.querySelectorAll(".side");
const areaBtn = document.querySelector("#area-button");
const output = document.querySelector("#output");

function checkNull(){
    if (Number(sides[0].value) && Number(sides[1].value)){
        return "Non Zero"
    }else{
        return "Zero"
    }
}

function checkNegatives(){
    const nullChecker = checkNull()
    if (nullChecker == "Non Zero"){
        if (Number(sides[0].value)<0 || Number(sides[1].value)<0){
            return "Negative" 
         }else{
             return "Positive"
         }
    }else{
        output.innerText ="Please fill all the fields"
    }

}

function displayArea(){
    const checker =checkNegatives()
    if (checker == "Positive"){
        const area = 0.5 * Number(sides[0].value) *  Number(sides[1].value)
        output.innerText = "Area is : "+area+" cm²"
    }else{
        output.innerText = "Base or Height should be positive and non-zero"
    }
}

areaBtn.addEventListener("click",displayArea)