//Для того щоб явно вказати this для функції, ми використовуємо 
// call i apply

//func.call(context, arg1, arg2, ...)

var apple = {
	color: "Red"
}

var banana = {
	color: "Yellow"
}

function printColor() {
	console.log(this.color);
}

// Щоб викликати функцію в контексті обєкта, подібно ніби ми викликаємо вбудований метод
printColor.call(apple);
printColor.call(banana);

// function printColor() {
// 	this = apple();
// 	console.log(this.color);
// }

function printColorWithText(textBefore, textAfter) {
	console.log(textBefore + this.color + textAfter);
}

//func.call(context, arg1, arg2, ...)
printColorWithText.call(banana, "The color is '", "'!");

//Якщо нам не відомо, яка кількість параметрів повинна бути, то нам допоможе
//func.apply(contects, [argsArray])

printColorWithText.apply(banana, ["The color is '", "'!"]);

