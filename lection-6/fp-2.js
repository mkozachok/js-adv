// Клонування обєктів

var box = {
  weight: 28,
  color: "red"
};

var otherBox = Object.assign({}, box); //ES2015
otherBox.height = 100;

console.log(box === otherBox);
console.log(box);

var box2 = JSON.parse(JSON.stringify(box));

console.log(box === box2);