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

function addNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult += enteredNumber; // parse int parses as a number insted of a string can also use parseFloat (more specific)
  //currentResult = currentResult + +userInput.value; // second plus parses as a number insted of a string but is less explicat

  writeOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }; // creating an object
  logEntries.push(logEntry); // pushed enteredNumber into an array to keep track of it 
  console.log(logEntry.operation);
  console.log(logEntries); // zero based arrays
}

function subtractNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult -= enteredNumber;

  writeOutput('-', initialResult, enteredNumber);
}

function multiplyNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult *= enteredNumber;

  writeOutput('*', initialResult, enteredNumber);
}

function divideNums() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult /= enteredNumber;

  writeOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', addNums);
subtractBtn.addEventListener('click', subtractNums);
multiplyBtn.addEventListener('click', multiplyNums);
divideBtn.addEventListener('click', divideNums);
// alt + shift + f to use prettier