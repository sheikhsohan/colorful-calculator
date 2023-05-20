var calculatorEnabled = false;

function toggleCalculator() {
  calculatorEnabled = !calculatorEnabled;
  var calculator = document.querySelector('.calculator');
  var toggleButton = document.querySelector('.toggle-button');
  var toggleText = document.getElementById('toggleText');
  var statusText = document.getElementById('statusText');
  
  if (calculatorEnabled) {
    calculator.classList.add('active');
    toggleButton.classList.add('on');
    toggleButton.classList.remove('off');
    toggleText.innerText = 'ON';
    statusText.style.display = 'none';
  } else {
    calculator.classList.remove('active');
    toggleButton.classList.add('off');
    toggleButton.classList.remove('on');
    toggleText.innerText = 'OFF';
    statusText.style.display = 'block';
  }

  if (!calculatorEnabled) {
    clearInput();
  }
}

function addToInput(value) {
  if (calculatorEnabled) {
    document.getElementById('result').value += value;
  }
}

function calculate() {
  if (calculatorEnabled) {
    var input = document.getElementById('result').value;
    var result = eval(input);
    document.getElementById('result').value = input + ' = ' + result;

    var inputBox = document.getElementById('result');
    inputBox.classList.add('animate-result');

    setTimeout(function() {
      inputBox.classList.remove('animate-result');
      inputBox.style.fontSize = '20px';
      inputBox.style.top = '0';
    }, 1000);
  }
}

function clearInput() {
  if (calculatorEnabled) {
    document.getElementById('result').value = '';
  }
}

function deleteLastCharacter() {
  if (calculatorEnabled) {
    var input = document.getElementById('result').value;
    document.getElementById('result').value = input.slice(0, -1);
  }
}

function clearAll() {
  clearInput();
}

function clearMemory() {
  clearInput();
}

function calculatePercentage() {
  if (calculatorEnabled) {
    var input = document.getElementById('result').value;
    var percentage = parseFloat(input) / 100;
    document.getElementById('result').value = percentage;
  }
}

function calculateMultiplication() {
  if (calculatorEnabled) {
    var input = document.getElementById('result').value;
    var numbers = input.split(/[*\/+-]/g);
    var operators = input.replace(/[0-9.]/g, '').split('');

    var result = parseFloat(numbers[0]);

    for (var i = 0; i < operators.length; i++) {
      var number = parseFloat(numbers[i + 1]);

      if (operators[i] === '*') {
        result *= number;
      } else if (operators[i] === '/') {
        result /= number;
      }
    }

    document.getElementById('result').value = result;
  }
}

// warningh
function closeFloatingBox() {
  var floatingContainer = document.querySelector('.floating-container');
  floatingContainer.style.display = 'none';
}
