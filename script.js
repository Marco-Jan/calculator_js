const display = document.querySelector('#result');
let displayValue = '0';
// Input
function input_btn(value) {
  let resultElement = document.getElementById('result');
  let currentContent = resultElement.innerHTML;
  let newContent = currentContent + value;
  resultElement.innerHTML = newContent;
}

// Ergebnis berechnen
/* function calculateResult() {
  let containerElement = document.getElementById('result');
  let containerContent = containerElement.innerHTML;
  let result = eval(containerContent);
  containerElement.innerHTML = result;
} */

// Zurücksetzen
function reset() {
  let containerElement = document.getElementById('result');
  containerElement.innerHTML = '';
}

const calculator = document.getElementById('calculator');

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


  if(action === '+' || action === '-' || action === '*'  || action === '/' ){
    
    z1 = displayValue
  }
});

function updateDisplay() {
  display.textContent = displayValue;
}

function calculate(z1, z2, operator) {
  if(operator === '+') {
    return z1 + z2;
  }
  if(operator === '-') {
    return z1 - z2;
  }
  if(operator === '*') {
    return z1 * z2;
  }
  if(operator === '/') {
    return z1 / z2;
  }
  return z2;
}


function handleInputNum(key) {
  displayValue = displayValue == 0 ? key : displayValue + key;
  /* if(displayValue == 0) {
    displayValue = key;
  }else {
    displayValue = displayValue + key
  } */
}


function handleInputoperator(){


}

updateDisplay();

