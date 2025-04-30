let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


let hours = 0;
let mins = 0;
let secs = 0;

const start = ()=>{
    secs++;
    if(secs == 60)
    {
        secs = 0;
        mins++;
    }
    else if(mins == 60){
        mins = 0;
        hours++;
    }

    hour.innerHTML = hours < 10 ? "0"+hours : hours;
    min.innerHTML = mins < 10 ? "0"+mins : mins;
    sec.innerHTML = secs < 10 ? "0"+secs : secs;
    
    
    
}

var x;
const start2 = ()=>{

    x = setInterval(()=>{
        start()
    },1000)
}


const stop = ()=>{
    clearInterval(x)
}

const reset = ()=>{
    secs = 0;
    mins = 0;
    hours = 0;

    hour.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";

    clearInterval(x)
}