function draw() {
    var canvas = document.getElementById('square');
    var x = 50;
    var y = 50;
    var wid = 100;
    var hei = 100;
    var count = 0;
    var ctx = canvas.getContext('2d');
    while( count < 9 ) {
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(x, y, wid, hei);
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.strokeRect(x, y, wid, hei);
        count++;
        console.log(count);
        if( count % 3 == 0 ) {
            x+=150;
            y = 50;
        } else {
            y+=150;
        }
    }
}