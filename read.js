//変数
var save = [];
var edit = [];
//要素
var list = document.getElementById('list');
if(localStorage.length !== 0){
    list.innerHTML = '';
    for(var i = 0; i < localStorage.length; i++){
        save.push(template(JSON.parse(localStorage[i])));
        list.innerHTML += save[i];
        console.log(template(JSON.parse(localStorage[i])));
    }
}else{
}
//テンプレート
function template(json){
    console.log(decodeURIComponent(decodeURIComponent(json.name)));
    return`<li class="homework">${decodeURIComponent(json.name)}<progress max="100" value="${json.progress}"></progress><a href="javascript:edit_progress(${json.number});">✏️</a><a href="javascript:localStorage.removeItem(${json.number}); location.reload();">🗑️</a></li>`;
}

function edit_progress(number){
    location.href = `edit.html?e=${number}`;
}