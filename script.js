window.onload = function () {

    var seconds = 00;
    var tens = 00; 

    var tensresult = document.getElementById('tens');
    var secondsresult = document.getElementById('seconds')
    var start = document.getElementById('start')
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset')

    var interval ;

    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    stop.onclick = function () {
        clearInterval(interval);
    }

    
    reset.onclick = function () {
        clearInterval(interval);
        tens = 00;
        seconds = 00;
        tensresult.innerHTML = tens; 
        secondsresult.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if(tens <= 9){
            tensresult.innerHTML = "0" + tens ;
        }

        if(tens > 9){
            tensresult.innerHTML =  tens ;
        }

        if(tens > 99 ){
            seconds++;
            secondsresult.innerHTML = "0" + seconds ;
            tens = 0 
            tensresult.innerHTML ="0" + 0;
        }

        if(seconds > 9) {
            secondsresult.innerHTML = seconds;
        }
    }
}