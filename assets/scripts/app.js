const defaultResult = 0;
let currentResult = defaultResult; // using a semicolon at the end is optional but can be good practice for other languages

addBtn.addEventListener('click', addNums);

function getUserInputNum(){
return parseInt(userInput.value)
}
//let calcDescription = '( ' + defaultResult + ' + 10) * 3 / 2 - 1'; NORMAL CONCATENATION WAY TO DO THIS
//let calcDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

function writeOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription); // outputs result onto page when addNums function runs
}

function addNums() {
  const enteredNumber = getUserInputNum();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber; // parse int parses as a number insted of a string can also use parseFloat (more specific)
  //currentResult = currentResult + +userInput.value; // second plus parses as a number insted of a string but is less explicat
 
  writeOutput('+', currentResult, enteredNumber);
}

function subtractNums() {
  const enteredNumber = getUserInputNum();
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;

  writeOutput('-', currentResult, enteredNumber);
}

function multiplyNums() {
  const enteredNumber = getUserInputNum();
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;

  writeOutput('*', currentResult, enteredNumber);
}

function divideNums() {
  const enteredNumber = getUserInputNum();
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber;

  writeOutput('/', currentResult, enteredNumber);
}