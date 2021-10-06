# triangles-mark-12
a fun app which revolves around triangles and it's properties 

## It includes : - 
1) Is it a Triangle (where user will give us value of 3 angles and the app will tell wether it is possible to have a triangle with those angles or not)
2) Quiz on Triangles
3) Finding the hypotenuse of the triangle (user will give us the 2 sides and the app will find the length of the hypotenuse in cm)
4) Finding the area of the triangle (user will give us the base and height and we will find the area in cm²)

## Contents 
-  Here we have a navigation bar
- Is it a triangle (give us 3 angles and see if they can form a triangle or not)
- Quiz on triangles
- Find hypoteneuse using the other 2 sides
- Finding area using length and breadth

## Working
- Is it a triangle 
  - We take 3 angles and check if they are positve and greater than 0 and see if the sum is equal to **180°**
- Quiz 
  - for the quiz we used the `<form>` tag and then used radio buttons in `<input>`
  - In JS we took and array of answers and then took form's data using `formData` 
  - Then we checked if the answer is right or wrong and updated the index and the score 👇
    ```
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
  ```
    
- Hypoteneuse calculator 
  - we took inputs of the two sides & check if they are positve and greater than 0 then finnd the hypotenuese using **Pythagoras Theorem**
- Area calculator
  - we took the base and height from the user & check if they are positve and greater than 0 then find the are using `0.5*base*height`
  
### Resources 
- [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [formData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
  
