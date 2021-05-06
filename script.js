function getOperator(message) {
  let operator;

  let errorOperation;
  do {
    operator = prompt(message);
    errorOperation = (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/");
    if (errorOperation) {
      alert(`This ${operator} is not a valid arithmetic operation!`);
    }
  } while (errorOperation);
  return operator;
}

function getNumber(message) {
    let result = prompt(message);
    while (isNaN(result)) {
    alert(`This ${result} is not a number!`);
    result = prompt(message);
  }
  return result;
}

let mainOperator = getOperator('Enter please the operation you want: (+ - / *)');

let firstOperand = +getNumber('Please enter the first number');

let secondOperand = +getNumber('Please enter the second number');

let testResults;

  switch (mainOperator) {
    case '/':
      testResults = firstOperand / secondOperand;
        break;    
    case '-':
      testResults = firstOperand - secondOperand;
        break;
    case '*':
      testResults = firstOperand * secondOperand;
        break;
    case '+':
      testResults = firstOperand + secondOperand;
        break;              
  }

alert(`${firstOperand} ${mainOperator} ${secondOperand} = ${testResults}`);