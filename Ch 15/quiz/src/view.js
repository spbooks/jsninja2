export default {
  score: document.querySelector('#score strong'),
  question: document.querySelector('#question'),
  result: document.querySelector('#result'),
  info: document.querySelector('#info'),
  start: document.querySelector('#start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  hiScore: document.querySelector('#hiScore strong'),
  render(target,content,attributes) {
      for(const key in attributes) {
        target.setAttribute(key, attributes[key]);
      }
      target.innerHTML = content;
  },
  show(element){
    element.style.display = 'block';
  },
  hide(element){
    element.style.display = 'none';
  },
  setup(){
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.render(this.hiScore, game.hiScore());
  },
  teardown(){
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
    this.render(this.hiScore, game.hiScore());
  },
  buttons(array){
    return array.map(value => `<button>${value}</button>`).join('');
  }
}
