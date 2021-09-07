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

// 描边 stroke(),strokeRect(),strokeText()
// 填充 fill() fillRect() fillText()
/**
 * @description 颜色 RGBA 需要大写
 * strokeStyle()
 * fillStyle()
 * */
ctx.fillRect(0, 0, 200, 200);
/**
 * @description 渐变
 * 线性渐变 gr= createLinearGradient(x1,y1,x2,y2)\
 * addColorStop(postion,color) 节点渐变
 * 径向渐变gr= createRadialGradient(x1,y1,r1,x2,y2,r2)
 * */
const gr = ctx.createLinearGradient(200, 200, 200, 700);
gr.addColorStop(0, "red");
gr.addColorStop(0.25, "yellow");
gr.addColorStop(1, "green");
ctx.fillStyle = gr;
ctx.fillRect(200, 200, 200, 700);
const gr2 = ctx.createRadialGradient(500, 220, 0, 500, 350, 20);
gr2.addColorStop(0, "red");
gr2.addColorStop(0.25, "yellow");
gr2.addColorStop(1, "red");
ctx.fillStyle = gr2;

ctx.fillRect(400, 200, 200, 200);

// 纹理 ctx.createPattern(image,)
const image = new Image();
image.src = require("./assets/demo.jpg");
image.onload = () => {
  const pt = ctx.createPattern(image, "repeat");
  ctx.fillStyle = pt;
  ctx.fillRect(200, 200, 400, 400);
};
