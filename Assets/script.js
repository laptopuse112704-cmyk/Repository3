let scenes = document.querySelectorAll('.scene');
let poppedBalloonsCount = 0;
let poppedWords = [];
let currentPhoto = 0;

function showScene(id) {
  scenes.forEach(scene => scene.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function runCountdown() {
  let count = 3;
  const countdownElement = document.getElementById('countdown');
  const interval = setInterval(() => {
    countdownElement.textContent = count;
    if (count < 0) {
      clearInterval(interval);
      countdownElement.style.display = 'none';
      document.get