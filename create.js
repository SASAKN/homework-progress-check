//変数の設定
var progress = document.getElementById('progress');
var homework = document.getElementById('name');
var homeworkinfo = [];
var number = 1;
//テンプレートの設定
function template(name, progress, number) {
    return `{ "number": ${encodeURIComponent(number)}, "name": "${encodeURIComponent(name)}", "progress": ${encodeURIComponent(progress)} }`;
}
//カウントの設定
function countup(name, progress, number) {
    number = JSON.parse(template(name, progress, number)).number;
    number++;
    window.localStorage.setItem('number', number);
}
//宿題の追加
function add_homework(name, progress, number) {
    window.localStorage.setItem(number, template(name, progress, number));
    console.log(template(name, progress, number));
    countup(name, progress, number);
}
//プログレスの取得と表示
progress.addEventListener('change', function () {
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
});
document.getElementById('button').addEventListener('click', function () {
    window.localStorage.getItem('number');
    document.getElementById('button').textContent = '追加しました'
    document.getElementById('button').style.backgroundColor = '#00ffc8';
    setTimeout(function(){
        document.getElementById('button').textContent = 'この宿題を追加'
        document.getElementById('button').style.backgroundColor = 'rgb(49, 49, 49)';
    },1000);
    add_homework(homework.value, progress.value, window.localStorage.getItem('number'));
});
document.getElementById('delete').addEventListener('click', function () {
    var prompt = window.confirm('本当に削除しますか？');
    if (prompt) {
        window.localStorage.clear();
        location.reload();
    } else {
        location.reload();
    }
});