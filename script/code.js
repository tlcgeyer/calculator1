function appendToDisplay(value) {
  document.clc.display += value; 
}

function clearDisplay() {
  document.clc.display.value = '';
}

function calculate() {
  try {
    const expression = document.clc.display.value;
    console.log('Expression', expression);

    const result = eval(expression);
    console.log('Result:', result);

    document.getElementById('output').value = result;
    document.clc.display.value = result;
  } catch (error) {
    console.error('Error', error);
    document.getElementById('output').value = "Error";
  }
}

function handleNumberClick(number) {
  appendToDisplay(number);
}

function solve() {
  let x = document.getElementId('result').value

  let y = eval(x);

  document.getElementId('result').value = y

  return y
  lblOutput.textContent = sum
}
