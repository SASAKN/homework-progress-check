//編集して再設計
function edit(json, number, progress){
    //保存
    edit.push(json);
    //編集
    edit[number].progress = progress;
    //削除
    localStorage.removeItem(json.number);
}