//reference html buttons to javascript
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete');
const allClearButton = document.querySelector('[data-all-clear');
const previousOperandText = document.querySelector('.previous-operand');
const currentOperandText = document.querySelector('.current-operand');

//create a append number function
//create a function to update the display
//create a function to select operation
//create a function to compute
//create a function to operate = "="
//create a function to delete
//create a function to clear

function appendNumber(number) {

}

function updateDisplay() {

}

function selectOperation(operation) {

}

function compute() {

}

function operate() {

}

function deleteNumber() {

}

function clear() {

}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('button clicked');
    });
});

equalsButton.addEventListener('click', log)

function log() {
    console.log('clicked');
};