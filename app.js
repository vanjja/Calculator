function add(a, b){
    return a+b;
};

function substract(a, b){
    return a-b;
};

function multiply(a, b){
    return a*b;
};

function divide(a, b){
    return a/b;
};

function operate(x, y, o){
    switch(o){
        case "+":
            return add(x, y);
        case "-":
            return substract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    };
};

const btns = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
const ac = document.querySelector('.all-clear');
const equal = document.querySelector('.equal-sign');

let display = 0;
let firstNum = 0;
let secondNum = 0;
let operator;
let i = 0;

numbers.forEach((number) => {
    number.addEventListener('click', function(){
        if(isNaN(screen.textContent) == false){
            screen.textContent += number.value;
        } else {
            screen.textContent = number.value;
        }
        
        if(i == 0){
            firstNum = parseInt(screen.textContent);
             
        } else {
            secondNum = parseInt(screen.textContent);
            console.log(secondNum);
            firstNum = operate(firstNum, secondNum, operator);
            console.log(firstNum);
        }
    });
});



operators.forEach((op) => {
    op.addEventListener('click', function(){
        i++;
        screen.textContent = op.value;
        operator = op.value; 
        console.log(operator);      
    });
});


ac.addEventListener('click', function(){
    screen.textContent = "";
    operator = "";
    currentValue = 0;
    previousValue = 0;
    i = 0;
});

equal.addEventListener('click', function(){
    screen.textContent = firstNum;
});


