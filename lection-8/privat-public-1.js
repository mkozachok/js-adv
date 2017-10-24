function Mobile(model) {
    //privat attributes
    var RAM = 4;
    //public attributes
    this.operator = null;
    this.sdSize = 0;
    
    //privat methods
    function connect() {
      console.log(model + ' connected to gsm station');
    }
    function dial(number) {
      console.log(model + ' dialing to ' + number);
    }
    
    //public methods
    this.call = function(number) {
      connect();
      dial(number);
    }
    this.checkSdsize = function() {
      console.log('You have ' + this.sdSize + 'GB');
    }
  }
  
  var moto = new Mobile('Motorola');
  moto.call(4454554);
  
  moto.sdSize = 32; 
  moto.checkSdsize();
  