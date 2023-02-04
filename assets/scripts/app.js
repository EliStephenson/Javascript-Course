const defaultResult = 0;
let currentResult = defaultResult; // using a semicolon at the end is optional but can be good practice for other languages
let logEntries = [];

function getUserInputNum() {
  return parseInt(userInput.value);
}
//let calcDescription = '( ' + defaultResult + ' + 10) * 3 / 2 - 1'; NORMAL CONCATENATION WAY TO DO THIS
//let calcDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

function writeOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // outputs result onto page when addNums function runs
}

function writeToLog(operationID, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationID,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); // pushed enteredNumber into an array to keep track of it
  console.log(logEntries); // zero based arrays
}

function calculateResult(calculationType){
  
  if (calculationType !== 'add' 
  && calculationType !== 'subtract'
  && calculationType !== 'multiply'
  && calculationType !== 'divide'
  ) {
    return;
  } // there is more than one way to do this
  
  
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'add') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'subtract') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'multiply'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'divide'){
    currentResult /= enteredNumber;
    mathOperator = '/'
  }

      


  writeOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function addNums() {
  calculateResult('add');
}

function subtractNums() {
  calculateResult('subtract');
}

function multiplyNums() {
  calculateResult('multiply');
}

function divideNums() {
  calculateResult('divide');
}

addBtn.addEventListener('click', addNums);
subtractBtn.addEventListener('click', subtractNums);
multiplyBtn.addEventListener('click', multiplyNums);
divideBtn.addEventListener('click', divideNums);
// alt + shift + f to use prettier
