import { myinterval } from "./tool";

// 倒计时
const nowTime = new Date("2021-9-28 10:00").getTime();
const endTime = new Date("2021-9-28 11:00").getTime();
let diff = parseInt(((endTime - nowTime) / 1000) as any);
// 获取计算后的时间
const getRemindTime = (diff: number) => {
  const day = Math.floor(diff / (24 * 60 * 60)); //天数
  let modulo = diff % (60 * 60 * 24);
  const hour = Math.floor(modulo / (60 * 60));
  modulo = modulo % (60 * 60);
  const minutes = Math.floor(modulo / 60);
  modulo = modulo % 60;
  const second = modulo;
  return `${hour}:${minutes}:${second}`;
};
const interval = myinterval(() => {
  if (diff <= 0) {
    interval.clear();
  }
  diff = diff - 1;
  const time = getRemindTime(diff);
  console.log(time);
}, 1000);
interval.start();
