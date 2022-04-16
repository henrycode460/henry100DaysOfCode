var second = 00;
var tens = 00;
var Interval;

const outputSecond = document.getElementById("second");
const outoutTens = document.getElementById("tens");

const buttonStart = document.getElementById("btn-start");
const buttonStop = document.getElementById("btn-stop");
const buttonReset = document.getElementById("btn-reset");

buttonStart.addEventListener("click", ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener("click", ()=>{
    clearInterval(Interval);
    
});

buttonReset.addEventListener("click", ()=>{
    clearInterval(Interval);
    tens = "00";
    second = "00";
    outputSecond.innerHTML = second;
    outoutTens.innerHTML = tens; 

    
});


function startTime(){
    tens++;
    if(tens <= 0){
        outoutTens.innerHTML = "0" + tens; 
    }

    if(tens > 9){
        outoutTens.innerHTML =  tens; 
    }

    if(tens > 99){
        second++;
        outputSecond.innerHTML = "0" + second;
        tens = 0;
        outoutTens.innerHTML = "0" + tens;

    }

    if(second > 9){
        outputSecond.innerHTML = second;

    }
}