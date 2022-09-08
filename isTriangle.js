var angle1=document.querySelector('#angle-1')
var angle2=document.querySelector('#angle-2');
var angle3=document.querySelector('#angle-3');

var checkBtn=document.querySelector('#check');
var display=document.querySelector('#display');

checkBtn.addEventListener('click', function displayStatement(){
    if(angle1.value<0) angle1.value=180+angle1.value
    if(angle2.value<0) angle2.value=180+angle2.value
    if(angle3.value<0) angle3.value=180+angle3.value
     
    var isTriangle=checkIfTriangle(angle1.value,angle2.value,angle3.value);

    if(angle1.value==='' || angle2.value==='' || angle3.value===''){
        display.innerText='All fields must be filled'
    }
    else if(isTriangle){
        display.innerText="Yay, the angles form a triangle!"
    }
    else if(!isTriangle){
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