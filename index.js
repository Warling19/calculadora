const resultContent = document.querySelector('.result-content');
const clearBtn = document.querySelector('.btns-top span');
const deleteBtn = document.querySelector('.fa-solid.fa-delete-left');
const percentBtn = document.querySelector('.fa-solid.fa-percent');
const divideBtn = document.querySelector('.fa-solid.fa-divide');
const multiplyBtn = document.querySelector('.fa-solid.fa-xmark');
const subtractBtn = document.querySelector('.fa-solid.fa-minus');
const addBtn = document.querySelector('.fa-solid.fa-plus');
const equalsBtn = document.querySelector('.fa-solid.fa-equals');
const numberBtns = document.querySelectorAll('.btns:not(.btns-top)');
const zeroBtn = document.querySelector('.btns:nth-child(18)');
const dotBtn = document.querySelector('.btns:nth-child(19)');


numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    resultContent.textContent += btn.textContent;
  });
});


clearBtn.addEventListener('click', () => {
  resultContent.textContent = '';
});


deleteBtn.addEventListener('click', () => {
  resultContent.textContent = resultContent.textContent.slice(0, -1);
});


percentBtn.addEventListener('click', () => {
  const expression = resultContent.textContent;
  const value = evaluateExpression(expression) / 100;
  resultContent.textContent = value.toLocaleString();
});


divideBtn.addEventListener('click', () => {
  resultContent.textContent += ' ÷ ';
});


multiplyBtn.addEventListener('click', () => {
  resultContent.textContent += ' x ';
});


subtractBtn.addEventListener('click', () => {
  resultContent.textContent += ' - ';
});


addBtn.addEventListener('click', () => {
  resultContent.textContent += ' + ';
});


equalsBtn.addEventListener('click', () => {
  const expression = resultContent.textContent;
  const value = evaluateExpression(expression);
  
  if (value !== null) {
    resultContent.textContent = value.toLocaleString();
  } else {
    resultContent.textContent = 'Error';
  }
});


zeroBtn.addEventListener('click', () => {
  resultContent.textContent += '0';
});


dotBtn.addEventListener('click', () => {
  resultContent.textContent += '.';
});


function evaluateExpression(expression) {
  const operators = ['+', '-', 'x', '÷'];
  let numbers = expression.split(' ');
  let result = null;
  
  for (let i = 0; i < operators.length; i++) {
    while (numbers.includes(operators[i])) {
      const operatorIndex = numbers.indexOf(operators[i]);
      const num1 = parseFloat(numbers[operatorIndex - 1]);
      const num2 = parseFloat(numbers[operatorIndex + 1]);
      
      switch (operators[i]) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case 'x':
          result = num1 * num2;
          break;
        case '÷':
          result = num1 / num2;
          break;
      }
      
      numbers.splice(operatorIndex - 1, 3, result);
    }
  }
  
  return result;
}
