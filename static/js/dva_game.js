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
const button_msg = document.getElementById('button_msg');
const ans_button = document.getElementById('button_table'); //数字ボタンのテーブル

const next_button = document.getElementById('next_button'); // 次へボタン
const top_button = document.getElementById('top_button'); // トップへ戻るボタン

const pop_up_1 = document.getElementById('pop_up_1'); //遊び方
const pop_up_2 = document.getElementById('pop_up_2'); //ランキング

const now_level = document.getElementById('now_level'); //レベル
let outputElement = document.getElementById("output");


const incorrect_score = document.getElementById('incorrect_score'); //スコア
const incorrect_level = document.getElementById('incorrect_level'); //レベル

const correct = document.getElementById('correct'); //正解
const incorrect = document.getElementById('incorrect'); //不正解

let level=1;
let exe_time=2000;
let dva_geme_score=0

// スタートボタンをクリックしたら
start.addEventListener('click', () => {

  start.style.display='none'; // スタートボタンを非表示
  pop_up_1.style.display='none'; // 遊び方を非表示
  pop_up_2.style.display='none'; // ランキングを非表示

  correct.style.display='none'; // 正解の非表示
  incorrect.style.display='none'; // 不正解の非表示
  incorrect_score.style.display='none'; // 不正解のスコア非表示
  incorrect_level.style.display='none'; // 不正解のレベル非表示

  button_msg.style.display=''; // 数字ボタンを押すメッセージ表示
  ans_button.style.display=''; // 数字ボタンを表示

  setTimeout(() => {
    // 3秒後に以下のコードが実行されます
    image.style.display=''; // 画像を表示
    imageNo = Math.floor(Math.random() * images.length)
    imageArea.src = images[imageNo]; // 画像のランダム表示

    image.animate(
      // 途中の状態を表す配列
      [
        { transform: 'translateX(0px)' }, // 開始時の状態（左端）
        { transform: 'translateX(1920px)' } // 終了時の状態（左端から200pxの位置）
      ],
      // タイミングに関する設定
      {
        fill: 'forwards', // 再生前後の状態（再生前、開始時の状態を適用）
        duration: exe_time, // 再生時間（ミリ秒）
      },
    );
  }, 3000); // 3秒待ってからゲームを開始
});

// 次へボタンをクリックしたら
next_button.addEventListener('click', () => {
  level+=1 //レベルの加算処理
  exe_time-=200 //実行時間の減算処理(速さの変更)
  next_button.style.display='none'; //  次への非表示
  top_button.style.display='none'; //トップボタンの非表示
  correct.style.display='none'; //正解の非表示
  incorrect.style.display='none'; //不正解の非表示
  incorrect_score.style.display='none'; //不正解のスコア非表示
  incorrect_level.style.display='none'; //不正解のレベル非表示

  image.style.display='none'; //画像を表示
  button_msg.style.display=''; //数字ボタンを押すメッセージ表示
  ans_button.style.display=''; //数字ボタンを表示

  if (level==11){
    outputElement.style.display='none'; 
    image.style.display='none'; 
    button_msg.innerHTML= '<h1>おめでとう! 全問正解！</h1>';
    ans_button.style.display='none';
    top_button.style.display=''; //トップボタンの表示
  }

  setTimeout(() => {
    // 3秒後に以下のコードが実行されます
    image.style.display=''; // 画像を表示
    imageNo = Math.floor(Math.random() * images.length)
    imageArea.src = images[imageNo]; // 画像のランダム表示

    image.animate(
      // 途中の状態を表す配列
      [
        { transform: 'translateX(0px)' }, // 開始時の状態（左端）
        { transform: 'translateX(1920px)' } // 終了時の状態（左端から200pxの位置）
      ],
      // タイミングに関する設定
      {
        fill: 'forwards', // 再生前後の状態（再生前、開始時の状態を適用）
        duration: exe_time, // 再生時間（ミリ秒）
      },
    );
  }, 3000); // 3秒待ってからゲームを開始
});

// トップボタンをクリックしたら
top_button.addEventListener('click', () => {
  start.style.display=''; //スタートボタンを表示
  pop_up_1.style.display=''; //遊び方を表示
  pop_up_2.style.display=''; //ランキングを表示
  
  button_msg.style.display='none';
  next_button.style.display='none';
  top_button.style.display='none';
  correct.style.display='none'; //正解の非表示
  incorrect.style.display='none'; //不正解の非表示
  incorrect_score.style.display='none'; //不正解のスコア非表示
  incorrect_level.style.display='none'; //不正解のレベル非表示

  level=1;
  exe_time=2000;
  dva_geme_score=0
});

// ボタンがクリックされたときに変数を表示する関数
function displayVariable() {
  // 変数を表示し、3秒後に非表示にする
  
  outputElement.innerHTML = 'レベル'+level;
  outputElement.style.display = "block"; // 表示
  setTimeout(function() {
    outputElement.style.display = "none"; // 非表示
  }, 3000); // 3秒後に非表示にする
}

// ボタンにクリックイベントリスナーを追加
var displayButton = document.getElementById("start");
displayButton.addEventListener("click", displayVariable);

var displayButton = document.getElementById("next_button");
displayButton.addEventListener("click", displayVariable);

document.getElementById('button1').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');    
    if (images[imageNo]==='/static/images/dva_game_number_1.png'){
      console.log('正解')
      dva_geme_score+=10 //スコアの加算処理
      correct.style.display=''; //正解の表示
      button_table.style.display='none'; //数字ボタンの削除
      button_msg.style.display='none'; //数字ボタンのメッセージ削除
      correct.innerHTML='<h1>正解!</h1>'; //正解の表示
      next_button.style.display=''; //次への表示
      top_button.style.display=''; //トップボタンの表示
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display=''; //不正解の表示
      incorrect_score.style.display=''; //不正解のスコア表示
      incorrect_level.style.display=''; //不正解のレベル表示
      button_table.style.display='none'; //数字ボタンの削除
      button_msg.style.display='none';//数字ボタンのメッセージ削除
      
      incorrect.innerHTML='<h1>残念…不正解</h1>'; //不正解の表示
      top_button.style.display=''; //トップボタンの表示
      incorrect_score.textContent = 'スコア'+dva_geme_score; //不正解のスコア表示
      incorrect_level.textContent = 'レベル'+level; //不正解のレベル表示
    }
});

document.getElementById('button2').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_2.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button3').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_3.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button4').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_4.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button5').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_5.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button6').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_6.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button7').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_7.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+va_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button8').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_8.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});

document.getElementById('button9').addEventListener('click', function(){
    console.log('id名「' + this.id + '」のボタンを押しました。');
    if (images[imageNo]==='/static/images/dva_game_number_9.png'){
      console.log('正解')
      dva_geme_score+=10
      correct.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';
      correct.innerHTML='<h1>正解!</h1>';
      next_button.style.display='';
      top_button.style.display='';
    }else{
      console.log('不正解')
      console.log(dva_geme_score)
      console.log(level)

      incorrect.style.display='';
      incorrect_score.style.display='';
      incorrect_level.style.display='';
      button_table.style.display='none';
      button_msg.style.display='none';

      incorrect.innerHTML='<h1>残念…不正解</h1>';
      top_button.style.display='';
      incorrect_score.textContent = 'スコア'+dva_geme_score;
      incorrect_level.textContent = 'レベル'+level;
    }
});
