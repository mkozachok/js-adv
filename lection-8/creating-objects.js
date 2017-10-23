// new
function Animal() {
    var obj = {};
    obj.name = 'Animal';
    obj.toString = function() {
      console.log('This is ' + obj.name);
    }
    
    return obj;
  }
  
  var newAnimal = Animal();
  newAnimal.toString();
  
  //За допомогою функції конструктура ми отримали обєкт
  // class Dog
  function Dog() {
    this.name = 'Dog';
    this.toString = function() {
      console.log('This is ' + this.name);
    }
  }
  
  // екземпляр класу Dog
  var newDog = new Dog();
  newDog.toString();