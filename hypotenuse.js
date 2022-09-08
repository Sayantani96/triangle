var base=document.querySelector('#base')
var height=document.querySelector('#height');


var checkBtn=document.querySelector('#check');
var display=document.querySelector('#display');

checkBtn.addEventListener('click', function displayStatement(){
    if(base.value===''||height.value==='') display.innerText='Both the fields need to be filled';
    else if(base.value<=0 || height.value<=0) display.innerText='Enter valid inputs';
    else calculateHypotenuse(base.value,height.value);
})

function calculateHypotenuse(b,h){
   let hypotenuse=Math.sqrt(b*b+h*h);
   display.innerText=`The length of hypotenuse is ${hypotenuse}`;
}