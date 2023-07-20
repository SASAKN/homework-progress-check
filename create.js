//変数の設定
var progress =  document.getElementById('progress');
var homework = document.getElementById('name');
//関数の設定
function add_homework(name, progress, number){
    var temp = `{ "number": ${encodeURIComponent(number)}, "name": "${encodeURIComponent(name)}", "progress": ${encodeURIComponent(progress)} }`;
    document.cookie += temp;
}
//プログレスの取得と表示
progress.addEventListener('change', function(){
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
});
document.getElementById('button').addEventListener('click' , function(){
    add_homework(homework.value,progress.value,0);
});