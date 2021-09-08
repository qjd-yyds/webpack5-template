import "./styles/style.css";
//  图像置灰
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

const image = new Image();

image.src = require("./assets/demo.jpg");
image.onload = draw;

function draw() {
  const { width, height } = image;
  ctx.drawImage(image, 0, 0, width, height);
  let imageDt = ctx.getImageData(0, 0, width, height);
  const data = imageDt.data;
  // 灰度
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const ml = 0.299 * r + 0.587 * g + 0.114 * b;
    data[i] = ml;
    data[i + 1] = ml;
    data[i + 2] = ml;
  }
  ctx.putImageData(imageDt, 0, height);
}
