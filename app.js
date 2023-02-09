const btn = document.querySelectorAll('.button');
const btnNumber = document.querySelectorAll('.number')
const btnOperator = document.querySelectorAll('.operator');
const btnEqual = document.querySelector('.equal');
const btnClear = document.querySelector('.clear');
const btnPoint = document.querySelector('.point');
const btnBackspace = document.querySelector('.backspace')
const value = document.querySelector('#value');

let doOperate = false;
let pointUse = false;
let resetScreen = false;
let choiceOperator = '';
let firstNumber = 0;
let secondNumber = 0;
let operator = ['+', '-', '/', '*']

document.addEventListener('keydown', function(e) {
    return e.key
})


function divide(a, b) {
    if(b === 0) {
        return 'Not divide by 0';
    }
    return a / b
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
           return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return divide(a, b);
    }
}

function roundDecimal(number) {
    return Math.round(number * 10000) / 10000;    
};

function pressNumber(e) {
    
}
 
for(let i = 0; i < btn.length; i++) {
    if(btn[i].classList.value === "button number") {
        btn[i].addEventListener('click', function(e) {
            if(operator.includes(value.textContent) || (resetScreen === true   && value.textContent != '.')) {
                value.textContent = ''
                resetScreen = false;
            }
            value.textContent = value.textContent + e.target.textContent;
        })        
    }
};

for(let i = 0; i < btnOperator.length; i++) {
    btnOperator[i].addEventListener('click', function(e) {
        if(doOperate) {
            value.textContent = operate(choiceOperator, +firstNumber, +secondNumber)
        }
        pointUse = false;
        firstNumber = value.textContent;
        choiceOperator = e.target.textContent;
        value.textContent = choiceOperator;
        doOperate = true;
    })
}

btnEqual.addEventListener('click', function() {
    if(firstNumber === 0|| (secondNumber === 0 && choiceOperator === '')) {
        value.textContent = '';
    } else {
        secondNumber = value.textContent;
        let result = roundDecimal(operate(choiceOperator, +firstNumber, +secondNumber));
        clear();
        value.textContent = result;
        resetScreen = true;
    }
})

btnPoint.addEventListener('click', function() {
    if(resetScreen) {
        value.textContent = '';
    }
 })

function clear() {
    value.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    doOperate = false;
    pointUse = false;
}
btnClear.addEventListener('click', clear)

btnPoint.addEventListener('click', function() {
    if(pointUse === false) {
        value.textContent = value.textContent + '.'
        pointUse = true;
    }
})

btnBackspace.addEventListener('click', function() {
    let len = value.textContent.length
    value.textContent = value.textContent.substr(-len, len - 1);
})

function hello() {
    console.log('Hello World!');
}



