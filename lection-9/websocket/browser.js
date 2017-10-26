if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

// підключитися
var socket = new WebSocket("ws://localhost:8081");

// відправка повідомлення
document.forms.publish.onsubmit = function() {
  var outgoingMessage = this.message.value;

  socket.send(outgoingMessage);
  return false;
};

// функція-обробки вхідних повідомлень
socket.onmessage = function(event) {
  var incomingMessage = event.data;
  console.log('show');
  showMessage(incomingMessage); 
};

// додати повідомлення в div#subscribe
function showMessage(message) {
  var messageElem = document.createElement('div');
  messageElem.appendChild(document.createTextNode(message));
  document.getElementById('subscribe').appendChild(messageElem);
}
