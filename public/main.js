function interactions() {
  document.addEventListener("click", handleMouseClick);
}
function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    console.log(e.target.dataset.key);
  }
  if (e.target.matches("[data-enter]")) {
    console.log("enter was presed");
  }
  if(e.target.matches("[data-delete]")){
    console.log('delete was pressed')
  }
}
interactions();
