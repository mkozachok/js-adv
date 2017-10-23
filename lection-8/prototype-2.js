function Player(health, damage) {
    this.playerType = 'General';
    this.name = 'Player';
    this.health = health;
    this.damage = damage;
    
    this.attack = function(anemy) {
      console.log('Player ' + this.name + ' attack by ' + this.damage);
    }
  }
  
  function Elf(name) {
    this.playerType = 'Elf';
    this.name = name;
    this.fly = function (distance) {
      console.log('Player ' + this.name + ' is flaying'); 
    }
  }
  
  function Human(name) {
    this.playerType = 'Human';
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
  
  
  function playerFactory() {}
  
  playerFactory.prototype.createPlayer = function (type, name) {
    var playerClass = null;
    
    switch(type) {
      case 'Elf':
        playerClass = Elf;
        break;
      case 'Human':
        playerClass = Human;
        break;
      default:
        return false;
    }
    
    return new playerClass(name);
  }
  
  
  var meFactory = new playerFactory();
  
  var Tom = meFactory.createPlayer('Elf', 'Tom');
  console.log(Tom.playerType);
  