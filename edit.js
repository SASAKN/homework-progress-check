//変数の設定
var range = document.getElementById('progress');
var edit;
//プログレスの取得と表示
range.addEventListener('change', function () {
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
    //編集
    edit.progress = range.value;
});
//編集して再設計
function edit_progress(json){
    //保存
    edit = json;
};
//宿題の編集
document.getElementById('button').addEventListener('click', function(){
    //削除
    localStorage.removeItem(edit.number);
});
//クエリーを読み込む
var query = location.search;
console.log(query);
if (query === ''){
    location.href = 'index.html?e=blank';
}else{
    console.log('編集画面にアクセスするクエリー持っています。');
}
//パラメーターを取得
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//キーを取得してJSONの取得
var key = getParam('e');
var parse = JSON.parse(localStorage[key]);
edit_progress(parse);