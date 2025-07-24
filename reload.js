// reload.js
// 不要なリダイレクト処理を削除した簡潔版

// ページ離脱時に現在ページを記録（top_menu.html のみ）
window.addEventListener('beforeunload', () => {
  if (window.location.pathname.endsWith("top_menu.html")) {
    sessionStorage.setItem('previousPage', window.location.pathname);
  }
});

// リンクやボタンクリック時に現在ページを記録（top_menu.html のみ）
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith("top_menu.html")) {
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        sessionStorage.setItem('previousPage', window.location.pathname);
      });
    });
  }
});
