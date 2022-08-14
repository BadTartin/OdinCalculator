// basic math functions
function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// operator function
// takes an operator and 2 numbers and then 
// calls one of the above functions on the numbers

function operate (oper, num1, num2) {
    switch(oper) {
        case "add":
          add(num1, num2)
          break;
        case "subtract":
          subtract(num1, num2)
          break;
        case "multiply":
          multiply(num1, num2)
          break;
        case "divide":
          divide(num1, num2)
          break;
      } 
}

