function Player(health, damage) {
    this.name = 'Player';
    this.health = health;
    this.damage = damage;
    
    this.attack = function() {
      console.log('Player ' + this.name + ' attack by ' + this.damage);
    }
  }
  
  function Elf(name) {
    this.name = name;
    this.fly = function (distance) {
      console.log('Player ' + this.name + ' is flaying'); 
    }
  }
  
  function Human(name) {
    this.name = name;
    this.run = function (distance) {
      console.log('Player ' + this.name + ' is running'); 
    }
  }
  
  Elf.prototype = new Player(100, 30);
  Human.prototype = new Player(150, 20);
  
  var Tom = new Elf('Tom');
  var Bob = new Human('Bob');
  
  Tom.fly(20);
  Bob.run(4);
  
  Tom.attack();
  Bob.attack();