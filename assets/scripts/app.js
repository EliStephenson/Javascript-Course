const defaultResult = 0;
let currentResult = defaultResult; // using a semicolon at the end is optional but can be good practice for other languages

addBtn.addEventListener('click', addNums);


//let calcDescription = '( ' + defaultResult + ' + 10) * 3 / 2 - 1'; NORMAL CONCATENATION WAY TO DO THIS
//let calcDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;



function addNums() {
  // defining a function
  currentResult = currentResult + userInput.value;
  //alert(`the result is ${result}`);
  // alert('the result is' + result); either works
  outputResult(addResult, calcDescription); // outputs result onto page when addNums function runs
}
// use alt + shift + s to use prettier