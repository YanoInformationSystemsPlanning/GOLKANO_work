// reload.js

// ページ復帰時の処理
window.addEventListener('pageshow', (event) => {
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    const previousPage = sessionStorage.getItem('previousPage');
    if (previousPage) {
      console.log(`PWAキャッシュ復帰 → ${previousPage} へ移動`);
      window.location.href = previousPage;
    } else {
      console.log("PWAキャッシュ復帰 → index.html へ移動");
      window.location.href = "index.html";
    }
  }
});

// ページ離脱時に現在ページを記録（トップページも含む）
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('previousPage', window.location.pathname);
});
