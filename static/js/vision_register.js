(() => {
    //HTMLのid値を使って以下のDOM要素を取得
    //反射神経用
    const reflexdownbutton = document.getElementById('reflexdown');
    const reflexupbutton = document.getElementById('reflexup');
    const reflextext = document.getElementById('reflextextbox');

    //ボタンが押されたらカウント減
    reflexdownbutton.addEventListener('click', (event) => {
    //最小は1以下にはならないようにする
    if(reflextext.value > 1) {
        reflextext.value--;
    }
    });

    //ボタンが押されたらカウント増
    reflexupbutton.addEventListener('click', (event) => {
    //最大は10までとする
    if(reflextext.value < 10) {
        reflextext.value++;
    }
    })


    //動体視力用
    const movedownbutton = document.getElementById('movedown');
    const moveupbutton = document.getElementById('moveup');
    const movetext = document.getElementById('movetextbox');

    //ボタンが押されたらカウント減
    movedownbutton.addEventListener('click', (event) => {
    //最小は1以下にはならないようにする
    if(movetext.value > 1) {
        movetext.value--;
    }
    });

    //ボタンが押されたらカウント増
    moveupbutton.addEventListener('click', (event) => {
    //最大は10までとする
    if(movetext.value < 10) {
        movetext.value++;
    }
    })

})();

