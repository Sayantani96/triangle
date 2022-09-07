var base=document.querySelector('#base')
var height=document.querySelector('#height');


var checkBtn=document.querySelector('#check');
var display=document.querySelector('#display');

checkBtn.addEventListener('click', function displayStatement(){
    var isTriangle=calculateHypotenuse(base.value,height.value);
})

function calculateHypotenuse(b,h){
   let hypotenuse=Math.sqrt(b*b+h*h);
   display.innerText=`The length of hypotenuse is ${hypotenuse}`;
}