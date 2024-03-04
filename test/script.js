// script.js
function showMessage(message) {
    document.getElementById('message-content').innerText = message;
    document.getElementById('message-box').style.display = 'block';
}

function closeMessage() {
    document.getElementById('message-box').style.display = 'none';
}

document.getElementById('clear-btn').addEventListener('click', function() {
    // 清除消息内容
    document.getElementById('message-content').innerText = '';
    // 关闭消息框
    closeMessage();
});
