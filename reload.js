// reload.js
// iOS Safari対策: キャッシュ復帰時に index.html へリダイレクト
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    // キャッシュから復帰した場合、強制的に index.html へ遷移
    window.location.href = "index.html";
  }
});

// ページ離脱時に現在ページを記録（top_menu.html のみ）
// window.addEventListener('beforeunload', () => {
//   if (window.location.pathname.endsWith("top_menu.html")) {
//     sessionStorage.setItem('previousPage', window.location.pathname);
//   }
// });

// リンクやボタンクリック時に現在ページを記録（top_menu.html のみ）
// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.pathname.endsWith("top_menu.html")) {
//     document.querySelectorAll('a, button').forEach(el => {
//       el.addEventListener('click', () => {
//         sessionStorage.setItem('previousPage', window.location.pathname);
//       });
//     });
//   }
// });
