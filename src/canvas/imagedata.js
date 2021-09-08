import "./styles/style.css";
//  drawImage
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
// 通过imagedata实例创建
const imagedt = new ImageData(200, 200);
imagedt.data.forEach((item, index) => {
  imagedt.data[index] = 200;
});
ctx.putImageData(imagedt, 0, 0);

// 通过上下文创建imagedata

const ctxImage = ctx.createImageData(200, 200);
ctxImage.data.forEach((item, index) => {
  imagedt.data[index] = 100;
});
ctx.putImageData(imagedt, 0, 400);

// 获取画布中的一个像素颜色
const data = ctx.getImageData(0, 400, 1, 1);
console.log(data);

// 将图片绘制到canvas

const imgsrc = require("./assets/demo.jpg");
const image = new Image();
image.src = imgsrc;
image.onload = function () {
  const { width, height } = image;
  // 将图片绘制到画布上
  ctx.drawImage(image, 300, 0);
  const imgData = ctx.getImageData(
  // 获取画布的起始点位置
  300, 0, 
  // 需要获取的图片尺寸
  width, height
);
  console.log(imgData);
  ctx.putImageData(
    // 需要放置的ImageData对象
    imgData,
    // 需要放置的画布位置
    300, height,
    // 需要裁剪的尺寸,宽度和高度的一半位置，
    // 裁剪后显示的尺寸
    width / 2, height / 2, width / 2, height / 2
  );
};
