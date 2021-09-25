import "./styles/style.css";
//  刮刮乐
// 不兼容ie8
const canvas = document.querySelector("#canvas");
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
const [width, height] = [window.innerWidth, window.innerHeight];
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");
const img = new Image();
img.crossOrigin = "Anonymous";
img.src =
"https://img0.baidu.com/it/u=2567670815,24101428&fm=26&fmt=auto";
  // "https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/432c9cc15399723629110ad2c56dcf8b_88_88.png";
img.onload = function () {
  ctx.drawImage(img, 100, 100);
  const imageUrl = canvas.toDataURL();
  console.log(imageUrl);
};
