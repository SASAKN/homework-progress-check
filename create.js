//変数の設定
var progress =  document.getElementById('progress');
var homework = document.getElementById('name');
var homeworkinfo = [];
//関数の設定
function template(name, progress, number){
    return `{ "number": ${encodeURIComponent(number)}, "name": "${encodeURIComponent(name)}", "progress": ${encodeURIComponent(progress)} }`;
}
function add_homework(name, progress, number){
    let temporary = JSON.parse(template(name, progress, number));
    let tnumber = temporary.number + 1;
    window.localStorage.setItem('number', tnumber);
    window.localStorage.setItem(number, template(name, progress, number));
}
//プログレスの取得と表示
progress.addEventListener('change', function(){
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
});
document.getElementById('button').addEventListener('click' , function(){
     window.localStorage.getItem('number')
    add_homework(homework.value,progress.value,window.localStorage.getItem('number'));
});