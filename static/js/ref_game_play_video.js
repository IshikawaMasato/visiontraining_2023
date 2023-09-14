		//video要素を取得
        let video = document.getElementById('video')
        //表示箇所の要素取得
        let durationDisplay = document.getElementById('durationDisplay')
        let currentTimeDisplay = document.getElementById('currentTimeDisplay')
        let statusDisplay = document.getElementById('statusDisplay')
        var playback = document.getElementById("playback");
        //操作ボタンの取得
        let playButtons = document.getElementById('playButtons')
        let pauseButtons = document.getElementById('pauseButtons')
        let prevButton = document.getElementById('prevButton')
        let nextButton = document.getElementById('nextButton')
    
        //ビデオの読み込み時の処理
        video.addEventListener('loadedmetadata', function() {
          playback.disabled = false;
          playback.min = playback.value = video.initialTime || 0;
          playback.max = video.duration;
          durationDisplay.textContent = timeConvert(video.duration)
        
        //ビデオが再生中の処理
        video.addEventListener('timeupdate', function() {
            currentTimeDisplay.textContent = timeConvert(video.currentTime)
            var duration = video.duration;
            playback.value = video.currentTime;
          })
          playback.addEventListener("change", function() {
            video.currentTime = this.valueAsNumber;
            }, false);
          //ステータスの取得
        video.addEventListener('play',function(){
            console.log('再生開始')
            statusDisplay.textContent = '再生開始'
        })
        video.addEventListener('timeupdate',function(){
            console.log('再生位置の変化')
        })
        video.addEventListener('pause',function(){
            console.log('停止')
            statusDisplay.textContent = '停止'
        })
        video.addEventListener('ended',function(){
            console.log('再生完了')
            statusDisplay.textContent = '再生完了'
        })
        video.addEventListener('error',function(){
            console.log('エラー')
            statusDisplay.textContent = 'エラー'
        })
    
        //再生ボタンの動作
        playButtons.addEventListener('click',function(){
            //動画を再生する
            video.play()
        })
    
          //停止ボタンの動作
        pauseButtons.addEventListener('click',function(){
            //動画を停止する
            video.pause()
        })
    
          //10秒前へボタンの動作
        prevButton.addEventListener('click',function(){
            //現在の再生時間が10秒以上経過している場合
            if(video.currentTime >= 10) {
            
              //再生時間を現在の再生時間から10秒前に設定する
            video.currentTime = video.currentTime - 10
            
              //現在の再生時間が10秒未満の場合
            } else {
            
              //再生時間を0（開始位置）に設定する
            video.currentTime = 0
            
            }
        })
    
          //10秒後へボタンの動作
            nextButton.addEventListener('click',function(){
            //現在の再生時間が動画全体の残り10秒以外の場合
            if(video.currentTime < video.duration - 10) {
            
              //再生時間を現在の再生時間から10秒後に設定する
            video.currentTime = video.currentTime + 10
    
            //現在の再生時間が動画全体の残り10秒以内の場合
            } else {
    
              //再生時間を動画全体の時間（終了位置）に設定する
            video.currentTime = video.duration
            
            }
        })




});
      
            //時間をmm:ss表記にする関数
        function timeConvert(time) {
        var floorTime = Math.floor(time)
        var min = Math.floor(((floorTime) / 60)).toFixed(0)
        var sec = ('00'+((floorTime) % 60).toFixed(0)).slice(-2);
        return min+':'+sec
        }