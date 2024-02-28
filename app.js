const timerSecond=document.getElementById("timer_second");
const timerMinute=document.getElementById("timer_minute");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const conT=document.getElementById("continue")
let Interval=''
const short=document.getElementById("short")
const main=document.getElementById("main")

let stopClicked = false;

function timer(){
    timerSecond.innerHTML="59"
    timerMinute.innerHTML="24"
    Interval=setInterval(function() {timerSecond.innerHTML--;},  1000);
    setInterval(function() {timerMinute.innerHTML--; timerSecond.innerHTML="59" },  60000);
    start.disabled=true;
    start.style.display="none"

}
function shortTimer(){
    
}

start.addEventListener("click",()=>{
timer()
})

function stopTimer(){
    clearInterval(Interval)
    
    conT.style.display="inline"
}
stop.addEventListener("click",()=>{stopTimer()})

function ContinueTimer(){
    Interval=setInterval(function() {timerSecond.innerHTML--;},  1000);
    setInterval(function() {timerMinute.innerHTML--;  },  60000);


    conT.style.display="none"
   
}
conT.addEventListener("click",()=>{
    ContinueTimer()
})

short.addEventListener("click",()=>{
main.style.backgroundColor="blue"
timerMinute.innerHTML="05"
})