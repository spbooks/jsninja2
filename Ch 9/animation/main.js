const squareA = document.getElementById('A');
const squareB = document.getElementById('B');

let angleA = 0;

setInterval( () => {
  angleA = (angleA + 2) % 360;
  squareA.style.transform = `rotate(${angleA}deg)`
}, 1000/60);

let angleB = 0;

function rotateB() {
  angleB = (angleB + 2)%360
  squareB.style.transform = `rotate(${angleB}deg)`
  window.requestAnimationFrame(rotateB);
}

const id = requestAnimationFrame(rotateB);
