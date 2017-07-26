import { view, game } from './quiz.js';

const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json';

fetch(url)
  .then(res => res.json())
  .then(quiz => {
    console.log('questions loaded!');
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});
