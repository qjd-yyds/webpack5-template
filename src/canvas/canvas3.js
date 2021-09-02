import './styles/style.css';
// 不兼容ie8
const canvas = document.querySelector('#canvas');
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext('2d');
// 路径 beginPath()
// 向路径添加子路径
/**
 * moveTo(x,y) 绘制新的子路径，闭合处理closePath 可选
 * 显示路径fill() stroke()
 * */
// 直线 lineTo(x,y) 可以追加重复
ctx.strokeStyle = 'red';
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(100, 100);
ctx.lineTo(100, 20);
ctx.closePath();
ctx.stroke();
ctx.fill();

/**
 * @description 圆弧
 * arc(x,y,半径,开始弧度,结束弧度,方向)
 * 默认圆弧同一个moveTo，使用同一个路径，需要moveTo
 * */
ctx.beginPath();
ctx.arc(150, 150, 100, 0, Math.PI);
ctx.moveTo(150, 350);
ctx.arc(150, 350, 100, 0, Math.PI);
ctx.stroke();

/**
 * @description 切线圆弧
 * arcTo(x1,y1,x2,y2,半径)
 * */
// 辅助线
ctx.beginPath();
ctx.moveTo(50, 500);
ctx.lineTo(200, 500);
ctx.lineTo(200, 600);
ctx.stroke();
// 圆弧
ctx.beginPath();
ctx.moveTo(50, 500);
// 绘制200, 500 和200, 600 两个点 以 起始点50,500 画圆弧
ctx.arcTo(200, 500, 200, 600,100);
ctx.stroke();
