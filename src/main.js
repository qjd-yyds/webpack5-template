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
class Rect {
  constructor(width, height, color = "chocolate") {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.data = 1000;
  }
  draw(ctx) {
    const { width, height, color, x, y } = this;
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }
}
class Tip {
  constructor() {
    this.text = "文字内容";
    this.fontSize = 32;
    this.x = 0;
    this.y = 0;
    this.padW = 20;
    this.padH = 10;

    this.visible = false;
  }
  draw(ctx) {
    const { x, y, fontSize, visible, text, padW, padH } = this;
    if (!visible) return;
    ctx.save();
    ctx.font = `${fontSize}px srail`;
    const { width } = ctx.measureText(text);
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(x, y, width + padW * 2, fontSize + padH * 2);
    // 绘制文字
    ctx.textBaseline = "top";
    ctx.fillStyle = "#fff";
    ctx.fillText(text, x + padW, y + padH);
    ctx.restore();
  }
}
// 实例化rect
const rect = new Rect(50, 200);
rect.x = 100;
rect.y = 100;
rect.draw(ctx);
// 实例化tip
const tip = new Tip();
tip.visible = true;
tip.x = 100;
tip.y = 100;
tip.draw(ctx);
canvas.addEventListener("mousemove", mouseFn);
function mouseFn(event) {
  const mousePos = getmousepos(event);
  if (containPoint(rect, mousePos)) {
    tip.visible = true;
    render(mousePos);
  } else {
    tip.visible = false;
  }
}
function render(mousePos) {
  ctx.clearRect(0, 0, width, height);
  rect.draw(ctx);
  tip.x = mousePos.x + 20;
  tip.y = mousePos.y + 20;
  tip.draw(ctx);
}
// 获取当前鼠标在canavs里的坐标
function getmousepos(event) {
  const { left, top } = canvas.getBoundingClientRect();
  return {
    x: event.clientX - left,
    y: event.clientY - top,
  };
}

// 判断鼠标是否在rect里
function containPoint(rect, mousepos) {
  const { x, y } = mousepos;
  const l = x > rect.x;
  const r = x < rect.x + rect.width;
  const t = y > rect.y;
  const b = y < rect.y + rect.height;
  return l & r & t & b;
}
