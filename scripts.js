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

// Create the functions that populate the display when you 
// click the number buttons. You should be storing the 
// ‘display value’ in a variable somewhere for use in the next step.

var display = document.querySelector('.display');

var btns = document.querySelectorAll('button');

btns.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log(this.innerText);
        switch (this.classList[0]) {
          case 'calBtn':
            display.innerText += this.innerText;
            break;
          case 'clear':
            display.innerText = ''
            break;
          case 'del':
            display.innerText = display.innerText.slice(0, -1)
            break;
        }
        console.log(this.classList[0]);
        
    });
});


