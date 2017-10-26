var http = require('http');
var Static = require('node-static');
var WebSocketServer = new require('ws');

// ппідключені клієнти
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({port: 8081});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("нове зєднання " + id);

  ws.on('message', function(message) {
    console.log('отримано повідомлення ' + message);

    for(var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('зєднання закрито ' + id);
    delete clients[id];
  });

});


// обычный сервер (статика) на порту 8080
var fileServer = new Static.Server('.');
http.createServer(function (req, res) {
  
  fileServer.serve(req, res);

}).listen(8082);

console.log("Сервер запущен на портах 8080, 8081");

