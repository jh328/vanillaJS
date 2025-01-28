// 요소 선택
const calculationDisplay = document.querySelector("#calculation");
const resultDisplay = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let result = "";

// 버튼 클릭 이벤트 추가
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // 숫자 버튼 클릭 시
    if (button.classList.contains("num")) {
      currentInput += value;
      calculationDisplay.textContent = currentInput;
    }

    // 연산자 버튼 클릭 시
    else if (["+", "-", "×", "÷"].includes(value)) {
      if (currentInput !== "") {
        currentInput += " " + value + " ";
        calculationDisplay.textContent = currentInput;
      }
    }

    // = 버튼 클릭 시 결과 계산
    else if (button.id === "equals") {
      try {
        let expression = currentInput.replace("÷", "/").replace("×", "*");
        result = eval(expression);
        resultDisplay.textContent = result;
      } catch (error) {
        resultDisplay.textContent = "Error";
      }
    }

    // AC 버튼 클릭 시 초기화
    else if (button.id === "clear") {
      currentInput = "";
      result = "";
      calculationDisplay.textContent = "";
      resultDisplay.textContent = "0";
    }

    // ± 버튼 (부호 변경)
    else if (button.id === "sign") {
      if (currentInput !== "") {
        currentInput = currentInput.startsWith("-")
          ? currentInput.slice(1)
          : "-" + currentInput;
        calculationDisplay.textContent = currentInput;
      }
    }

    // % 버튼 (백분율 변환)
    else if (button.id === "percent") {
      if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) / 100).toString();
        calculationDisplay.textContent = currentInput;
      }
    }

    // 소수점 버튼
    else if (button.id === "decimal") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        calculationDisplay.textContent = currentInput;
      }
    }
  });
});
