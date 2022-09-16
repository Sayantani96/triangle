
const quizSubmit=document.querySelector('#quiz-submit');
const getFormData=document.querySelector('.quiz-form');
const resultDisplay=document.querySelector('#marks')

const correctAnswers=[
    "90",
    "right",
    "one",
    "12,16,20",
    "Equilateral",
    "100",
    "30",
    "a+b+c",
    "No",
    "45"
]

quizSubmit.addEventListener('click',calculateResult);

function calculateResult(){
    let score=0;
    const FormResults= new FormData(getFormData);
    for(let entry of FormResults.entries()){
        for(let i=0;i<correctAnswers.length;i++){
            if(entry[1]===correctAnswers[i]){
                score++;
             }
        }
    }
    resultDisplay.innerText=`The score is ${score}`
}