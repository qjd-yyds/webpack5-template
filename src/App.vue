<template>
  <div class="example">{{ msg }}==></div>
  <div class="main">
    <div class="main-son">son1</div>
    <div class="main-son">son2</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "app",
  setup() {
    const msg = ref("hello vue3");
    return {
      msg,
    };
  },
};
</script>

<style>
@import url("./styles/fonts.css");
.example {
  color: red;
  font-family: "FiraCode";
  background-color: darkolivegreen;
  transform: translate3d(0, 30px, 0);
}
.main {
  display: flex;
}
.main-son {
  background-color: darkred;
  color: #fff;
}
</style>
