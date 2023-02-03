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
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }

  
  writeOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function addNums() {
  calculateResult('ADD');
}

function subtractNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult -= enteredNumber;

  writeOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiplyNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult *= enteredNumber;

  writeOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divideNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult /= enteredNumber;

  writeOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addNums);
subtractBtn.addEventListener('click', subtractNums);
multiplyBtn.addEventListener('click', multiplyNums);
divideBtn.addEventListener('click', divideNums);
// alt + shift + f to use prettier
