import "./styles/style.css";
//  canvas里的变换
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "#fff";

// 变换中心点 translate(x,y)
ctx.translate(300,200);
// 旋转
ctx.rotate(Math.PI / 24);
// 缩放 scale(x,y);
ctx.scale(0.2,0.3);
ctx.fillRect(0, 0, 200, 100);
