// reload.js
// iOS Safari対策: キャッシュ復帰時に index.html をキャッシュバスター付きで再読み込み
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    // キャッシュから復帰した場合、強制的にバージョンパラメータ付きでリロード
    window.location.href = "index.html?v=" + Date.now();
  }
});
