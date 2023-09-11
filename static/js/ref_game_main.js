'use strict';

let counter = 0;
let maxcount = 5;
let level = 1;
let maxlevel = 10;
var limitTime = 5;
var startTime = Date.now();
var timeDiff;
var score;

document.addEventListener("DOMContentLoaded", function() {
    function CountUp() {
        if( counter < maxcount ) {
            counter++;
            console.log(counter);
            if( counter === maxcount ) {
                if( level === maxlevel ) {
                    console.log('ゲームクリア！');
                } else {
                    level++;
                    counter = 0;
                    console.log('レベルアップ！');
                }
            }
        }
    }

    document.getElementById('button1').addEventListener('click', CountUp);

    setInterval(function () {
        document.getElementById('counter').innerText = counter;
        document.getElementById('level_now').innerText = level;
    }, 1);
});

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

document.getElementById('button1').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button2').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button3').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button4').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button5').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button6').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button7').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button8').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

document.getElementById('button9').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
});

