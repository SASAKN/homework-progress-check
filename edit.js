//変数の設定
var progress = document.getElementById('progress');
//プログレスの取得と表示
progress.addEventListener('change', function () {
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
});
//編集して再設計
function edit(json, number, progress){
    //保存
    edit.push(json);
    //編集
    edit[number].progress = progress;
    //削除
    localStorage.removeItem(json.number);
}

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
//キーを取得
console.log(getParam('e'));