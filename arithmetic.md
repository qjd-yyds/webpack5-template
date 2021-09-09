# canvas 里的算法

## 灰度算法

```js
const lm = 0.299 * r + 0.587 * g + 0.114 * b;
```

## 获取画布中图片的像素点r的下标
```js
const x; // 第x列
const y; // 第y行
const width; // 宽度
const rIndex = (y * width + x) * 4;
```
