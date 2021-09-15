import "./styles/style.css";
//  globalAlpha 透明
// 不兼容ie8
const canvas = document.querySelector("#canvas");
const [width, height] = [window.innerWidth, window.innerHeight];
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");
