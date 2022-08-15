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
          return add(num1, num2)
          break;
        case "subtract":
          return subtract(num1, num2)
          break;
        case "multiply":
          return multiply(num1, num2)
          break;
        case "divide":
          return divide(num1, num2)
          break;
      } 
}

// Create the functions that populate the display when you 
// click the number buttons. You should be storing the 
// ‘display value’ in a variable somewhere for use in the next step.

var display = document.querySelector('.display');

var btns = document.querySelectorAll('button');

var memory = document.querySelector('.memory');
var operator = '';
var toClear = 'false';

btns.forEach(function (button) {
    button.addEventListener("click", function () {
        // console.log(this.innerText);
 
        switch (this.classList[0]) {
          case 'calBtn':
            if (toClear == 'true') { 
                display.innerText = '';
                toClear = 'false';
             }
            display.innerText += this.innerText;
            break;
          case 'clear':
            display.innerText = '';
            memory.innerText = '';
            break;
          case 'del':
            display.innerText = display.innerText.slice(0, -1)
            break;
          case 'operator':
            var numOne = Number(display.innerText);
            operator = this.classList[1];
            // console.log(operator);
            memory.innerText = numOne;
            display.innerText = this.innerText;
            toClear = 'true';
            break;
          case 'equals':
            if (numOne == '' || memory.innerText == '') {
                break;
            }
            else {
                toClear = 'true'
                // console.log('else');
                // console.log(typeof operator);
                // result = (Number(memory.innerText) + Number(display.innerText));
                result = operate(operator, Number(memory.innerText), Number(display.innerText));
                display.innerText = result;
                memory.innerText = '';
                break;
            }
        }
        // console.log(this.classList[0]);
        
    });
});

// You need to modify numOne to an array so each number clicked gets added to the array. Then when you calculate the answer you loop through them with forEach and operate() with the operator
// function operate (oper, num) { // remove num2
//     let total = 0;
//     num.forEach(function(n){
//         total = oper(total,n);
//     })
//     return total;
// }

// var numOne = [];
// ...

// case 'calBtn':
//       if (toClear == 'true') { 
//             display.innerText = '';
//             toClear = 'false';
//       }
//       numOne.push(Number(this.innerText)) // add clicked num to array
//       break;

// ...

// case 'equals':
//       if (numOne.length === 0 || memory.innerText === '') {
//           break;
//       } else {
//           toClear = 'true'
//           result = operate(operator, numOne)  // pass array to operate
//           display.innerText = result;
//           memory.innerText = '';

