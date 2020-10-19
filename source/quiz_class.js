module.exports = 
class Quiz {
//シャッフル関数
  answers_shuffle([...array]){
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
//Quizbodyの成型
  formatQuizbody(body){
    let quiz = body.results;
  for(let i = 0; i < quiz.length; i++){
    quiz[i].incorrect_answers.push(quiz[i].correct_answer);
    quiz[i].incorrect_answers = this.answers_shuffle(quiz[i].incorrect_answers);
  }
    return quiz;
  };
};