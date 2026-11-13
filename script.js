// 仅更新当前页面，不联网、不收集个人信息、不保存数据。
const direction = document.querySelector('#direction');
const result = document.querySelector('#result');
document.querySelector('#signup-button').addEventListener('click', () => {
  result.textContent = `演示回执：你选择了「${direction.value}」。未发送给负责人，刷新后清空。`;
});
