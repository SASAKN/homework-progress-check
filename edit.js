//変数
var name;
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
var json = localStorage.getItem(key);

//ログに残す
console.log(key);
console.log(json);