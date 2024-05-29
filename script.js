let display = document.getElementById('display');
        let currentOperation = '';
        let firstOperand = null;
        let memory = 0;

        function appendNumber(number) {
            if (display.value === '0' || display.value === '') {
                display.value = number;
            } else {
                display.value += number;
            }
        }

        function setOperation(operation) {
            if (currentOperation === '') {
                firstOperand = parseFloat(display.value);
                currentOperation = operation;
                display.value = '';
            }
        }

        function clearDisplay() {
            display.value = '';
            currentOperation = '';
            firstOperand = null;
        }

        function calculateResult() {
            if (currentOperation !== '' && display.value !== '') {
                let secondOperand = parseFloat(display.value);
                let result;
                switch (currentOperation) {
                    case '+':
                        result = firstOperand + secondOperand;
                        break;
                    case '-':
                        result = firstOperand - secondOperand;
                        break;
                    case '*':
                        result = firstOperand * secondOperand;
                        break;
                    case '/':
                        result = firstOperand / secondOperand;
                        break;
                }
                display.value = result;
                currentOperation = '';
                firstOperand = null;
            }
        }

        function calculatePercentage() {
            display.value = parseFloat(display.value) / 100;
        }

        function calculateSquareRoot() {
            display.value = Math.sqrt(parseFloat(display.value));
        }

        function memoryAdd() {
            memory += parseFloat(display.value);
        }

        function memorySubtract() {
            memory -= parseFloat(display.value);
        }