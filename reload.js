// ページ復帰時に強制的に最新状態にリロード
window.addEventListener('pageshow', (event) => {
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
    console.log("PWAキャッシュから復帰 → リロード実行");
    window.location.reload();
  }
});
