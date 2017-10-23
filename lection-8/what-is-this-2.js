var person = {
    name: 'John',

    sayHi: function () {
        console.log('Hello');
        //console.log(this === person); // this - це лінк на об'кт, в якому викликаєтся метод
    }
}

person.sayHi();

var person = {
    name: 'John',

    sayHi: function () {
        console.log('Hello, my name is ' + person.name);
    }
}

person.sayHi();

//ключове слово "this" використовуєтся для доступа методу до ПОТОЧНОГО обєкта.

var person = {
    name: 'John',

    sayHi: function () {
        console.log('Hello, my name is ' + this.name);
    }
}

person.sayHi();

//кожна функція може використовувати this
// this визначаєтся в момент визову функції
function intoruduce() {
    console.log('My name is' + this.name);
}

var Bob = {
    name: 'Bob',
    saySth: introduce 
}

var Marty = {
    name: 'Marty',
    saySth: introduce 
}

//виклик функції не в контексті об'єкта
function run() {
    //'use strict'
    console.log(this); // this = undefined
}
run();

//яким буде результат цього коду?
var person = {
    name: 'John',

    sayHi: function () {
        console.log('Hello, my name is ' + this.name);
    }
}
(person.name === 'John' ? person .sayHi : console.log('I am not John'))();

//Що виведе консоль?
var someObject = {
    num: 5,
    export: this
}

console.log(someObject.export.name);