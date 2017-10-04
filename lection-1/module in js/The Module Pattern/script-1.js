var global = 'Some global value'
// Це є глобальний простір змінних
//Стоврити новий простір імен можна в середині {}
// (!) використовуючи var

function iLoveCats() {
  // ми маємо доступ до глобальних зміних
  console.log(global);
  // приватна змінна
  var privateValue = 'It is a big secret. I hate dogs.'
}

// Ми немаємо до неї доступу з глобального простору змінних
console.log(privateValue);

// Module паттерн потрібний для того, щоб зробити інкапсуляцію одночасно як публічних, так і приватних методів/зміними
// емуляція концепції класів
// Реалізуєтся за допомогою замикання.
// Він повертає тільки приватні методи (інтерфейс, арі), для маніпуляції привтаними змінними/методами
// У js немає модифікаторів доступу, як у традиційних ООП мовах програмування
// 2003 було реалізовано декількома людьми

var counterModule = (function () {
  var counter = 0; // private

  return {
    increaseCounter: function () {
      counter++;
    },
    resetCounter: function () {
      counter = 0;
    },
    showCounter: function () {
      return counter;
    }
  }

})();

counterModule.increaseCounter();//1
counterModule.increaseCounter();//2
counterModule.increaseCounter();//3
counterModule.showCounter();//3
counterModule.resetCounter();//0
counterModule.showCounter();//0


var basketModule = (function () {
  // privates
  var basket = [];
 
  function doSomethingPrivate() {
    //...
  }
 
  function doSomethingElsePrivate() {
    //...
  }
 
  // Return an object exposed to the public
  return {
 
    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },
 
    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },
 
    // Public alias to a private function
    doSomething: doSomethingPrivate,
 
    // Get the total value of items in the basket
    getTotal: function () {
 
      var q = this.getItemCount(),
          p = 0;
 
      while (q--) {
        p += basket[q].price;
      }
 
      return p;
    }
  };
})();

basketModule.addItem({
  item: "bread",
  price: 0.5
});
 
basketModule.addItem({
  item: "butter",
  price: 0.3
});
 
// Outputs: 2
console.log( basketModule.getItemCount() );
 
// Outputs: 0.8
console.log( basketModule.getTotal() );