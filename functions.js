const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let num1 = 0, num2 = 0, op = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnClass = button.getAttribute("class");
    const btnValue = button.getAttribute("value");
    updateNums(btnClass, btnValue);
    updateDisplay(btnClass);
  });
});

function updateDisplay(btnClass) {
  if (btnClass == "number" || btnClass == "clear" || btnClass == "equal") {
    if (op == "") {
      display.textContent = num1;
    }
    else {
      display.textContent = num2;
    }
  }
  else if (btnClass == "operator") {
    if (op != "") {
      display.textContent = num1;
    }
  }
}

function updateNums(btnClass, btnValue) {
  if (btnClass == "clear") {
    num1 = 0, num2 = 0, op = "";
  }
  else if (btnClass == "number") {
    if (op == "") {
      if (num1 == 0) {
        num1 = btnValue;
      } else {
        num1 += btnValue
      }
    }
    else {
      if (num2 == 0) {
        num2 = btnValue;
      } else {
        num2 += btnValue
      }
    }
  }
  else if (btnClass == "operator") {
    if (op != "") {
      num1 = operate(num1, num2, op);
      num2 = 0;
    }
    op = btnValue;
  }
  else if (btnClass == "equal") {
    num1 = operate(num1, num2, op);
    op = "";
    num2 = 0;
  }
  console.log(num1 + " " + op + " " + num2);
}

function operate(num1, num2, op) {
  if (op == "+") {
    return Number(num1) + Number(num2);
  }
  else if (op == "-") {
    return num1 - num2;
  }
  else if (op == "*") {
    return num1 * num2;
  }
  else if (op == "/") {
    if (num2 == 0) {
      return "lol can't do that";
    }
    return num1 / num2;
  }
}
