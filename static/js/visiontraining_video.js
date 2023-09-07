        //動画プレイヤーの読み込み
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '360',
                width: '640',
                playerVars: {
                    playlist: 'A6yNMFZgfK8,g9MUolW5qBw,HvU3g3M0fcs,u3pyJ2DeklU,-vRahwR7-qY', // 再生リストのID
                    listType: 'playlist', // 再生リストタイプ指定
                    playsinline: 0,
                    modestbranding: 0,
                    disablekb: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    controls: 0,
                    loop: 1,
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerReady(event) {
            // プレーヤーが準備完了したら、動画の情報を取得し表示
            var duration = player.getDuration();
            document.getElementById('totalTime').textContent = formatTime(duration);

            // 1秒ごとに現在の再生時間を更新
            setInterval(updateCurrentTime, 1000);
            // 再生ボタンのクリックイベントを追加
            document.getElementById('playButton').addEventListener('click', function () {
                player.playVideo();
            });

            // 一時停止ボタンのクリックイベントを追加
            document.getElementById('pauseButton').addEventListener('click', function () {
                player.pauseVideo();
            });

            // 停止ボタンのクリックイベントを追加
            document.getElementById('stopButton').addEventListener('click', function () {
                player.stopVideo();
            });

            // スキップボタンのクリックイベントを追加
            document.getElementById('backskipButton').addEventListener('click', function () {
                BackskipVideo(10); // 10秒前スキップ（必要に応じて秒数を変更）
            });
            // スキップボタンのクリックイベントを追加
            document.getElementById('jaupskipButton').addEventListener('click', function () {
                JaupskipVideo(10); // 10秒スキップ（必要に応じて秒数を変更）
            });
            // 前の動画ボタンのクリックイベントを追加
            document.getElementById('backvideoButton').addEventListener('click', function () {
                player.previousVideo();
            });
            // 次の動画ボタンのクリックイベントを追加
            document.getElementById('nextvideoButton').addEventListener('click', function () {
                player.nextVideo();
            });
        }
        
        function onPlayerStateChange(event) {
            var state = event.data;
            var playerStateText = document.getElementById('playerState');

            // 再生状態を表示
            switch (state) {
                case YT.PlayerState.ENDED:
                    playerStateText.textContent = '終了';
                    break;
                case YT.PlayerState.PLAYING:
                    playerStateText.textContent = '再生中';
                    break;
                case YT.PlayerState.PAUSED:
                    playerStateText.textContent = '一時停止中';
                    break;
                case YT.PlayerState.BUFFERING:
                    playerStateText.textContent = 'バッファリング中';
                    break;
                case YT.PlayerState.CUED:
                    playerStateText.textContent = 'キュー';
                    break;
                default:
                    playerStateText.textContent = '-';
                    break;
            }
        }
        //現在の再生時間を確認
        function updateCurrentTime() {
            var currentTime = player.getCurrentTime();
            document.getElementById('currentTime').textContent = formatTime(currentTime);
        }

        function formatTime(time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }
        //10秒前スキップ
        function BackskipVideo(seconds) {
            player.seekTo(player.getCurrentTime() - seconds, true);
        }
        //10秒後にスキップ
        function JaupskipVideo(seconds) {
            player.seekTo(player.getCurrentTime() + seconds, true);
        }