function calculator(){
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1: "));
    let num2 = Number(prompt("Enter num2: "));
    sum(num1,num2);
    mult(num1,num2);
    sub(num1,num2);
    division(num1,num2);
}

if(calculate == "*"){
    mult(num1,num2)
} else if (calculate == "/"){
    division(num1,num2)
} else if (calculate == "+"){
    sum(num1,num2)
} else if (calculate == "-"){
    else {
        alert(`invalid input`) 
    }
}


function sum(a,b){
    let total = a + b;
    document.getElementById("sumRes").innerHTML=`<p> ${a} + ${b} = ${total}</p>`;
}
function mult(a,b){
    let total = a * b;
    document.getElementById("mulRes").innerHTML=`<p> ${a} x ${b} = ${total}</p>`;

}

function sub(a,b){
    let total = a - b;
    document.getElementById("subRes").innerHTML=`<p> ${a} - ${b} = ${total}</p>`;

}
function division(a,b){
    let total = a / b;
    document.getElementById("divRes").innerHTML=`<p> ${a} / ${b} = ${total}</p>`;

}