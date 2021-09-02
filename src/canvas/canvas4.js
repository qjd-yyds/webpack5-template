import './styles/style.css';
// 不兼容ie8
const canvas = document.querySelector('#canvas');
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 建立canvas画布
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';

/**
 * @description 二次贝塞尔曲线quadraticCurveTo(cpx1,cpy1,x,y)
 * @param {Number} cpx1 控制点x轴
 * @param {Number} cpy1 控制点Y轴
 * @param {Number} x 结束点x轴
 * @param {Number} y 结束点y轴
 * */
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 200);
ctx.lineTo(200, 200);
ctx.lineTo(200, 400);
ctx.stroke();

// 绘制二次贝塞尔曲线
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.quadraticCurveTo(50, 200, 200, 200);
ctx.stroke();
/**
 * @description 三次贝塞尔曲线bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)
 * @param {Number} cpx1 控制点1x轴
 * @param {Number} cpy1 控制点1Y轴
 * @param {Number} cpx2 控制点2x轴
 * @param {Number} cpy2 控制点2Y轴
 * @param {Number} x 结束点x轴
 * @param {Number} y 结束点y轴
 * */

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.bezierCurveTo(50, 200, 200, 200, 200, 400);
ctx.stroke();

/**
 * @description 矩形 rect(x,y,w,h)
 * @param {Number} x 左上角位置x
 * @param {Number} y 左上角位置y
 * @param {Number} w 宽度
 * @param {Number} h 高度
 * */

ctx.beginPath();
ctx.rect(300, 50, 60, 60);
ctx.fill()
