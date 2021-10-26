import NetworkConfig from "@/config/net.config";
import { message } from "ant-design-vue";
const toString = Object.prototype.toString;
export function isArray(val: any) {
  return toString.call(val) === "[object Array]";
}
export interface IAntToast {
  content: string;
  type?: "info" | "success" | "error" | "warning" | "loading";
  duration?: number;
  key: string;
}

// 消息弹窗
export const AntToast = (option: IAntToast) => {
  const { content = "我是轻提示信息", type = "info", duration = 2, key = "updatable" } = option;
  return message[type]({
    content,
    duration,
    key,
  });
};

// 创建时间戳
export type dateValue = string | number;
export function formatDateTime(value: Date, format: string): string {
  const date: Date = new Date(value);
  let text: typeof format = format;

  type YYMMDD = "YY" | "MM" | "DD" | "hh" | "mm" | "ss";

  type TdateFormat = Record<YYMMDD, dateValue> & {
    [propName: string]: any;
  };

  const dateFormat: TdateFormat = {
    YY: supZero(date.getFullYear()),
    MM: supZero(date.getMonth() + 1),
    DD: supZero(date.getDate()),
    hh: supZero(date.getHours()),
    mm: supZero(date.getMinutes()),
    ss: supZero(date.getSeconds()),
  };

  Object.keys(dateFormat).forEach((key) => {
    if (text.includes(key)) {
      const reg = new RegExp(key);
      text = text.replace(reg, dateFormat[key]);
    }
  });
  return String(text);
}

// 判断环境
export const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};

// 日期时间补0
export function supZero(value: number): dateValue {
  return Number(value) < 10 ? "0" + value : value;
}

// 节流函数
export type Ithrottle = (this: any, fn: any, delay: number) => any;

export const throttle: Ithrottle = function (this, fn, delay) {
  const that = this;
  let throttleTimer = Date.now();
  return function (...args: any) {
    let now: number | null = null;
    now || (now = Date.now());
    if (now - throttleTimer > delay) {
      fn.call(that, ...args);
      throttleTimer = now;
    }
  };
};

// 防抖函数
export const debounce = function (this: any, fn: any, delay = 500): any {
  let timer: number;
  const that = this;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
};
// 将单维数组切割二维数组
export function cutArray(arr: any[], num: number) {
  const result: any[] = [];
  const len = arr.length;
  for (let i = 0; i < len; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}
// 正则匹配rgb（0,0,0） 里的数据
export function regRgb(value: string) {
  const reg = /rgb\((.*)\)/;
  return value
    .replace(reg, "$1")
    .split(",")
    .map((item) => {
      return +item;
    });
}

// compose函数
export type ComposeArgs = (...args: any) => any;
export function compose(funs: ComposeArgs[]) {
  return function (...arg1: any[]) {
    return funs.reduce((a, b) => {
      return (...arg2) => {
        return b(a(...arg2), ...arg1);
      };
    });
  };
}

// 使用settime模拟setinterval
export function myinterval(cb: () => any, time: number) {
  let timer: number;
  const fn = () => {
    cb();
    timer = setTimeout(() => {
      fn();
    }, time);
  };
  const start = () => {
    timer = setTimeout(fn, time);
  };
  const clear = () => {
    timer && clearTimeout(timer);
  };
  return {
    start,
    clear,
  };
}

/**
 * @param img 未带前缀的图片字段
 * @returns 返回字符类型
 * @description 处理字符图片
 */
export function fixedImgStr(img: string): string {
  const req = NetworkConfig.req;
  return img
    .split(",")
    .map((e) => req + e)
    .join(",");
}

// 解析图片
export const parseImage = (imgUrl: string) => {
  return imgUrl ? imgUrl.split(",").map((item) => NetworkConfig.host + item) : [];
};
