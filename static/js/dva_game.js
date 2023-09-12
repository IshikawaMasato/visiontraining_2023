const imageArea = document.getElementById('image');
const images = ['/static/images/dva_game_number_1.png', 
                '/static/images/dva_game_number_2.png',
                '/static/images/dva_game_number_3.png', 
                '/static/images/dva_game_number_4.png',
                '/static/images/dva_game_number_5.png', 
                '/static/images/dva_game_number_6.png', 
                '/static/images/dva_game_number_7.png',
                '/static/images/dva_game_number_8.png', 
                '/static/images/dva_game_number_9.png'
              ];//flaskにする場合staticを削除する

let imageNo = Math.floor( Math.random() * images.length)
imageArea.src = images[imageNo]; //画像のランダム表示
const start = document.getElementById('start'); // 開始ボタン
const image = document.getElementById('image'); // ロゴ画像
const ans_button = document.getElementById('button_table');
const game_level = document.getElementById('game_level');

const incorrect_score = document.getElementById('incorrect_score');
const incorrect_level = document.getElementById('incorrect_level');

const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');

let level=1;
let exe_time=2000;
let dva_geme_score=0

// スタートボタンをクリックしたら
start.addEventListener('click', () => {
  correct.style.display='none';
  incorrect.style.display='none';
  incorrect_score.style.display='none';
  incorrect_level.style.display='none';

  image.style.display=''; //画像を表示させたい
  ans_button.style.display='';//ボタンを表示させたい

  imageNo = Math.floor( Math.random() * images.length)
  imageArea.src = images[imageNo]; //画像のランダム表示
  image.animate(
    // 途中の状態を表す配列
    [
      { transform: 'translateX(0px)'}, // 開始時の状態（左端）
      { transform: 'translateX(1920px)' } // 終了時の状態（左端から200pxの位置）
    ], 
    // タイミングに関する設定
    {
      fill: 'forwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: exe_time, // 再生時間（ミリ秒）
    },
  );
});

document.getElementById('button1').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');    
    if (images[imageNo]==='/static/images/dva_game_number_1.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      
      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1

    }
});

document.getElementById('button2').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_2.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button3').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_3.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button4').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_4.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button5').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_5.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button6').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_6.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button7').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_7.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+va_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button8').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_8.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});

document.getElementById('button9').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_9.png'){
      console.log('正解')
      level+=1
      exe_time-=200
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)
      exe_time=1000

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
      dva_geme_score=0
      level=1
    }
});
