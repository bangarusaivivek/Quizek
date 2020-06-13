function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
  }
  
function Question(id, text, choices, answer) {
  console.log(this);
  this.id = id;
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  
  let isCorrectAnswer = choice => {
    console.log("choice, answer", choice, this.answer);
    return choice === this.answer;
  };
  
  this.calculateScore = choice => {
      const isCorrect = isCorrectAnswer(choice);
      console.log("question", isCorrect ? 10 : 0);
      return isCorrect ? 10 : 0;
  };
}
  
extend(CricketQuestion, Question);
  
function CricketQuestion(id, text, choices, answer) {
  Question.apply(this, [id, text, choices, answer]);
  
  let isCorrectAnswer = choice => {
    return choice === this.answer;
  };
  let difficultyFactor = 5;
  
  this.calculateScore = choice => {
    const isCorrect = isCorrectAnswer(choice);
    console.log("CricketQuestion", isCorrect ? difficultyFactor * 10 : 0);
    return isCorrect ? difficultyFactor * 10 : 0;
  };
}
  
extend(PoliticalQuestion, Question);
  
function PoliticalQuestion(id, text, choices, answer) {
  Question.apply(this, [id, text, choices, answer]);
  
  let isCorrectAnswer = choice => {
    return choice === this.answer;
  };
  
  let difficultyFactor = 7;
  
  this.calculateScore = choice => {
    const isCorrect = isCorrectAnswer(choice);
    console.log("PoliticalQuestion", isCorrect ? difficultyFactor * 10 : 0);
    return isCorrect ? difficultyFactor * 10 : 0;
  };
}