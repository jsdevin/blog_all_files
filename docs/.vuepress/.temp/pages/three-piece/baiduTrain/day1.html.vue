<template><div><h1 id="cct" tabindex="-1"><a class="header-anchor" href="#cct" aria-hidden="true">#</a> cct</h1>
<p><em>你好， {{ msg }}</em></p>
<RedDiv>
<p><em>当前计数为： {{ count }}</em></p>
</RedDiv>
<p><button @click="count++">点我！</button></p>
</div></template>

<script setup>
import { h, ref } from "vue";

const RedDiv = (_, ctx) =>
  h(
    "div",
    {
      class: "red-div",
    },
    ctx.slots.default()
  );
const msg = "Markdown 中的 Vue";
const count = ref(0);
</script>

<style>
.red-div {
  color: red;
}
</style>
