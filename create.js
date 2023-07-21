//変数の設定
var progress = document.getElementById('progress');
var homework = document.getElementById('name');
var homeworkinfo = [];
//初回に訪れた時
if(document.cookie === 'visit'){
    console.log('このユーザーは過去におとづれたことがあるのでlocal Storageの操作を行いません。');
}else if(document.cookie === 'delete'){
    localStorage.setItem('number', 0);
    document.cookie = 'visit';
}else{
    localStorage.setItem('number', 0);
    document.cookie = 'visit';
}
//テンプレートの設定
function template(name, progress, number) {
    return `{ "number": ${encodeURIComponent(number)}, "name": "${encodeURIComponent(name)}", "progress": ${encodeURIComponent(progress)} }`;
}
//カウントの設定
function countup() {
    var a  = localStorage.getItem('number');
    a++;
    window.localStorage.setItem('number', a);
}
//宿題の追加
function add_homework(name, progress, number) {
    window.localStorage.setItem(number, template(name, progress, number));
    console.log(template(name, progress, number));
    countup();
}
//プログレスの取得と表示
progress.addEventListener('change', function () {
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
});
document.getElementById('button').addEventListener('click', function () {
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
        document.cookie = 'delete';
        localStorage.setItem('number', 0);
        location.reload();
    } else {
        location.reload();
    }
});