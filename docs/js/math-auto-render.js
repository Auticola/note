// 初始加载时渲染公式
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body);
  });
  
  // Material 主题的即时导航（Instant Navigation）会触发此事件
  document.addEventListener("mdx:render", function() {
    renderMathInElement(document.body);
  });
  
  // 如果仍有问题，监听所有动态内容加载事件
  document.addEventListener("DOMSubtreeModified", function() {
    renderMathInElement(document.body);
  });