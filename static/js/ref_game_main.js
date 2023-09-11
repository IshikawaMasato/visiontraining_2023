'use strict';

let counter = 0;
let maxcount = 5;
let level = 1;
let maxlevel = 10;
var limitTime = 5;
var startTime = Date.now();
var timeDiff;
var intervalTime = 1;
var coolDiff;
var score;
var message = '開始前';
const buttons = document.querySelectorAll('.button');

document.addEventListener("DOMContentLoaded", function() {
    function CountUp() {
        console.log(`id名「${this.id}」のボタンを押しました。`);
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

    // ボタン押下後の処理
    buttons.forEach((button) => {
        button.addEventListener('click', CountUp);
    });

    setInterval(function () {
        document.getElementById('counter').innerText = counter;
        document.getElementById('level_now').innerText = level;
    }, 1);
});

var countdown = function () {
    if( ['正解', 'ゲームクリア！', 'レベルアップ！'].includes(message) ) {
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

var cooldown = function () {
    if( ['正解', 'ゲームクリア！', 'レベルアップ！'].includes(message) ) {
        message = 'クールダウン';
        startTime = Date.now();
    }
    coolDiff = Date.now() - startTime;
    coolDiff = intervalTime - (coolDiff/ 1000);
    coolDiff*=10;
    coolDiff = Math.floor(coolDiff);
    coolDiff = coolDiff / 10;
    console.log('クールダウン：残り' + coolDiff + '秒');
}

function timer_switch() {
    if( ['開始前', '正解', 'クールダウン', 'ゲームクリア！', 'レベルアップ！'].includes(message) ) {
        cooldown();
        if(coolDiff <= 0) {
            coolDiff = 0;
            intervalTime = 1;
            limitTime = 5;
            startTime = Date.now();
            message = '';
        }
        console.log('cooltime');
    } else {
        countdown();
        if(timeDiff <= 0) {
            document.getElementById('timer').innerText = "0.0秒";
            document.getElementById('main').remove();
            message = 'ゲーム終了！';
            console.log(message);
        }
    }

    setTimeout(timer_switch, 100);
};

timer_switch();
