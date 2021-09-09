import "./styles/style.css";
//  时钟
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "#000";
// 绘制时钟
function renderClock(hourAngle, minuteAngle, secondAngle) {
  ctx.save();
  // 设置中心点
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  // 当前圆的角度
  const c = Math.PI * 2;
  // 色系
  const [redA, redB, yellow] = ["#db655c", "#d63d46", "#9f8d7d"];
  // 绘制外框
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = redA;
  ctx.lineWidth = 9;
  ctx.arc(0, 0, 155, 0, c);
  ctx.stroke();
  ctx.restore();

  // 绘制内圈
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = redB;
  ctx.lineWidth = 20;
  ctx.arc(0, 0, 145, 0, c);
  ctx.stroke();
  ctx.restore();

  // 绘制15刻刻度
  ctx.save();
  ctx.strokeStyle = redA;
  ctx.beginPath();

  for (let i = 0; i < 4; i++) {
    ctx.moveTo(90, 0);
    ctx.lineTo(120, 0);
    ctx.rotate(c / 4);
  }
  ctx.lineWidth = 15;
  ctx.stroke();
  ctx.restore();

  // 绘制小时刻度
  ctx.save();
  ctx.strokeStyle = yellow;
  ctx.beginPath();

  for (let i = 0; i < 12; i++) {
    if (i % 3) {
      // 防止时刻度遮挡刻刻度
      ctx.moveTo(90, 0);
      ctx.lineTo(120, 0);
    }
    ctx.rotate(c / 12);
  }
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.restore();

  // 绘制分刻度
  ctx.save();
  ctx.strokeStyle = yellow;
  ctx.beginPath();
  for (let i = 0; i < 60; i++) {
    if (i % 5) {
      // 防止时刻度遮挡刻刻度
      ctx.moveTo(118, 0);
      ctx.lineTo(120, 0);
    }
    ctx.rotate(c / 60);
  }
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();
  // 当前时间
  // 绘制时针
  ctx.save();
  ctx.rotate(hourAngle);
  ctx.strokeStyle = yellow;
  ctx.beginPath();
  ctx.lineWidth = 9;
  ctx.moveTo(-20, 0);
  ctx.lineTo(65, 0);
  ctx.stroke();
  ctx.restore();
  // 绘制分针
  ctx.save();
  ctx.rotate(minuteAngle);
  ctx.strokeStyle = yellow;
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(-28, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();
  // 绘制秒针
  ctx.save();
  ctx.rotate(secondAngle);
  ctx.strokeStyle = redA;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(-30, 0);
  ctx.lineTo(88, 0);
  ctx.stroke();
  ctx.restore();
  // 中心小圆点
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = redB;
  ctx.arc(0, 0, 10, 0, c);
  ctx.fill();
  ctx.restore();

  // 还原
  ctx.restore();
}
// 绘制数字时间
function renderTime(text) {
  ctx.save();
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  // 投影
  ctx.shadowColor = "rgba(255,230,255,0.6)";
  ctx.shadowOffsetY = "6";
  ctx.shadowBlur = "4";

  const [x, y] = [50, 150];
  ctx.font = "150px blod pingfang";
  ctx.fillStyle = "#a76921";
  ctx.fillText(text, x, y);
  // 描边
  ctx.strokeStyle = "#f0d5ac";
  ctx.lineWidth = 8;
  ctx.strokeText(text, x, y);

  // 描边虚线
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000";
  ctx.setLineDash([5, 10]);
  ctx.strokeText(text, x, y);
  ctx.restore();
}
(function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const { hour, minute, second, hourAngle, minuteAngle, secondAngle } = nowTimeMsg();
  renderClock(hourAngle, minuteAngle, secondAngle);
  renderTime(`${hour}:${minute}:${second}`);
  requestAnimationFrame(render);
})();
// 获取当前时间信息
function nowTimeMsg() {
  const zeroadd = (value) => {
    return value < 10 ? "0" + value : value;
  };
  const nowtime = new Date();
  const h = nowtime.getHours();
  const m = nowtime.getMinutes();
  const s = nowtime.getSeconds();
  return {
    hour: zeroadd(h),
    minute: zeroadd(m),
    second: zeroadd(s),
    hourAngle: (h / 24) * Math.PI * 2,
    minuteAngle: (m / 60) * Math.PI * 2,
    secondAngle: (s / 60) * Math.PI * 2,
  };
}
