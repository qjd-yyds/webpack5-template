import "./styles/style.css";
//  图像置灰和马赛克
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
  ctx.font = "20px blod pingfang";
  // 灰度用到ImageData
  let imageDt = ctx.getImageData(0, 0, width, height);
  const data = imageDt.data;
  // 创建一个马赛克副本
  let imageDTM = ctx.getImageData(0, 0, width, height);
  const datam = imageDTM.data;
  // 灰度
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const ml = 0.299 * r + 0.587 * g + 0.114 * b;
    data[i] = ml;
    data[i + 1] = ml;
    data[i + 2] = ml;
  }
  ctx.putImageData(imageDt, 0, height);
  // 马赛克
  // 被打码出尺寸大小
  const size = 10;
  ctx.putImageData(imageDTM, width, 0);
  // 列循环加行循环
  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      const ind = (y * width + x) * 4; // 获取每一个像素的r索引位置
      const [r, g, b] = [datam[ind], datam[ind + 1], datam[ind + 2]];
      ctx.fillStyle = `RGB(${r},${g},${b})`;
      // 每一次绘画一个格子到第二个图形中
      ctx.fillRect(x + width, y, size, size);
    }
  }
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "top"; // 顶部对其
  ctx.fillText("原图", 0, 0); // 第一张图
  ctx.fillText("灰度处理", 0,  height); // 第一张图
  ctx.fillText("马赛克", width, 0); // 第一张图
}
