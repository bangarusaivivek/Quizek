
let seconds=1;
let options = document.querySelectorAll(".inner-options")
let variable;
let flag=false;

const play = () => {
    
    options.forEach((option) => {
      option.classList.remove("greenselect")
    })
   

    
    const currentQuizQuestion = quiz.questions[quiz.currentQuestionIndex];

    document.getElementById("question").textContent = `${currentQuizQuestion.text}`;
    console.log(flag)
    for (let i = 0; i < currentQuizQuestion.choices.length; i++) {
      const option = document.getElementById((i+1));
      option.innerHTML = currentQuizQuestion.choices[i];
      option.onclick = () => {
        guess(currentQuizQuestion, currentQuizQuestion.choices[i],i+1,flag);
      }
   
    }
    document.getElementById("score").textContent = "Score : " + quiz.score;
    
    
  

    
};
  
const guess = (question, choice,selectedOption,flag) => {
  quiz.guess(question, choice,selectedOption,flag);
  (function(){
    setTimeout(()=>{
      play();
    },500)
  })()
    
};
  
const questions = [
  new PoliticalQuestion(
      1,
      "Who is India’s Prime Minister?",
      ["NaMo", "RaGa", "SiMa", "ArKe"],
      1
    ),
    new CricketQuestion(
      2,
      "Who is India's ODI Captain?",
      ["VK", "MSD", "RS", "SD"],
      1
    ),
    new Question(3, "1+2?", ["2", "3", "4", "5"], 2),
    new PoliticalQuestion(
      4,
      "Current President of India?",
      ["RNK", "SJK", "SRK", "SK"],
      1
    ),
    new CricketQuestion(
      5,
      "Highest run scorer in ODI?",
      ["SRT", "VK", "PK", "IP"],
      1
    ),
    new CricketQuestion(
      6,
      "Highest wicket taker in Test",
      ["MM", "SW", "IP", "RPS"],
      1
    ),
    new CricketQuestion(7, "First IPL winner", ["RR", "SRH", "DD", "CSK"], 1),
    new PoliticalQuestion(
      8,
      "First PM of India",
      ["JLN", "LBS", "ABV", "NaMo"],
      1
    ),
    new Question(9, "1+8", ["2", "3", "4", "9"], 4),
    new Question(10, "1+9", ["2", "3", "4", "10"], 4)
];
  
const quiz = new Quiz(questions);
  


play()

