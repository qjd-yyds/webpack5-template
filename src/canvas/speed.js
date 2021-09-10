import "./styles/style.css";
//  加速和匀速运动
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext("2d");

class Ball {
  constructor(r = 20) {
    this.r = r;
    this.x = 0;
    this.y = 0;
    this.speed = 0.1; // 速度
  }
  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
// 实例化一个小球
const myBall = new Ball();
myBall.x = canvas.width / 4;
myBall.draw();
//  创建一个diff时间来实现匀速运动
let pre = new Date();
// 创建一个匀速运动的球体
!(function render() {
  console.log(myBall.speed, "匀速");
  // 当前时间
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const now = new Date();
  const diff = now - pre;
  pre = now;
  myBall.y += (diff + 1) * myBall.speed;
  myBall.draw();
  if (myBall.y > canvas.height) {
    myBall.y = 0;
  }
  // requestAnimationFrame 是真正意义上的匀速，时间间隔有偏差
  requestAnimationFrame(render);
})();
// 实例化加速小球
const addBall = new Ball();
addBall.x = (canvas.width / 4) * 3;
addBall.draw();
//  创建一个diff时间来实现匀速运动
let apre = new Date();
// 创建一个加速运动的球体
!(function render() {
  addBall.speed += 0.02;
  // 当前时间
  ctx.clearRect(canvas.width / 2, 0, canvas.width / 2, canvas.height);
  const now = new Date();
  const diff = now - apre;
  apre = now;
  addBall.y += (diff + 1) * addBall.speed;
  addBall.draw();
  if (addBall.y > canvas.height) {
    addBall.y = 0;
  }
  requestAnimationFrame(render);
})();
