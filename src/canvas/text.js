import "./styles/style.css";
// text
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
ctx.font = "100px pingfang";
ctx.fillText("我是文字", 100, 100);
// 绘制水平线
ctx.moveTo(30, 300);
ctx.lineTo(600, 300);
ctx.setLineDash([10]);
ctx.stroke();
ctx.lineWidth = 1;
// 对齐方式
ctx.textBaseline = "top"; // 顶部对齐
ctx.fillText("top", 100, 300);
ctx.textBaseline = "bottom"; // 底部对齐
ctx.fillText("bottom", 200, 300);
ctx.textBaseline = "middle"; // 居中对齐
ctx.fillText("middle", 300, 300);
// 绘制垂直线
ctx.moveTo(700, 30);
ctx.lineTo(700, 700);
ctx.setLineDash([10]);
ctx.stroke();
ctx.textAlign = "start"; //  默认文本起始对齐
ctx.fillText("start", 700, 100);
ctx.textAlign = "left"; // 左对齐
ctx.fillText("left", 700, 150);
ctx.textAlign = "center"; // 居中对齐
ctx.fillText("center", 700, 200);
ctx.textAlign = "end"; // 文本结束位对其
ctx.fillText("end", 700, 300);
ctx.textAlign = "right"; // 右对齐
ctx.fillText("right", 700, 350);

// 描边文字

ctx.strokeText("我是描边文字", 500, 500);
const text = "另外";
// 获取文本信息
const measureText = ctx.measureText(text);
ctx.fillText(text, 700, 500, measureText.width / 2);
