//変数
var save = [];
//要素
var list = document.getElementById('list');
if(localStorage.length !== 0){
    for(var i = 0; i < localStorage.length; i++){
        save.push(template(JSON.parse(localStorage[i])));
        list.innerHTML += save[i];
        console.log(template(JSON.parse(localStorage[i])));
    }
}else{
    list.innerHTML = '';
}
//テンプレート
function template(json){
    return`<li class="homework">${decodeURIComponent(json.name)}<progress max="100" value="${json.progress}"></progress><a href="javascript:localStorage.removeItem(${json.number})">🗑️</a></li>`;
}