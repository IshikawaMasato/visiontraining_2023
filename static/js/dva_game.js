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

const startButton = document.getElementById('start'); // 開始ボタン

// ボタンリスナー登録
startButton.addEventListener('click', () => { SetGameState(GameState.countDown); });
top_button.addEventListener('click', OnTopButtonClicked);
next_button.addEventListener('click', OnNextButtonClicked);

var GameState = {
  init: 0,
  countDown: 1,
  game: 2,
  result: 3
};

let imageNo = Math.floor(Math.random() * images.length)
imageArea.src = images[imageNo]; //画像のランダム表示

let level = 1;
let max_level = 10;
let exe_time = 2000;
let dva_geme_score = 0
let currentGameState = GameState.init;

// ゲーム初期化
SetGameState(GameState.init);

// 初期化
function init() {

  for (let i = 1; i < images.length + 1; i++) {
    document.getElementById('button' + i).addEventListener('click', function () {
      if (currentGameState != GameState.game) return;

      ToggleGameView(false);

      if (imageNo + 1 == i) {
        dva_geme_score += 10 //スコアの加算処理

        if (level == max_level) {
          console.log(level);
          ResultView(level, dva_geme_score, "おめでとう", false);
        } else {
          level += 1 //レベルの加算処理
          exe_time -= 200 //実行時間の減算処理(速さの変更)

          ToggleNextView(true);
        }
      } else {
        ResultView(level, dva_geme_score, "残念…不正解", false);
      }
    });
  }
  ToggleStartView(true); //初期にスタート画面を表示
}

// カウントダウンプロセス
function CountDownProcess() {

  ToggleStartView(false);

  outputElement.innerHTML = 'レベル' + level;
  outputElement.style.display = "block"; // 表示
  var i = 3
  var process = setInterval(function () {
    outputElement.innerHTML = i--; // 非表示
    if (i < 0) {
      outputElement.style.display = "none";
      clearTimeout(process);

      SetGameState(GameState.game);
    }
  }, 1000); // 3秒後に非表示にする
}

// ゲーム中
function GameProcess() {
  ToggleGameView(true);

  // 3秒後に以下のコードが実行されます
  image.style.display = ''; // 画像を表示
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
}


// リザルト(最終結果)
function ResultProcess() {

}

function SetGameState(newGameState) {

  switch (newGameState) {
    case GameState.init:
      init();
      break;

    case GameState.countDown:
      CountDownProcess();
      break;

    case GameState.game:
      GameProcess();
      break;
  }
  currentGameState = newGameState;
}


// Topボタン押下処理
function OnTopButtonClicked() {
  console.log(OnTopButtonClicked);
  startButton.style.display = ''; //スタートボタンを表示
  pop_up_1.style.display = ''; //遊び方を表示
  pop_up_2.style.display = ''; //ランキングを表示

  button_msg.style.display = 'none';
  next_button.style.display = 'none';
  top_button.style.display = 'none';

  correct.style.display = 'none'; //正解の非表示
  incorrect.style.display = 'none'; //不正解の非表示
  incorrect_score.style.display = 'none'; //不正解のスコア非表示
  incorrect_level.style.display = 'none'; //不正解のレベル非表示

  level = 1;
  exe_time = 2000;
  dva_geme_score = 0
}

// 次へボタン押下処理
function OnNextButtonClicked() {
  ToggleNextView(false);
  SetGameState(GameState.countDown);
}

// スタート画面表示切り替え
function ToggleStartView(isShow) {
  console.log("ToggleStartView");

  let display = isShow ? 'block' : 'none';
  startButton.style.display = display; // スタートボタンを非表示
  pop_up_1.style.display = display; // 遊び方を非表示
  pop_up_2.style.display = display; // ランキングを非表示

  correct.style.display != display; // 正解の非表示
  incorrect.style.display != display; // 不正解の非表示
  incorrect_score.style.display != display; // 不正解のスコア非表示
  incorrect_level.style.display != display; // 不正解のレベル非表示
}

// ゲーム画面表示切替
function ToggleGameView(isShow) {
  console.log("ToggleGameView");

  let display = isShow ? 'block' : 'none';

  image.style.display = display; //画像を表示 
  button_msg.style.display = display; // 数字ボタンを押すメッセージ表示
  ans_button.style.display = display; // 数字ボタンを表示
}

// 次へ画面表示切替
function ToggleNextView(isShow) {
  console.log("ToggleNextView");

  let display = isShow ? 'block' : 'none';

  next_button.style.display = display; //  次への非表示
  top_button.style.display = display; //トップボタンの非表示

  correct.innerHTML = '<h1>正解<h1>!'
  correct.style.display = display; //正解の非表示
  incorrect.style.display = display; //不正解の非表示

  incorrect_score.style.display = isShow ? 'none' : 'block'; //不正解
  incorrect_level.style.display = isShow ? 'none' : 'block'; //不正解
}

// リザルト画面表示切替
function ResultView(level, score, message) {
  console.log("ResultView");

  outputElement.style.display = 'none';
  image.style.display = 'none';
  correct.innerHTML = '<h1>' + message + '</h1>';
  ans_button.style.display = 'none';
  top_button.style.display = ''; //トップボタンの表示

  incorrect_score.style.display = 'block';
  incorrect_level.style.display = 'block';
  incorrect_level.textContent = 'レベル' + level; //不正解のレベル表示
  incorrect_score.textContent = 'スコア' + score; //不正解のスコア表示

  correct.style.display = ''; //正解の表示
}
