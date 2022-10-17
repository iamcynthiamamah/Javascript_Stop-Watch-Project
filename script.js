const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

//variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


//variables for set intervals and timerstatus
let timeInterval = 'null'
let timerStatus = "stopped"


//Stop Watch Function
function stopWatch(){

    seconds++

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes/60 ===1){
            minutes = 0;
            hours++
        }
    }
//conditional to ensure the timer is always in tens i.e '00' e.g '08'instead of '8'
    if(seconds < 10){
        leadingSeconds = "0" + seconds;
    }
    else{
        leadingSeconds = seconds
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes;
    }
    else{
        leadingMinutes = minutes
    }

    if(hours < 10){
        leadingHours  = "0" + hours ;
    }
    else{
        leadingHours  = hours 
    }
//will select the timer ID and assign it to the variable displayTimer
    let displayTimer = document.querySelector('#timer');
//will display the innertext of the ID selected which is the timer as shown below
    displayTimer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}




//adding functionality to the buttons
startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped"){  //note timrStatus has already being set to stopped when the variable was declared
        timeInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus="started";  //take note of the innerHTML used hence we are adding a html tag unlike when we added a text and used innerTEXT
    }
    
    else{
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus="stopped"
    }
})

resetBtn.addEventListener('click', function(){
    window.clearInterval(timeInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('#timer').innerHTML = "00:00:00"
})

//window.setInterval(stopwatch, 100)   will carry out the stopwa67ltch function at every 1000milliseconds set interval