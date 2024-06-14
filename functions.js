const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let num1 = 0, num2 = 0, op = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnClass = button.getAttribute("class");
    const btnValue = button.getAttribute("value");
    updateNums(btnClass, btnValue);
  });
});

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
    op = btnValue;
  }
  console.log(num1 + " " + op + " " + num2);
}

function operate(num1, num2, op) {
  if (op == "+") {
    return num1 + num2;
  }
  else if (op == "-") {
    return num1 - num2;
  }
  else if (op == "*") {
    return num1 * num2;
  }
  else if (op == "/") {
    return num1 / num2;
  }
}
