let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function start() {
    if(!isRunning){
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function pause() {
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;
    updateDisplay();
}

function updateDisplay() {
    milliseconds++;
    if(milliseconds ==100){
        seconds++;
        milliseconds = 0;

        if(seconds == 0){
            minutes++;
            seconds = 0;

            if(minutes == 60){
                hours++;
                minutes = 0;
            }
        }
    }

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    document.getElementById("display").textContent = formattedTime;

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(miliseconds) {
return milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}
