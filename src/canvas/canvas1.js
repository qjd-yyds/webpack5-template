import "./styles/style.css";
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = 600;
canvas.height = 700;
// 建立canvas画布
const ctx = canvas.getContext("2d");
console.log(ctx);
// 画笔颜色
ctx.fillStyle = "red";
// 绘制矩形
ctx.fillRect(50, 100, 400, 200);
