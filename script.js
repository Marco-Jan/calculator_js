// Input
function input_btn(value) {
  let resultElement = document.getElementById('result');
  let currentContent = resultElement.innerHTML;
  let newContent = currentContent + value;
  resultElement.innerHTML = newContent;
}

// Ergebnis berechnen
function calculateResult() {
  let containerElement = document.getElementById('result');
  let containerContent = containerElement.innerHTML;
  let result = eval(containerContent);
  containerElement.innerHTML = result;
}

// Zurücksetzen
function reset() {
  let containerElement = document.getElementById('result');
  containerElement.innerHTML = '';
}

const calculator = document.getElementById('calculator');

calculator.addEventListener('click', (event) => {
  let key = event.target;
  let action = key.dataset.action;

  if (!action) {
    let value = key.dataset.value;
    if (value) {
      input_btn(value);
    }
  } 
});
