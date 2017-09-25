function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

const button = document.getElementById("button");
button.addEventListener('click', function () {
  var result = myDice.roll();
  printNumber(result);
});
