import "./styles/style.css";
//  点是否在描边里 isPointStroke
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
const [width, height] = [window.innerWidth, window.innerHeight];
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");
ctx.lineWidth = 20;
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.stroke();

canvas.addEventListener("mousemove", function ({ clientX, clientY }) {
  let ispoint = ctx.isPointInStroke(clientX, clientY);
  console.log(ispoint);
});
