// 1. Реалізувати клас Person і два метода, які виводять привітання і адресу.
function Person(name, adress) {
    this.say = function() {}
    this.getAdress = function() {}
}

// 2. Реалізувати класс Tom, який наслідує Person.
// Наслідування реалізувати через протитипи і метод call;
var personTom = new Tom();
personTom.say(); //Повинно вивести -  Hello my name is Tom

// 3. Дописати клас Car
function Car() {
    this.create = function() {
        consoel.log('Created car of type ' + this.type + 'and engine ' + this.engine);
    }
    this.setEngine = function(engine) {

    }
    this.setType = function(type) {

    }
}

var Tesla = new Car();
Tesla.setEngine('Electric');
Tesla.setType('Sedan');
Tesla.create();






