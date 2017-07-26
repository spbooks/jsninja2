const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', (event) => {
    output('CONNECTED');
  }, false);

function output(message)
{
  const para = document.createElement('p');
  para.innerHTML = message;
  outputDiv.appendChild(para);
}

form.addEventListener('submit', message, false);

function message(event) {
  event.preventDefault();
  const text = form.message.value;
  output(`SENT: ${text}`)
  connection.send(text);
}

connection.addEventListener('message', (event) => {
  output(`RESPONSE: ${event.data}`);
}, false);

connection.addEventListener('close', (event) => {
    output('DISCONNECTED');
  }, false);

connection.addEventListener('error', (event) => {
  output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
}, false);
