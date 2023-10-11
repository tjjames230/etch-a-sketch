console.log("hi");

const input = document.querySelector("input");
const inputTxt = document.querySelector("#input-txt");
const canvas = document.querySelector("#canvas");

input.addEventListener("click", addDivs);

function addDivs(e) {
  // Update input text
  inputTxt.innerText = `${e.target.value} x ${e.target.value}`;

  // Update canvas to allow target value of rows
  canvas.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;

  // Create row of divs in canvas equal to target value
  let newDiv = document.createElement("div");
  newDiv.classList.add("canvas-sq");
  canvas.appendChild(newDiv);
}

function resetCanvas() {
  while (canvas.childElementCount > 0) {
    canvas.removeChild(canvas.newDiv);
  }
}
