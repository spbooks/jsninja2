function factorsOf(n) {
  if(Number.isNaN(Number(n))) {
    throw new RangeError('Argument Error: Value must be an integer');
  }
  if(n < 0) {
    throw new RangeError('Argument Error: Number must be positive');
  }
  if(!Number.isInteger(n)) {
    throw new RangeError('Argument Error: Number must be an integer');
  }
  const factors = [];
  for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
    if (n%i === 0){
      factors.push(i,n/i);
    }
  }
  return factors.sort((a,b) =>  a - b);
}

self.addEventListener('message', (event) => {

  const factors = String(factorsOf(Number(event.data)));
  self.postMessage(factors);
  self.close();

}, false);
