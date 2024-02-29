function goTo(page) {
  alert("跳转到" + page);
  // 在这里可以添加具体的页面跳转逻辑
}

function goTo(page) {
  if (page === 'feature') {
    window.location.href = 'feature.html'; // 在点击功能按钮时跳转到 feature.html
  } else if (page === 'home') {
    window.location.href = 'index.html'; // 在点击主页按钮时跳转到 index.html
  } else if (page === 'profile') {
    window.location.href = 'profile.html'; // 在点击个人中心按钮时跳转到 profile.html
  } else {

  }

}

var icon = document.querySelector('.icon');
    icon.addEventListener('click', function() {
      window.location.href = 'massage.html'; // 替换为你要跳转的页面地址
    });
