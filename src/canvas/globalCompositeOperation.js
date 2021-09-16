import "./styles/style.css";
//  globalAlpha 合成
// 不兼容ie8
const canvas = document.querySelector("#canvas");
const [width, height] = [window.innerWidth, window.innerHeight];
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");
/**
 * 全局合成 globalCompositeOperation
 * source-atop 两者叠加取前一个图像
 * source-in 取两者交集
 * source-out 取后面一个图像，不重合部分
 * source-over 默认 后一个叠加前一个
 * destination-atop
 * destination-in
 * destination-out
 * destination-over
 * lighter
 * copy
 * xor
 */
// 矩形
ctx.fillStyle = "green";
ctx.fillRect(300, 300, 200, 100);
// 设置全局合属性
ctx.globalCompositeOperation = "destination-atop";
// 绘制一个圆
ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

