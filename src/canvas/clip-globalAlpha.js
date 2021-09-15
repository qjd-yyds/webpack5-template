import "./styles/style.css";
//  globalAlpha 透明
// 不兼容ie8
const canvas = document.querySelector("#canvas");
const [width, height] = [window.innerWidth, window.innerHeight];
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");
ctx.save();
ctx.globalAlpha = 0.5; // 画布透明
ctx.fillRect(0, 0, 200, 100);
ctx.restore();
/**
 * 路径裁剪
 * 绘制的图形，被限制在路径中
 * ctx.clip
 */
// ctx.save();
// ctx.arc(300, 300, 200, 0, Math.PI * 2);
// 裁剪的路径
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 200);
ctx.lineTo(300, 900);
ctx.lineTo(0, 0);
ctx.stroke();
ctx.clip();
ctx.fillRect(50, 50, 300, 200);
// ctx.restore();
ctx.fillRect(200, 200, 500, 600);
