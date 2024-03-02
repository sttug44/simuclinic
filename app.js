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
icon.addEventListener('click', function () {
  window.location.href = 'massage.html'; // 替换为你要跳转的页面地址
});

function startSlider() {
  var images = document.querySelectorAll('#slider img');
  var current = 0;

  function nextImage() {
    // 准备下一张图片的索引
    var next = (current + 1) % images.length;
    images[next].style.opacity = '0'; // 确保下一张图片是透明的
    images[current].style.opacity = '0'; // 当前图片淡出
    setTimeout(function () {
      images[next].style.opacity = '1'; // 下一张图片淡入
      current = next;
    }, 10); // 给予足够时间让CSS transition生效
  }

  // 每隔3秒切换一次图片
  setInterval(nextImage, 3000);
}

window.onload = startSlider;
