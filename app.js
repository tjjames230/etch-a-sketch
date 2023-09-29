console.log("hi");

const input = document.querySelector("input");
const inputTxt = document.querySelector("#input-txt");

input.addEventListener("click", (e) => {
  // Update input text
  inputTxt.innerText = `${e.target.value} x ${e.target.value}`;

  // Update canvas to allow target value of rows

  // Create row of divs in canvas equal to target value
  for (let x = 0; x <= e.target.value; x++) {
    // Create column of divs in canvas equal to target value
    for (let y = 0; y <= e.target.value; y++) {}
  }
});
