// 配置polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp } from "vue";
import App from "./App.vue";
import _ from "lodash";
import $ from "jquery";
import(/*webpackChunkName:"lg"*/"./lg.js");
console.log(_.join(["你好vue3"]));
console.log($);
const app = createApp(App).mount("#root");
