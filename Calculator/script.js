let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (displayValue === '0' || shouldResetDisplay) {
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) calculateResult();
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculateResult() {
    if (currentOperation === null || shouldResetDisplay) return;
    secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}
