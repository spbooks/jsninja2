export default {
  start(quiz){
    console.log('start() invoked');
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.secondsRemaining = 20;
    this.timer = setInterval( this.countdown , 1000 );
    this.ask();
  },
  countdown() {
    game.secondsRemaining--;
    view.render(view.timer,game.secondsRemaining);
      if(game.secondsRemaining <= 0) {
        game.gameOver();
      }
  },
  ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 2) {
      shuffle(this.questions);
      this.question = this.questions.pop();
      const options = [this.questions[0].answer, this.questions[1].answer, this.question.answer];
      shuffle(options);
      const question = `What is ${this.question.question}'s real name?`;
      view.render(view.question,question);
      view.render(view.response,view.buttons(options));
    }
    else {
      this.gameOver();
    }
  },
  check(event){
    console.log('check(event) invoked')
    const response = event.target.textContent;
    const answer = this.question.answer;
    if(response === answer){
      console.log('correct');
      view.render(view.result,'Correct!',{'class':'correct'});
      this.score++;
      view.render(view.score,this.score);
    } else {
      console.log('wrong');
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    this.ask();
  },
  gameOver(){
    console.log('gameOver() invoked')
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
    clearInterval(this.timer);
  },
  hiScore(){
    const hi = localStorage.getItem('highScore') || 0;
    if(this.score > hi || hi === 0) localStorage.setItem('highScore',this.score);
    return localStorage.getItem('highScore');
  }
}
