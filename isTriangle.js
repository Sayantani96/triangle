var angle1=document.querySelector('#angle-1')
var angle2=document.querySelector('#angle-2');
var angle3=document.querySelector('#angle-3');

var checkBtn=document.querySelector('#check');
var display=document.querySelector('#display');

checkBtn.addEventListener('click', function displayStatement(){
    var isTriangle=checkIfTriangle(angle1.value,angle2.value,angle3.value);
    if(isTriangle){
        display.innerText="Yay, the angles form a triangle!"
    }
    if(!isTriangle){
        display.innerText="Oh Oh! The angle doesn't form a triangle"
    }
})

function checkIfTriangle(a1,a2,a3){
    a1=Number(a1);
    a2=Number(a2);
    a3=Number(a3);
    if(a1+a2+a3===180) return true;
    return false;
}