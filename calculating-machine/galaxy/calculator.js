const calculationDisplay = document.querySelector(".inputValue span");
const resultDisplay = document.querySelector("#result");

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.id === "cancel") {
      calculationDisplay.textContent = "";
      resultDisplay.textContent = "";
    } else if (button.id === "equal") {
      try {
        const calculation = calculationDisplay.textContent
          .replace("X", "*")
          .replace("÷", "/");
        const result = eval(calculation);
        resultDisplay.textContent = result;
      } catch (e) {
        resultDisplay.textContent = "Error";
      }
    } else {
      calculationDisplay.textContent += value;
    }
  });
});

// 키보드 입력
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/().".includes(key)) {
    calculationDisplay.textContent += key;
  } else if (key === "Enter") {
    try {
      const calculation = calculationDisplay.textContent
        .replace("X", "*")
        .replace("÷", "/");
      const result = eval(calculation);
      resultDisplay.textContent = result;
    } catch (e) {
      resultDisplay.textContent = result;
    }
  } else if (key === "Backspace") {
    calculationDisplay.textContent = calculationDisplay.textContent.slice(
      0,
      -1
    );
  } else if (key === "Escape") {
    calculationDisplay.textContent = "";
    resultDisplay.textContent = "0";
  }
});
