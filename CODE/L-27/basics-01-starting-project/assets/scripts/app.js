const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert("The result is" + result);
}

add(1, 2);
add(5, 5);

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(1, 2);

let calculationDescription = "1+2";

outputResult(currentResult, calculationDescription);
