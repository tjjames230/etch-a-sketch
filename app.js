console.log("hi");

const input = document.querySelector("input");
const inputTxt = document.querySelector("#input-txt");
const canvas = document.querySelector("#canvas");
const resetBtn = document.querySelector("#reset-btn");
const whiteBtn = document.querySelector("#white-btn");
const blackBtn = document.querySelector("#black-btn");

input.addEventListener("input", updateCanvas);

function updateCanvas() {
  resetCanvas();
  updateInputText();
  setCanvasSize();
  addDivs();
}

blackBtn.addEventListener("click", () => {
  checkActive(blackBtn, whiteBtn);
});

whiteBtn.addEventListener("click", () => {
  checkActive(whiteBtn, blackBtn);
});

function checkActive(button, otherButton) {
  const isActive = Array.from(button.classList).includes("active-btn");

  if (isActive !== true) {
    button.classList.add("active-btn");
    otherButton.classList.remove("active-btn");
  }
}

resetBtn.addEventListener("click", () => {
  resetCanvas();
  input.value = "1";
  updateInputText();
  setCanvasSize();
  addDivs();
});

function addDivs() {
  for (let i = 0; i < input.value; i++) {
    for (let j = 0; j < input.value; j++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("canvas-sq");
      canvas.appendChild(newDiv);
    }
  }
}

function resetCanvas() {
  canvas.innerHTML = "";
}

function setCanvasSize() {
  canvas.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
}

function updateInputText() {
  inputTxt.innerText = `${input.value} x ${input.value}`;
}
