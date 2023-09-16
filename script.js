//reference html buttons to javascript
const numberButtons = document.querySelectorAll('.number-buttons');
const operationButtons = document.querySelectorAll('.operation-buttons');
const equalsButton = document.querySelector('.equals-button');
const deleteButton = document.querySelector('.delete-button');
const allClearButton = document.querySelector('.all-clear-button');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

let equals
let operator

//create a function to update the display
//create a function to select operation
//create a function to compute
//create a function to operate = "="
//create a function to delete
//create a function to clear

function updateDisplay(number) {
    if (number === '.' && currentOperand.innerText.includes('.')) return;
     currentOperand.innerText += number
}

function deleteNumber() {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
}

function clear() {
    currentOperand.innerText = ''
    previousOperand.innerText = ''
}


function operate(operation) {
    if (currentOperand.innerText === '') return;
    if (previousOperand.innerText !== '') {
        compute();
    } else {
    previousOperand.innerText = currentOperand.innerText;
    currentOperand.innerText = ''
    }
    operator = operation
}


function compute() {

    if (operator === '/' && currentOperand.innerText === '0') {
        alert ("Dividing by zero, eh? You must be a math daredevil")
    }
    switch (operator) {
        case '+' :
            equals = Number(previousOperand.innerText) + Number(currentOperand.innerText)
            break;
        case '-':
            equals = Number(previousOperand.innerText) - Number(currentOperand.innerText)
            break;
        case '*':
            equals = Number(previousOperand.innerText) * Number(currentOperand.innerText)
            break;
        case '/':
            equals = Number(previousOperand.innerText) / Number(currentOperand.innerText)
            break;
        default:
            return;
    }
    previousOperand.innerText = equals;
    currentOperand.innerText = '';
    operator = undefined;
}

//Click Event listener
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.innerText);
    });
});

allClearButton.addEventListener('click',() => {
    clear();
});

deleteButton.addEventListener('click',() => {
    deleteNumber();
});

equalsButton.addEventListener('click',() => {
    compute();
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operate(button.innerText);
    });
});