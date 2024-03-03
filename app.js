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

document.addEventListener('scroll', () => {
  // 获取页面的滚动高度
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  // 计算页面的总高度
  let totalHeight = document.documentElement.scrollHeight;
  // 获取视口的高度
  let viewportHeight = window.innerHeight;

  // 判断是否滚动到底部
  if (scrollTop + viewportHeight >= totalHeight) {
    // 模拟回弹效果
    setTimeout(() => {
      // 先向下滚动一点距离
      window.scrollTo(0, totalHeight);
      setTimeout(() => {
        // 立即回滚到原来的底部位置
        window.scrollTo(0, totalHeight - 30); // 这里的30可以根据实际效果调整
      }, 150); // 这里的延时和距离可以根据需要调整以获得最佳效果
    }, 100);
  }
});

document.addEventListener('DOMContentLoaded', function () {


  // 处理圆形按钮点击事件
  document.getElementById('consultation').addEventListener('click', function () {
    alert('咨询服务');
  });
  document.getElementById('registration').addEventListener('click', function () {
    window.location.href = 'registration.html'; 
  });
  document.getElementById('inquiry').addEventListener('click', function () {
    alert('问诊服务');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const reminderList = document.querySelector('.reminder-list');
  
  reminderList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
          e.target.classList.toggle('completed');
          if (e.target.classList.contains('completed')) {
              e.target.innerHTML += " <span class='checkmark'>&#10003;</span>";
          } else {
              e.target.removeChild(e.target.querySelector('.checkmark'));
          }
      }
  });
});





