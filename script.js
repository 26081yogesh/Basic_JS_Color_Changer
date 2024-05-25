const buttons = document.querySelectorAll(".square");
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
