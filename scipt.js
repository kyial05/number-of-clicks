let sum = document.getElementById("num");
let zero = 0;
sum.addEventListener("click", function () {
  zero += 1;
  sum.innerHTML = zero;
  sum.style.transition = "5s";
  sum.style.background = "red";
  sum.style.color = "white";
});
let tx = document.getElementById("text");
tx.addEventListener("click", function () {
  tx.style.color = "blue";
  tx.style.border = "2px solid black";
  tx.style.transition = "5s";
});
