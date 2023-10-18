const input = document.querySelector("input");
const inputTxt = document.querySelector("#input-txt");
const canvas = document.querySelector("#canvas");
const resetBtn = document.querySelector("#reset-btn");
const whiteBtn = document.querySelector("#white-btn");
const blackBtn = document.querySelector("#black-btn");
let pixels = Array.from(document.querySelectorAll(".canvas-sq"));
let isMouseDown = false;
let color = getActiveBtnText();

input.addEventListener("input", updateCanvas);

colorPixels();

blackBtn.addEventListener("click", () => {
  checkActive(blackBtn, whiteBtn);
});

whiteBtn.addEventListener("click", () => {
  checkActive(whiteBtn, blackBtn);
});

resetBtn.addEventListener("click", () => {
  updateCanvas();
  checkActive(blackBtn, whiteBtn);
});

function updateCanvas() {
  resetCanvas();
  updateInputText();
  setCanvasSize();
  addDivs();
  pixels = getPixels();
  color = getActiveBtnText();
  colorPixels();
}

function colorPixels() {
  let isMouseDown = false;

  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  document.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      const pixel = event.target;
      if (pixel.classList.contains("canvas-sq")) {
        pixel.style.backgroundColor = color;
      }
    }
  });
}

function getActiveBtnText() {
  if (Array.from(blackBtn.classList).includes("active-btn")) {
    return "black";
  } else {
    return "white";
  }
}

function checkActive(button, otherButton) {
  const isActive = Array.from(button.classList).includes("active-btn");

  if (isActive !== true) {
    button.classList.add("active-btn");
    otherButton.classList.remove("active-btn");
  }

  color = getActiveBtnText();
}

function getPixels() {
  return Array.from(document.querySelectorAll(".canvas-sq"));
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

function resetCanvas() {
  canvas.innerHTML = "";
}

function setCanvasSize() {
  canvas.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
}

function updateInputText() {
  inputTxt.innerText = `${input.value} x ${input.value}`;
}
