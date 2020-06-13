function Quiz(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
  
    this.incrementQuestion = function() {
      this.currentQuestionIndex++;
    };
  
    this.guess = function(question, choice) {
      /*The calculate score is called for the specific question type. Such is
       * the beauty of polymorphism. */
      this.score += question.calculateScore(choice);
      
      // clearInterval(timerId)
      // clearInterval(timeInterval)
      // seconds=1;
      this.incrementQuestion();
      
      // clockStart();
    };
  }