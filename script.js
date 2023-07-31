let count = 0;
const countDisplay = document.getElementById("countDisplay");

function updateDisplay() {
  countDisplay.textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
