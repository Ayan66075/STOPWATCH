var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var getHtmlMin = document.getElementById('min');
var getHtmlSec = document.getElementById('sec');
var getHtmlMsec = document.getElementById('msec');
var interval;

function start() {
    interval = setInterval(function() {
        miliseconds++;
        
        if (miliseconds >= 100) {
            miliseconds = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        getHtmlMin.innerHTML = minutes
        getHtmlSec.innerHTML = seconds
        getHtmlMsec.innerHTML = miliseconds
    }, 10);
    document.getElementById('btn').disabled = true;
}
function pause() {
    clearInterval(interval);
    document.getElementById('btn').disabled = false;
}
function reset() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    getHtmlMin.innerHTML = minutes
    getHtmlSec.innerHTML = seconds
    getHtmlMsec.innerHTML = miliseconds
    document.getElementById('btn').disabled = false;
}