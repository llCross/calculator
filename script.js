//reference html buttons to javascript
const numberButtons = document.querySelectorAll('.calcu-buttons');
const operationButtons = document.querySelectorAll('.operation-buttons');
const equalsButton = document.querySelector('.equals-button');
const deleteButton = document.querySelector('.delete-button');
const allClearButton = document.querySelector('.all-clear-button');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');


//create a append number function
//create a function to update the display
//create a function to select operation
//create a function to compute
//create a function to operate = "="
//create a function to delete
//create a function to clear

function updateDisplay(number) {
    currentOperand.innerText += number
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
        updateDisplay(button.innerText);
    });
});