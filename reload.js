// reload.js

window.addEventListener('pageshow', (event) => {
  const isTopMenu = window.location.pathname.endsWith("top_menu.html");

  if (!isTopMenu) return;  // top_menu.html 以外は処理しない

  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    const previousPage = sessionStorage.getItem('previousPage');
    if (previousPage) {
      console.log(`PWAキャッシュ復帰 → ${previousPage} へ移動`);
      window.location.href = previousPage;
    } else {
      console.log("PWAキャッシュ復帰 → top_menu.html へ移動");
      window.location.href = "top_menu.html";
    }
  }
});

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
