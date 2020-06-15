
function Quiz(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
  
    this.incrementQuestion = function() {
      this.currentQuestionIndex++;
    };
  
    this.guess = function(question, choice,selectedOption,flag) {
      /*The calculate score is called for the specific question type. Such is
       * the beauty of polymorphism. */
      
      let time = timeLeft
      let getScore = question.calculateScore(choice,selectedOption,time);
      console.log(getScore)
      if(getScore === 0){
        flag = false
        //endGame()
        startAgain(flag)
        return
        
      }
      flag = true
      this.score += getScore
      this.incrementQuestion()
      startAgain(flag);
  
    };
  }