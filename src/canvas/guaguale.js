import "./styles/style.css";
//  刮刮乐
// 不兼容ie8
const canvas = document.querySelector("#canvas");
const [width, height] = [257, 183];
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = require("@/assets/woman.jpeg");
image.onload = () => {
  ctx.drawImage(image, 0, 0, width, height);
};
// 画笔类
class Line {
  constructor(ctx, drawing) {
    this.ctx = ctx;
    this.drawing = drawing;
  }
  moveTo(x, y) {
    const { ctx } = this;
    this.drawing = true;
    ctx.save();
    ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.globalCompositeOperation = "destination-out";
  }
  lineTo(x, y) {
    const { ctx } = this;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  restore() {
    const { ctx } = this;
    this.drawing = false;
    ctx.restore();
  }
}

const line = new Line(ctx, false);
function getmousepos(event) {
  const { left, top } = canvas.getBoundingClientRect();
  return {
    x: event.clientX - left,
    y: event.clientY - top,
  };
}
const button = document.createElement("button");
button.innerText = "点击使用橡皮擦";
document.body.appendChild(button);
button.style.cssText = `
color:#ff00ff;
padding:12px 20px
`;
button.onclick = () => {
  console.log(1);
  canvas.addEventListener("mousedown", function (e) {
    // console.log(data);
    const { x, y } = getmousepos(e);
    if (!line.drawing) {
      line.moveTo(x, y);
    }
  });

  canvas.addEventListener("mouseup", function () {
    if (line.drawing) {
      line.restore();
    }
  });

  canvas.addEventListener("mousemove", function (e) {
    if (line.drawing) {
      const { x, y } = getmousepos(e);
      line.lineTo(x, y);
    }
  });
};
