// 導覽列手機切換
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// 粒子背景初始化
particlesJS.load('particles-js', 'assets/js/particles.json', function () {
  console.log('particles.js loaded');
});

// 音樂開關
const music = document.getElementById('bg-music');
const toggle = document.getElementById('music-toggle');
toggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggle.textContent = '靜音';
  } else {
    music.pause();
    toggle.textContent = '播放';
  }
});

// 瀏覽次數統計
const key = 'visitCount';
const countElement = document.getElementById('view-count');
let count = localStorage.getItem(key);
if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
localStorage.setItem(key, count);
if (countElement) {
  countElement.textContent = `你已瀏覽本網站 ${count} 次`;
}