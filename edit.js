//変数
var nam;
var num;
var progress;

//HTML要素
var range = document.getElementById('progress');
var ranget = document.getElementById('progresst');
var button = document.getElementById('button');
var donebutton = document.getElementById('done');

//キーの格納
var key = getParam('e');

//パラメーター
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

//JSONの取得
var storage = localStorage.getItem(key);

//JSONの読み取り
var json = JSON.parse(storage);

//ひとつづつ代入
nam = decodeURIComponent(json.name);
num = json.number;
progress = json.progress;

//レンジバーのイベントの設定
range.addEventListener('change', function () {
    ranget.textContent = range.value + '%';
});

//ボタンのイベントの設定
button.addEventListener('click', function(){
    edit_homework();
});

//完了ボタンのイベントの設定
donebutton.addEventListener('click', function(){
    done();
});

//編集の関数
function edit_homework(){
    localStorage.setItem(num,template(nam));
}

//完了の処理
var donetext = '✅' + nam + '✅';
function done(){
    localStorage.setItem(num, template(donetext));
}

//テンプレートの設定
function template(name) {
    return `{ "number": ${encodeURIComponent(num)}, "name": "${encodeURIComponent(name)}", "progress": ${encodeURIComponent(range.value)} }`;
}

//ログに残す
console.log('Debug !!');
console.log(
    "%cWelcome",
    "color:white; background-color:purple; padding:2px; border-radius:4px;",
    "Debug",
    "Mode"
  );
console.log(key);
console.log(storage);
console.log(JSON.parse(storage));
console.log(nam,num,progress);
console.log(decodeURIComponent(nam));
console.log(template(nam));
console.log(donetext);
console.log(num, template(donetext));
console.log(decodeURIComponent(template(nam)));