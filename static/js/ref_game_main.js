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
let number;
var message = '開始前';
const element1 = document.getElementById('main_ref');
const element2 = document.getElementById('main');
const element3 = document.getElementById('view_levelup');
const element4 = document.getElementById('view_retirement');
const element5 = document.getElementById('view_allclear');
const buttons = document.querySelectorAll('.button');
const buttonNumber = {
    'button1': 0,
    'button2': 1,
    'button3': 2,
    'button4': 3,
    'button5': 4,
    'button6': 5,
    'button7': 6,
    'button8': 7,
    'button9': 8,
    'next': 9
}

document.addEventListener("DOMContentLoaded", function() {
    function CountUp() {
        console.log(`id名「${this.id}」のボタンを押しました。`);
        console.log('id:' + this.id);
        switch (this.id) {
            case 'button1':
            case 'button2':
            case 'button3':
            case 'button4':
            case 'button5':
            case 'button6':
            case 'button7':
            case 'button8':
            case 'button9':
            case 'next':
                number = buttonNumber[this.id];
                break;
            default:
                number = 10;
                break;
        }

        console.log('number:' + number);
        console.log('random:' + random);
        if( number === random ) {
            if( counter < maxcount ) {
                counter++;
                message = '正解';
                console.log(message);
                if( counter === maxcount ) {
                    if( level === maxlevel ) {
                        message = 'ゲームクリア！';
                    } else {
                        level++;
                        counter = 0;
                        message = 'レベルアップ！'
                    }
                    console.log(message);
                }
                Delete_Image();
            }
        } else if( number === 9 ) {
            limitTime = limit[level-1];
            startTime = Date.now();
            intervalTime = 1;
            message = '次のレベルへ';
            console.log(message);
        } else {
            limitTime = 0;
            document.getElementById('main').remove();
            message = '不正解';
            console.log(message);
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
    if( ['開始前', '正解', 'ゲームクリア！', 'レベルアップ！', '次のレベルへ'].includes(message) ) {
        limitTime = limit[level-1];
        startTime = Date.now();
        message = '';
    }
    timeDiff = Date.now() - startTime;
    timeDiff = limitTime - (timeDiff / 1000);
    timeDiff*=10;
    timeDiff = Math.floor(timeDiff);
    timeDiff = timeDiff / 10;
    console.log('残り時間:' + timeDiff + '秒');
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
    element1.style.display = '';
    element2.style.display = '';
    element3.style.display = 'none';
    element4.style.display = 'none';
    element5.style.display = 'none';
    if( ['開始前', '正解', 'クールダウン', '次のレベルへ'].includes(message) ) {
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
    } else if( message === 'レベルアップ！' ) {
        element1.style.display = 'none';
        element2.style.display = 'none';
        element3.style.display = '';
        // limitTime = limit[level - 1];
        // startTime = Date.now();
    } else if( message === '次のレベルへ') {
        limitTime = limit[level - 1];
        startTime = Date.now();
        intervalTime = 1;
        message = '開始前';
        console.log(message);
        Random_Image();
        element1.style.display = '';
        element2.style.display = '';
        element3.style.display = 'none';
        coolDiff = 0;
    } else if( message === 'ゲームクリア！') {
        element1.style.display = 'none';
        element2.style.display = 'none';
        element5.style.display = '';
    } else {
        element1.style.display = '';
        element2.style.display = '';
        element3.style.display = 'none';
        if( element1.style.display === '' && element2.style.display === '' ) {
            if( log === true ) {
                Random_Image();
                log = false;
            }
            countdown();
            if(timeDiff <= 0) {
                // document.getElementById('timer').innerText = "0.0秒";
                element1.style.display = 'none';
                element2.style.display = 'none';
                element4.style.display = '';
                message = 'ゲーム終了！';
                console.log(message);
            }
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
        startTimer();
        log = false;
    }

    if( message === '次のレベルへ' ) {
        setTimeout(Random_Image, limitTime*1000);
        message = '開始前';
    }
}

setInterval(Random_Image, limitTime*1000);

function startTimer() {
    limitTime = limit[level-1];
    startTime = Date.now();
    countdown();
}

function Delete_Image() {
    console.log('delete');
    document.querySelector('img').remove();
}

timer_switch();

