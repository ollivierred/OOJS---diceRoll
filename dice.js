function dice(sides) {
  this.sides = sides;
  this.roll = function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var myDice = new dice(30);
