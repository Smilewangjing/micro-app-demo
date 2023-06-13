<template>
  <div>
    <h1>子应用👇</h1>
    <micro-app
      v-bind="activeApp"
      @afterhidden="afterhidden"
      @beforeshow="beforeshow"
      @aftershow="aftershow"
    ></micro-app>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";

// import microApp from "@micro-zoe/micro-app";

const activeApp = ref();
const apps: any = [
  {
    name: "home",
    url: "http://localhost:5175",
    iframe: true,
  },
  // {
  //   name: "about",
  //   url: "http://localhost:5173",
  //   iframe: true,
  // },
];

const route = useRoute();

watch(
  () => route.path,
  () => {
    console.log(route.path);
  }
);

const afterhidden = () => {
  console.log("已推入后台");
};
const beforeshow = () => {
  console.log("即将推入前台，初始化时不执行");
};
const aftershow = () => {
  console.log("已经推入前台，初始化时不执行");
};

watchEffect(() => {
  activeApp.value = apps.find((item) => {
    return route.path.indexOf(item.name) > -1;
  });
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
