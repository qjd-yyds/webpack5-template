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
ctx.lineWidth = "10";
// 影响描边因素
/**
 * strokeStyle 描边颜色 属性
 * lineWidth 描边宽度 属性
 * lineCap 描边端点样式 属性 butt 默认没有 round 圆形 square 方形
 * lineJoin 描边拐角类型 属性
 * miterLimit 拐角最大厚度 属性 避免拐角太小，用来切割
 * setLineDash 描边设置成虚线 getLineDash 获取当前虚线样式 方法 参数为数组
 * lineDashOffset 虚线偏移量
 * */
/**
 * @description lineCap 描边端点样式
 * butt 默认
 * round 圆形
 * square 方形
 * */
ctx.save();
ctx.lineCap = "butt";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();
ctx.restore();
//
ctx.save();
ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(20, 80);
ctx.lineTo(200, 80);
ctx.stroke();
ctx.restore();

//
ctx.save();
ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(20, 140);
ctx.lineTo(200, 140);
ctx.stroke();
ctx.restore();

/**
 * @description lineJoin 描边拐角类型 两个折线
 * miter 默认
 * round 圆形
 * bevel 倒角
 * */

ctx.save();
ctx.lineJoin = "miter"; // 默认
ctx.miterLimit = "1"; // 只有拐角类型是miter时候才能切割
ctx.beginPath();
ctx.moveTo(300, 20);
ctx.lineTo(480, 20);
ctx.lineTo(400, 50);
ctx.stroke();
ctx.restore();

ctx.save();
ctx.lineJoin = "round"; // 圆角
ctx.beginPath();
ctx.moveTo(300, 80);
ctx.lineTo(480, 80);
ctx.lineTo(400, 110);
ctx.stroke();
ctx.restore();

ctx.save();
ctx.lineJoin = "bevel"; // 倒角
ctx.beginPath();
ctx.moveTo(300, 140);
ctx.lineTo(480, 140);
ctx.lineTo(400, 170);
ctx.stroke();
ctx.restore();

/**
 * @description setLineDash 虚线
 * 顺序是实线=》虚线=》实线=》虚线
 * */
ctx.save();
ctx.setLineDash([30, 60, 90]);
ctx.beginPath();
ctx.moveTo(550, 20);
ctx.lineTo(900, 20);
ctx.stroke();
ctx.restore();
/**
 * @description lineDashOffset 虚线
 * 顺序是实线=》虚线=》实线=》虚线
 * */
ctx.save();
ctx.setLineDash([30, 60, 90]);
ctx.lineDashOffset = -30; // 向右跑
ctx.beginPath();
ctx.moveTo(550, 70);
ctx.lineTo(900, 70);
ctx.stroke();
ctx.restore();
