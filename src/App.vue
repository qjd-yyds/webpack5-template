<template>
  <div class="example">{{ msg }}</div>
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
.example {
  color: red;
}
</style>
