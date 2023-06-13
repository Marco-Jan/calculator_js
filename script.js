const display = document.querySelector('#result');
const calculator = document.getElementById('calculator');
let displayValue = '0';



function input_btn(value) {
    let resultElement = document.getElementById('#result');
    let currentContent = resultElement.innerHTML;
    let newContent = currentContent + value;
    resultElement.innerHTML = newContent;
}

calculator.addEventListener('click', (event) => {
    let key = event.target;
    let action = key.dataset.action;
    let keyValue = key.dataset.value;
    if (!action) {
        /*  let value = key.dataset.value;
         if (value) {
           input_btn(value);
         } */
        handleInputNum(keyValue);
        updateDisplay();
    }

});
function updateDisplay() {
    display.textContent = displayValue;
}

function handleInputNum(key) {
    displayValue = displayValue == 0 ? key : displayValue + key;
    /* if(displayValue == 0) {
      displayValue = key;
    }else {
      displayValue = displayValue + key
    } */
}
updateDisplay();