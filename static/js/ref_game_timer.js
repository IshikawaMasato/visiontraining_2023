var limitTime = 5;
var startTime = Date.now();
var timeDiff;
var score;

var countdown = function () {
    timeDiff = Date.now() - startTime;
    timeDiff = limitTime - (timeDiff / 1000);
    timeDiff*=10;
    timeDiff = Math.floor(timeDiff);
    timeDiff = timeDiff / 10;
    if( (timeDiff * 10) % 10 == 0 ) {
        document.getElementById('timer').innerText = timeDiff + ".0秒";
    } else {
        document.getElementById('timer').innerText = timeDiff + "秒";
    }
    
}

var id = setInterval(function () {
    countdown();
    if(timeDiff <= 0) {
        clearInterval(id);
        document.getElementById('timer').innerText = "0.0秒";
        document.getElementById('main').remove();
    }
}, 1);
