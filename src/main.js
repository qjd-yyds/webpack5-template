import './styles/style.css';
// 不兼容ie8
const canvas = document.querySelector('#canvas');
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'red';
ctx.lineWidth = 40;

// 绘制脸
ctx.rect(50, 250, 400, 200);
ctx.fill();
ctx.stroke();

// 绘制嘴巴
ctx.beginPath();
ctx.moveTo(150, 400);
ctx.lineTo(350, 400);
ctx.stroke();

// 绘制眼睛
ctx.clearRect(50, 300, 400, 50);
ctx.beginPath();
ctx.arc(150, 330, 20, 0, Math.PI * 2);
ctx.moveTo(350 - 20, 340);
ctx.arc(350, 340, 20, Math.PI, Math.PI * 2);
ctx.fill();

// 绘制头发
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.bezierCurveTo(150, 50, 150, 250, 250, 250);
ctx.moveTo(250, 250);
ctx.bezierCurveTo(350, 250, 350, 50, 450, 50);
ctx.stroke();
