function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);  // Remove last character
}

function toggleSign() {
    let currentValue = document.getElementById('display').value;
    if (currentValue) {
        document.getElementById('display').value = currentValue.charAt(0) === '-' ?
            currentValue.slice(1) : '-' + currentValue;
    }
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
