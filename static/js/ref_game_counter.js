let counter = 0;
let maxcount = 5;

document.addEventListener("DOMContentLoaded", function() {
    function CountUp() {
        if( counter < maxcount ) {
            counter++;
            console.log(counter);
            if( counter === maxcount ) {
                console.log('ゲームクリア！');
            }
        }
    }

    document.getElementById('button1').addEventListener('click', CountUp);

    setInterval(function () {
        document.getElementById('counter').innerHTML = counter + '/5';
    }, 1000);
});

