//Створення об'єктів за допомогою фцнкції конструктора
function Person(name, age) {
    // this = {}
    var greeting = 'Hello! '; // privat property
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(greeting + 'My name is ' + this.name);
    }
    // return this
}

var John = new Person('John', 22);
//John.name = 'Bob';
John.sayHello();