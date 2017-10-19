var box = {
  weight: 28,
  color: "red"
};

var otherBox = box;
otherBox.height = 100;

console.log(box === otherBox);
//console.log(box);