//関数の設定
function add_homework(name, progress, number){
    var temp = `${encodeURIComponent(number)},${encodeURIComponent(name)},${encodeURIComponent(progress)}`;
    document.cookie = temp;
}
//プログレスの取得と表示
var progress =  document.getElementById('progress');
progress.addEventListener('change', function(){
    var textelement = document.getElementById('progresst');
    textelement.textContent = progress.value + '%';
});