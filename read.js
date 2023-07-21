//変数
var save = [];
var edit = [];
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
    return`<li class="homework">${decodeURIComponent(json.name)}<progress max="100" value="${json.progress}"></progress><a href="javascript:edit(${json.number}); location.reload();">✏️</a><a href="javascript:localStorage.removeItem(${json.number}); location.reload();">🗑️</a></li>`;
}
function edit(number){
    location.href = `edit.html?e=${number}`;
}