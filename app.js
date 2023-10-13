console.log("hi");

const input = document.querySelector("input");
const inputTxt = document.querySelector("#input-txt");
const canvas = document.querySelector("#canvas");

input.addEventListener("input", updateCanvas);

function updateCanvas() {
  resetCanvas();
  updateInputText();
  setCanvasSize();
  addDivs();
}

function addDivs() {
  for (let i = 0; i < input.value; i++) {
    for (let j = 0; j < input.value; j++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("canvas-sq");
      canvas.appendChild(newDiv);
    }
  }
}

function setCanvasSize(e) {
  canvas.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
}

function updateInputText(e) {
  inputTxt.innerText = `${input.value} x ${input.value}`;
}

function resetCanvas() {
  canvas.innerHTML = "";
}
