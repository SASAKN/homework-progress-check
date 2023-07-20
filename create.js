//関数の設定
function add_homework(name, progress, number){
    var temp = `${encodeURIComponent(number)},${encodeURIComponent(name)},${encodeURIComponent(progress)}`;
    document.cookie = temp;
}