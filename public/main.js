const boardGrid = document.querySelector("[data-grid]");
const word = 5;
const targetword = "wordl";

function interactions() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleDownKey);
}

interactions();
//handles functionality of when a key is clicked
function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    keyPressed(e.target.dataset.key);
    return;
  }
  if (e.target.matches("[data-enter]")) {
    enterGuess();
    return;
  }
  if (e.target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
}
//handles functionality of when a key is pressed
function handleDownKey(e) {
  if (e.key === "Enter") {
    enterGuess();
    return;
  }
  if (e.key === "Delete" || e.key === "Backspace") {
    deleteKey();
    return;
  }
  if (e.key.match(/^[a-z]$/)) {
    keyPressed(e.key);
    return;
  }
}
function enterGuess() {
  let currentBox = [...getCurrentBoxes()];
  if (getCurrentBoxes().length !== word) {
    console.log("Not long enough");
    return;
  }
  console.log(currentBox);
  let c = "";
  for (let i = 0; i < currentBox.length; i++) {
    c += currentBox[i].dataset.letter;
  }
  if (c === targetword) {
    
  }
  // const currentGuess = currentBox.reduce((word, box) => {
  //   return word + box.dataset.letter;
  // }, "");
  // console.log(currentGuess);
}
//deletes the current letter in the current box
function deleteKey() {
  const currentBoxesSelected = getCurrentBoxes();
  const lastBox = currentBoxesSelected[currentBoxesSelected.length - 1];
  if (lastBox == null) {
    return;
  }
  //clears textContent, deletes box styling / letter value
  lastBox.textContent = "";
  delete lastBox.dataset.state;
  delete lastBox.dataset.letter;
}

//functionality to set text content and styling to a box in
//the board grid
function keyPressed(key) {
  //implemented a check to make sure user cannot go past one row without submitting their guess
  const currentBoxesSelected = getCurrentBoxes();
  if (currentBoxesSelected.length >= word) {
    console.log(getCurrentBoxes());
    return;
  }
  //initalizes a box, which is the next available div box that does not
  //contain a data letter value
  const box = boardGrid.querySelector(":not([data-letter])");
  //defining what each box should contain: lowercase, value of key that was pressed and its styling state
  box.dataset.letter = key.toLowerCase();
  box.textContent = key;
  box.dataset.state = "currentBox";
  console.log(box);
}

function getCurrentBoxes() {
  return boardGrid.querySelectorAll('[data-state="currentBox"]');
}
