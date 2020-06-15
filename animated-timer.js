
const FULL_DASH_ARRAY = 283;
//warning occurs at 10s
const WARNING_THRESHOLD = 6;

//Alert occurs at 5s
const ALERT_THRESHOLD = 3;

const COLOR_CODES ={
    info:{
        color:"green"
    },
    warning:{
        color:"orange",
        threshold:WARNING_THRESHOLD
    },
    alert:{
        color:"red",
        threshold:ALERT_THRESHOLD
    }
};

let TIME_LIMIT =10;

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;



function onTimesUp(){
    clearInterval(timerInterval);
    
}

const startTimer = (flag) =>{
    //console.log(TIME_LIMIT,timePassed,remainingPathColor)
    //console.log(flag)
    flag = false
    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
    timerInterval = setInterval(() => {
        timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed
        document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft)

        if(timeLeft === 0){
            
            
            startAgain(flag);
            
        }
    },1000);
}

function startAgain(flag){
    console.log(flag)
    
    onTimesUp()
    //quiz.incrementQuestion();
    if(flag === false){
        return
    }
    if(quiz.currentQuestionIndex >= questions.length){
        //onTimesUp()
        
        return;
    }
    //console.log(quiz.currentQuestionIndex)
    
    TIME_LIMIT =10;

    timePassed = 0;
    timeLeft = TIME_LIMIT;
    timerInterval = null;
    document.getElementById("base-timer-path-remaining")
      .classList.remove("red");

      document.getElementById("base-timer-path-remaining")
      .classList.add(COLOR_CODES.info.color);
    document.getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray",283);
    setTimeout(()=>{
        play();
    },500)
    
   
    setTimeout(() => {
        startTimer(flag)
    }, 500);
    // startTimer()
    
}

const formatTimeLeft = time => {
    const minutes = Math.floor(time/60);

    let seconds = time%60;

    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    return `:${seconds}`;
}




function setRemainingPathColor(timeLeft){
    const {alert,warning,info} = COLOR_CODES;

    if(timeLeft <= alert.threshold){
        document.getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
        document.getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    }
    // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}



//Divivdes time left by the defined time limit
function calculateTimeFraction(){
    const rawTimeFraction = timeLeft/TIME_LIMIT;
    return rawTimeFraction - (1/TIME_LIMIT)*(1-rawTimeFraction);
}

//Update the dasharray value as time passes starting with 283
function setCircleDasharray(){
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document.getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray",circleDasharray);

}






document.getElementById("timer").innerHTML = `
<div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283 283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d = "
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                "
            ></path>
        </g>
    </svg>
    <span id="base-timer-label" class = "base-timer__label">
        ${formatTimeLeft(timeLeft)}
    </span>
</div>
`;

startTimer(flag);