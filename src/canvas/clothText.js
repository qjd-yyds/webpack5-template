import "./styles/style.css";
// 布艺文字
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#fff";
ctx.strokeStyle = "#fff";
// 投影
ctx.shadowColor = "rgba(255,230,255,0.6)";
ctx.shadowOffsetY = "6";
ctx.shadowBlur = "4";

const [x, y] = [100, 200];
const text = "canvas";
ctx.font = "200px blod pingfang";
ctx.fillStyle = "#a76921";
ctx.fillText(text, x, y);
// 描边
ctx.strokeStyle = "#f0d5ac";
ctx.lineWidth = 8;
ctx.strokeText(text, x, y);

// 描边虚线
ctx.lineWidth = 2;
ctx.strokeStyle = "#000";
ctx.setLineDash([5,10]);
ctx.strokeText(text, x, y);


