var side1=document.querySelector('#side1')
var side2=document.querySelector('#side2');
var side3=document.querySelector('#side3');

var checkBtn=document.querySelector('#check');
var display=document.querySelector('#display');

checkBtn.addEventListener('click', function displayStatement(){
    if(side1.value<0 || side2.value<0 || side3.value<0){
        display.innerText="Enter valid side lengths"
    }
    else calculateArea(side1.value,side2.value,side3.value);
})

function calculateArea(a,b,c){
    const s=(Number(a)+Number(b)+Number(c))/2;
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c))

    if(area){
        display.innerText=`Area of a triangle using heron's formula is ${area} units`
    }
    else {
        
        display.innerText="Enter valid side lengths"
    }
}