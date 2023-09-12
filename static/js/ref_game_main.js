'use strict';

let counter = 0;
let maxcount = 5;
let level = 1;
let maxlevel = 10;
const limit = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5];
var limitTime = limit[level-1];
var startTime = Date.now();
var timeDiff;
var intervalTime = 1;
var coolDiff;
var score;
var log = true;
let random;
var message = '開始前';
const buttons = document.querySelectorAll('.button');

document.addEventListener("DOMContentLoaded", function() {
    function CountUp() {
        console.log(`id名「${this.id}」のボタンを押しました。`);
        if( counter < maxcount ) {
            counter++;
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
            Delete_Image();
            // Random_Image();
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
    // Random_Image();
    if( ['開始前', '正解', 'ゲームクリア！', 'レベルアップ！'].includes(message) ) {
        limitTime = limit[level-1];
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
        if( (limitTime * 10) % 10 === 0 ) {
            document.getElementById('timer').innerText = limitTime + ".0秒";
        } else {
            document.getElementById('timer').innerText = limitTime + "秒";
        }
        cooldown();
        if(coolDiff <= 0) {
            coolDiff = 0;
            intervalTime = 1;
            limitTime = limit[level-1];
            startTime = Date.now();
            message = '';
            log = true;
            console.log('cooltime finish!');
        }
    } else {
        console.log(log);
        if( log === true ) {
            Random_Image();
            log = false;
        }
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

// 画像ランダム表示
function Random_Image() {
    let image_area;
    let image = document.createElement('img');
    image.src = '../../../static/images/jyobi.png';
    image.alt = 'ゲーム画像';

    const img_button = [
        document.getElementById('button1'),
        document.getElementById('button2'),
        document.getElementById('button3'),
        document.getElementById('button4'),
        document.getElementById('button5'),
        document.getElementById('button6'),
        document.getElementById('button7'),
        document.getElementById('button8'),
        document.getElementById('button9')
    ];

    if( log === true ) {
        random = Math.floor(Math.random() * img_button.length);
        console.log(random);
        image_area = img_button[random];
        image_area.appendChild(image);
        log = false;
    }

    setTimeout(Random_Image, limitTime*1000);
}

setInterval(Random_Image, limitTime*1000);

function Delete_Image() {
    console.log('delete');
    document.querySelector('img').remove();
}

timer_switch();

