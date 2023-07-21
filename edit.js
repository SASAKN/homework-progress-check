//変数
var nam;
var num;
var progress;

//HTML要素
var range = document.getElementById('progress');
var ranget = document.getElementById('progresst');

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
nam = json.name;
num = json.number;
progress = json.progress;

//イベントの設定
range.addEventListener('change', function () {
    ranget.textContent = range.value + '%';
});

//ログに残す
console.log(key);
console.log(storage);
console.log(JSON.parse(storage));
console.log(nam,num,progress);
console.log(decodeURIComponent(nam));