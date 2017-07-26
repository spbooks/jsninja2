const button = document.getElementById('rainbow');

const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

function change() {
  document.body.style.background = colors[Math.floor(7*
Math.random())];
}
button.addEventListener('click', change);

const form = document.forms[0];
form.addEventListener('submit', factorize, false);


function factorize(event) {
// prevent the form from being submitted
  event.preventDefault();
  document.getElementById('output').innerHTML = '<p>This coud take a while ...</p>';
  const number = Number(form.number.value);
  if(window.Worker) {
    const worker = new Worker('factors.js');
    worker.postMessage(number);
    worker.addEventListener('message', (event) => {
      document.getElementById('output').innerHTML = event.data;
    }, false);
  }
}
