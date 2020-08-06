const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", buttonWasClicked.bind(null, "Yes"));
}

function buttonWasClicked(message: string) {
  console.log("Clicked: " + message);
}
