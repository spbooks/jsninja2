const quiz = [
              { name: "Superman",realName: "Clark Kent" },
              { name: "Wonderwoman",realName: "Dianna Prince" },
              { name: "Batman",realName: "Bruce Wayne" },
            ];

// View Object
const view = {
  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  render(target,content,attributes) {
      for(const key in attributes) {
        target.setAttribute(key, attributes[key]);
      }
      target.innerHTML = content;
  }
};

// Game Object
const game = {
  start(quiz){
    this.score = 0;
    this.questions = [...quiz];
    // main game loop
    for(const question of this.questions){
      this.question = question;
      this.ask();
    }
    // end of main game loop
    this.gameOver();
  },
  ask(){
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    const response =  prompt(question);
    this.check(response);
  },
  check(response){
    const answer = this.question.realName;
    if(response === answer){
      view.render(view.result,'Correct!',{'class':'correct'});
      alert('Correct!');
      this.score++;
      view.render(view.score,this.score);
    } else {
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },
  gameOver(){
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
  }
}

game.start(quiz);
