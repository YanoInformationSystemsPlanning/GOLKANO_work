// reload.js

// ページ復帰時の処理
window.addEventListener('pageshow', (event) => {
  const path = window.location.pathname;
  const isIndex = path.endsWith("index.html") || path === "/" || path === "";

  if (isIndex) {
    // index.html の場合、必ず初期状態にするため強制リロード
    if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
      console.log("PWAキャッシュ復帰 → index.html を強制リロード");
      const url = window.location.origin + window.location.pathname + '?t=' + new Date().getTime();
      window.location.replace(url);  // キャッシュ無効化パラメータ付きでリロード
      return;
    }
  } else {
    // その他のページは従来通り
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
  }
});

// ページ離脱時に現在ページを記録（トップページも含む）
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('previousPage', window.location.pathname);
});

// リンクやボタンクリック時に現在ページを記録
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      sessionStorage.setItem('previousPage', window.location.pathname);
    });
  });
});
