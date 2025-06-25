const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

let firstOperand = null;
let operator = null;
let isStartSecondOperand = false;

const handleButtonClick = (e) => {
  const value = e.target.textContent;

  if (e.target.classList.contains("number")) {
    handleNumber(value);
  } else if (e.target.classList.contains("operator")) {
    handleOperator(value);
  } else if (e.target.classList.contains("equal")) {
    handleEqual();
  } else if (value === ".") {
    handleDecimal();
  } else if (value === "C") {
    handleClear();
  }
};

const handleNumber = (number) => {
  if (operator && !isStartSecondOperand) {
    display.textContent = number;
    isStartSecondOperand = true; // 2번째 피연산자도 연속으로 입력가능하도록 (12, 123)
  } else {
    if (display.textContent === "0") {
      display.textContent = number;
    } else {
      // 1, 2번째 피연산자를 연속으로 입력 가능
      display.textContent += number;
    }
  }
};

const handleOperator = (nextOperator) => {
  // 연산자(+,-,*) 입력했을때, 입력한 display 값은 firstOperand 1번째 피연산자로 저장
  if (firstOperand === null) {
    firstOperand = parseFloat(display.textContent);
  }

  // 연산자 저장
  operator = nextOperator;
  console.log(firstOperand, operator);
};

const handleEqual = () => {
  const secondOperand = parseFloat(display.textContent);

  if (firstOperand && operator) {
    display.textContent = calculate(firstOperand, operator, secondOperand);
    resetInfo();
  }
};

const handleDecimal = () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
};

const handleClear = () => {
  display.textContent = "0";
  resetInfo();
};

const calculate = (firstOperand, operator, secondOperand) => {
  if (operator === "+") return firstOperand + secondOperand;
  if (operator === "−") return firstOperand - secondOperand;
  if (operator === "*") return firstOperand * secondOperand;
  if (operator === "/") return firstOperand / secondOperand;
  if (operator === "%") return firstOperand % secondOperand;
};

const resetInfo = () => {
  firstOperand = null;
  operator = null;
  isStartSecondOperand = false;
};

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
