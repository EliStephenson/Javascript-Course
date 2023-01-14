const defaultResult = 0;
let currentResult = defaultResult; // using a semicolon at the end is optional but can be good practice for other languages

const addResult = addNums(1, 4); // calls the function

//let calcDescription = '( ' + defaultResult + ' + 10) * 3 / 2 - 1'; NORMAL CONCATENATION WAY TO DO THIS
let calcDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(addResult, calcDescription); // calls function in vendor script

function addNums(num1, num2) {
  // defining a function
  const result = num1 + num2;
  alert(`the result is ${result}`);
  // alert('the result is' + result); either works
  return result;
}
// use alt + shift + s to use prettier