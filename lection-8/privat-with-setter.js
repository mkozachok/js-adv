function Mobile(model) {
    //privat attributes
    var RAM = 4;
    var sdSize = 0;
    //public attributes
    this.operator = null;
    
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
    //getter
    this.checkSdsize = function() {
      console.log('You have ' + sdSize + 'GB');
      return sdSize;
    }
    //setter
    this.insertSD = function(size) {
      if (size < 128) {
        sdSize = size;
      } else {
        sdSize = 0;
      }
    }
  }
  
  var moto = new Mobile('Motorola');
  moto.call(4454554);
  
  moto.insertSD(32);
  moto.checkSdsize();
  