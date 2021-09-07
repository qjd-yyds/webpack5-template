import "./styles/style.css";
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext("2d");
// 填充色
ctx.fillStyle = "red";
// 描边色
ctx.strokeStyle = "yellow";
// 描边宽度
ctx.lineWidth = 20;
// 矩形
// 填充矩形fillRect(x,y,w,h)
ctx.fillRect(50, 50, 200, 100);
// 描边矩形strokeRect(x,y,w,h) 居中描边
ctx.strokeRect(50, 50, 200, 100);
// 清理矩形clearRect(x,y,w,h); 清除内描边内
ctx.clearRect(50, 50, 200, 100);
