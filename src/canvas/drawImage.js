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
const imgpath = require("./assets/demo.jpg");
const image = new Image();
image.src = imgpath;
image.onload = function () {
  const { width, height } = image;
  // ctx.drawImage(image, 0, 0, width, height);
  ctx.drawImage(image,
    // 相机视口
    width / 2, height / 2, width, height,
    // 视图
    0, 0, width, height
  );

  console.log("加载完成1");
};
console.log("添加路径");
