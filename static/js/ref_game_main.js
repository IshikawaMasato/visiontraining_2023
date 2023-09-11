'use strict';

let counter = 0;
let maxcount = 5;
let level = 1;
let maxlevel = 10;
var limitTime = 5;
var startTime = Date.now();
var timeDiff;
var score;
var message = '';

document.addEventListener("DOMContentLoaded", function() {
    function CountUp() {
        if( counter < maxcount ) {
            counter++;
            console.log(counter);
            message = '正解';
            console.log(message);
            if( counter === maxcount ) {
                if( level === maxlevel ) {
                    message = 'ゲームクリア！';
                    console.log(message);
                } else {
                    level++;
                    counter = 0;
                    message = 'レベルアップ！'
                    console.log(message);
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
    if( message === '正解' || message === 'ゲームクリア！' || message === 'レベルアップ！' ) {
        limitTime = 5;
        startTime = Date.now();
        message = '';
    }
    timeDiff = Date.now() - startTime;
    timeDiff = limitTime - (timeDiff / 1000);
    timeDiff*=10;
    timeDiff = Math.floor(timeDiff);
    timeDiff = timeDiff / 10;
    if( (timeDiff * 10) % 10 === 0 ) {
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

