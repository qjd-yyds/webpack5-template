import "./styles/style.css";
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "yellow";
ctx.fillStyle = "blue";

// 切换画布起始点
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.beginPath();
// 移动到绘制起点0,0
ctx.moveTo(0, 0);
// 绘制二次贝塞尔曲线
ctx.quadraticCurveTo(50, -50, 50, -100);
// 绘制圆弧
ctx.arc(0, -100, 50, 0, Math.PI, true);
// 绘制二次贝塞尔曲线
ctx.quadraticCurveTo(-50, -50, 0, 0);
// 画三角形
ctx.lineTo(-8, 8);
ctx.lineTo(8, 8);
// ctx.bezierCurveTo()

ctx.fill();
ctx.beginPath();
ctx.moveTo(0, 8);
ctx.bezierCurveTo(40, 40, 40, 200, 200, 200);
ctx.stroke();
