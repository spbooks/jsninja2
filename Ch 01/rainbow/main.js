const btn = document.getElementById('button');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function change() {
  document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);
