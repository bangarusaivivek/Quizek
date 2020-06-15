function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
  }
  
function Question(id, text, choices, answer) {
  console.log(this);
  this.id = id;
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  
  let isCorrectAnswer = (choice,selectedOption) => {
    console.log("i am in isCorrectAns")
    console.log(`${selectedOption}`)
    
    return selectedOption === this.answer;
  };
  
  this.calculateScore = (choice,selectedOption,time) => {
      const isCorrect = isCorrectAnswer(choice,selectedOption);
      let ans = this.answer
      //console.log("question", isCorrect ? 10 : 0);
      console.log(timeLeft)
      document.getElementById(this.answer).classList.add("greenselect")
      return isCorrect ? time : 0
  };
}
  
extend(CricketQuestion, Question);
  
function CricketQuestion(id, text, choices, answer) {
  Question.apply(this, [id, text, choices, answer]);
  
  let isCorrectAnswer = (choice,selectedOption) => {
    console.log(`${selectedOption}`)
    return selectedOption === this.answer;
  };
  let difficultyFactor = 5;
  
  this.calculateScore = (choice,selectedOption,time) => {
    const isCorrect = isCorrectAnswer(choice,selectedOption);
    //console.log("CricketQuestion", isCorrect ? difficultyFactor * 10 : 0);
    console.log(timeLeft)
    document.getElementById(this.answer).classList.add("greenselect")
    return isCorrect ? time : 0
  };
}
  
extend(PoliticalQuestion, Question);
  
function PoliticalQuestion(id, text, choices, answer) {
  Question.apply(this, [id, text, choices, answer]);
  
  let isCorrectAnswer = (choice,selectedOption) => {
    console.log("i am in isCorrectAns")
    console.log(`${selectedOption}`)

    return selectedOption === this.answer;
  };
  
  let difficultyFactor = 7;
  
  this.calculateScore = (choice,selectedOption,time) => {
    const isCorrect = isCorrectAnswer(choice,selectedOption);
    //console.log("PoliticalQuestion", isCorrect ? difficultyFactor * 10 : 0);
    console.log(timeLeft)
    document.getElementById(this.answer).classList.add("greenselect")
    return isCorrect ? time : 0
  };
}