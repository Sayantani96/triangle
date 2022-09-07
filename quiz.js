
const quizSubmit=document.querySelector('#quiz-submit');
const getFormData=document.querySelector('.quiz-form');
const resultDisplay=document.querySelector('#marks')

const correctAnswers=[
    "90",
    "right",
    "one",
    "12,16,20",
    "Equilateral",
    "85",
    "10",
    "a+b+c",
    "No",
    "45"
]

quizSubmit.addEventListener('click',calculateResult);

function calculateResult(){
    let score=0;
    let index=0;
    const FormResults= new FormData(getFormData);
    for(let entry of FormResults.entries()){
        if(entry[1]===correctAnswers[index]){
           score++;
        }
        else{
            console.log("incorrect");
        }
        index++;
    }
    resultDisplay.innerText=`The score is ${score}`
}