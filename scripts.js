// basic math functions
function add (a, b) {
    return Number(a) + Number(b);
};

function subtract (a, b) {
    return Number(a) - Number(b);
};

function multiply (a, b) {
    return Number(a) * Number(b);
}

function divide (a, b) {
    if (b == 0) {
        return 'Can\'t Do That!'
    }
    else { return Number(a) / Number(b) };
}

// takes an operator and 2 numbers and then 
// calls one of the above functions on the numbers


function operate (oper, num1, num2) {
    switch(oper) {
        case "+":
          return Number(add(num1, num2).toFixed(15))
          break;
        case "-":
          return Number(subtract(num1, num2).toFixed(15))
          break;
        case "*":
          return Number(multiply(num1, num2).toFixed(15))
          break;
        case "/":
          return Number(divide(num1, num2).toFixed(15))
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
        switch (this.classList[0]) {
          case 'calBtn':
            if (toClear == 'true') { 
                display.innerText = '';
                toClear = 'false';
                point = 'false';
             }
            if (this.innerText.includes(".") && 
              display.innerText.includes(".")) {
                break;
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
            
            if (memory.innerText == '') {
                memory.innerText = numOne + ' ' + this.innerText;
                display.innerText = '';
            }
            else {
                val = parseFloat(memory.innerText.split(' ')[0]);
                result = operate(operator, val, display.innerText);
                memory.innerText = result + ' ' + this.innerText;
                display.innerText = '';
            }
            // operator = this.classList[1];
            operator = this.innerText;
            toClear = 'true';
            break;
          case 'equals':
            if (numOne == '' || memory.innerText == '') {
                break;
            }
            else {
                toClear = 'true';
                val = parseFloat(memory.innerText.split(' ')[0]);
                result = operate(operator, val, display.innerText);
                display.innerText = result;
                memory.innerText = '';
                break;
            }
        }
        
    });
});


document.addEventListener('keydown', keyPressed);

function keyPressed(event) {        

    switch (true) {
        case /[0-9]/.test(event.key):
            if (toClear == 'true') { 
                display.innerText = '';
                toClear = 'false';
                point = 'false';
            }
            display.innerText += event.key;
            break;
        case /[.]/.test(event.key):
            if (toClear == 'true') { 
                display.innerText = '';
                toClear = 'false';
                point = 'false';
            }
            if (event.key.includes(".") && 
                display.innerText.includes(".")) {
                break;
            }
            display.innerText += event.key;
            break;
        case /Backspace/.test(event.key):
            display.innerText = display.innerText.slice(0, -1)
            break;
        case /[*+-\/]/.test(event.key):
            var numOne = Number(display.innerText);
                
            if (memory.innerText == '') {
                memory.innerText = numOne + ' ' + event.key;
                display.innerText = '';
            }
            else {
                val = parseFloat(memory.innerText.split(' ')[0]);
                result = operate(operator, val, display.innerText);
                memory.innerText = result + ' ' + event.key;
                display.innerText = '';
            }
            // operator = operators[event.key];
            operator = event.key;
            toClear = 'true';
            break;
        case /=/.test(event.key):
            if (numOne == '' || memory.innerText == '') {
                break;
            }
            else {
                toClear = 'true';
                val = parseFloat(memory.innerText.split(' ')[0]);
                result = operate(operator, val, display.innerText);
                display.innerText = result;
                memory.innerText = '';
                break;
            }
      }

}