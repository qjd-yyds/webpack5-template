// 配置polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App).mount("#root");
