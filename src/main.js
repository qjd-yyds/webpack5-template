// 配置polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
const a = 123;
const foo = () => {
  return a * 2;
};
const p = new Promise(resolve => {
  resolve(1);
});
p.then(res => {
  console.log(res);
});
console.log(foo());
