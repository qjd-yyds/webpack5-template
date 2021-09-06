import "./styles/style.css";
// 霓虹灯
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const color = ["red", "yellow"];
// 建立canvas画布
const ctx = canvas.getContext("2d");
function draw() {
  ctx.save();
  ctx.strokeStyle = color[0];
  ctx.fillStyle = "#fff";
  ctx.lineWidth = "10";
  ctx.translate(400, 400);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  // 右边
  ctx.bezierCurveTo(200, -50, 180, -300, 0, -200);
  // 左边
  ctx.bezierCurveTo(-180, -300, -200, -50, 0, 0);
  // 绘制虚线间隔30
  ctx.setLineDash([30]);
  ctx.stroke();
  // 虚线二
  ctx.strokeStyle = color[1];
  ctx.shadowColor = "orange";
  ctx.lineDashOffset = 30;
  for (let i = 50; i > 5; i -= 5) {
    // 阴影
    ctx.shadowBlur = i;
    ctx.stroke();
  }
  // 绘制虚线移动30
  ctx.restore();
}
setInterval(() => {
  // 绘画前 先清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  color.reverse();
  draw();
}, 200);
