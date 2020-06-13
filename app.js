
let seconds=1;


const play = () => {
    


    
    const currentQuizQuestion = quiz.questions[quiz.currentQuestionIndex];
    console.log("currentQuizQuestion", currentQuizQuestion);
    document.getElementById("question").textContent = `${currentQuizQuestion.text}`;
  
    for (let i = 0; i < currentQuizQuestion.choices.length; i++) {
      const option = document.getElementById("option" + (i + 1));
      option.innerHTML = currentQuizQuestion.choices[i];
      option.onclick = () =>
        guess(currentQuizQuestion, currentQuizQuestion.choices[i]);
    }
    document.getElementById("score").textContent = "Score : " + quiz.score;
    
    
  

    
};
  
  const guess = (question, choice) => {
    quiz.guess(question, choice);
    play();
  };
  
  const questions = [
    new PoliticalQuestion(
      1,
      "Who is India’s Prime Minister?",
      ["NaMo", "RaGa", "SiMa", "ArKe"],
      "NaMo"
    ),
    new CricketQuestion(
      2,
      "Who is India's ODI Captain?",
      ["VK", "MSD", "RS", "SD"],
      "VK"
    ),
    new Question(3, "1+2?", ["2", "3", "4", "5"], "3"),
    new PoliticalQuestion(
      4,
      "Current President of India?",
      ["RNK", "SJK", "SRK", "SK"],
      "RNK"
    ),
    new CricketQuestion(
      5,
      "Highest run scorer in ODI?",
      ["SRT", "VK", "PK", "IP"],
      "SRT"
    ),
    new CricketQuestion(
      6,
      "Highest wicket taker in Test",
      ["MM", "SW", "IP", "RPS"],
      "MM"
    ),
    new CricketQuestion(7, "First IPL winner", ["RR", "SRH", "DD", "CSK"], "RR"),
    new PoliticalQuestion(
      8,
      "First PM of India",
      ["JLN", "LBS", "ABV", "NaMo"],
      "JLN"
    ),
    new Question(9, "1+8", ["2", "3", "4", "9"], "9"),
    new Question(10, "1+9", ["2", "3", "4", "10"], "10")
  ];
  
  const quiz = new Quiz(questions);
  
  // const clockStart = () => {
  //   timerId = setInterval(() => {
      
  //     document.getElementById("timer").textContent = `${(seconds++)%10 + 1 }` ;
  //   }, 1000);

  //   timeInterval = setInterval(() => {
  //     //console.log("seconds", seconds);
      
  //     if(quiz.currentQuestionIndex === questions.length){
  //       clearInterval(timeInterval)
  //       clearInterval(timerId)
  //     }
  //     else{
  //       quiz.incrementQuestion();
  //       play()
  //     }
      
  //   }, 10000);
  // };

play()
