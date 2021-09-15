// 粒子 未看完
import "./styles/style.css";
//  时钟
// 不兼容ie8
const canvas = document.querySelector("#canvas");
const [width, height] = [window.innerWidth, window.innerHeight];
// 最好不要使用css控制尺寸，会影响清晰度
// 尺寸最好在4000以内
canvas.width = width;
canvas.height = height;
// 建立canvas画布
const ctx = canvas.getContext("2d");

// 粒子尺寸
const partSize = 24;
// 粒子运动的边界
const edge = {
  left: 0,
  right: width,
  bottom: height - 50,
};

// 粒子对象
class Particle {
  constructor(width, height) {
    // 尺寸
    this.width = width;
    this.height = height;
    // 位置
    this.x = 0;
    this.y = 0;
    // 1.新生2.坠落
    this.state = 1;
    // 父级
    this.parent = null;
    // 速度
    this.vx = this.getVx();
    this.vy = 0.002;
    // 重力
    this.gravity = 0.03;
    // 弹力
    this.bounce = 0.85;
  }
  // 获取x轴速度，为了不避免上下垂直弹动
  // vx的取值范围是[-0.5,0.5] 但是不能在[-0.15,0.15]
  getVx() {
    const vx = Math.random() - 0.5;
    if (Math.abs(vx) < 0.15) {
      return this.getVx();
    } else {
      return vx;
    }
  }
  // 更新方法
  update(diff) {}
  // 绘图方法
  draw(ctx) {
    const [x, y, width, height] = this;
    ctx.save();
    ctx.fullRect(x, y, width, height);
    ctx.restore();
  }
}
// 粒子发射器
class Gun {
  constructor(width, height) {
    // 尺寸
    this.width = width;
    this.height = height;
    // 位置
    this.x = 0;
    this.y = 0;
    // 状态1.有粒子0.没有粒子 默认
    this._state = 0;
    this.children = []; // 粒子库
  }
  get state() {
    return this._state;
  }
  set state(value) {
    /**
     * 赋值时做简单的diff
     * 当赋予的值和过去不一样的石化
     * 当赋予的值为1，制造一个
     * 当为0，发射仓库里的第一个粒子
     * 为_state赋值
     * */
  }
  // 新建粒子
  crateParticle() {
    const { x, y, width, height, children } = this;
    // 实例化粒子对象
    // 粒子位置
    // 以前置的方式添加到粒子仓库里 unshift
  }
  /**
   * 删除粒子
   * ele 粒子对象
   * */
  remove(ele) {
    const { children } = this;
    const index = children.indexOf(ele);
    if (index !== -1) {
      children.splice(index, 1);
    }
  }
  /**
   * 更新
   * diff 以毫秒为单位的时间差
   * */
  update(diff) {
    // 遍历粒子仓库里的所有粒子
    this.children.forEach((ele) => {
      // 更新粒子的位置数据
      ele.update(diff);
    });
  }
  // 绘制辅助线
  drawStroke(ctx) {
    const { x, y, width, height } = this;
    ctx.save();
    ctx.strokeStyle = "#aaa";
    ctx.strokeRect(x, y, width, height);
    ctx.restore();
  }
}

// 实例化粒子发射器
const gun = new Gun(partSize, partSize);

gun.x = width / 2 - 80;
gun.y = 50;

let time = new Date();
// 渲染方法
!(function render() {
  const diff = updateTime();
  // 更新粒子发射器
  gun.update(diff);
  // 清除画布
  ctx.clearRect(0, 0, width, height);
  // 绘制边框
  gun.drawStroke(ctx);
  // 绘制粒子
  gun.children.forEach((ele) => ele.draw(ctx));
  requestAnimationFrame(render);
})();

function updateTime() {
  // 获取时间差
  const now = new Date();
  const diff = now - time;
  time = now;
  return diff;
}
