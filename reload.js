// reload.js
// iOS Safari対策: キャッシュ復帰時に index.html へリダイレクト
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    // キャッシュから復帰した場合、強制的に index.html へ遷移
    window.location.href = "index.html";
  }
});
