const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const delButton = document.querySelector(".del");
const toggle = document.getElementById("theme-toggle");
let currentInput = "";


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        currentInput = currentInput.replace(/x/g, "*");
        display.textContent = eval(currentInput);
        currentInput = display.textContent;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

delButton.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || "0";
});


toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
