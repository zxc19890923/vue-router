<template>
  <div id="app">
    <router-link to='home'>首页</router-link>
    <router-link to='me'>我</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/index.css' // 全局导入css文件
export default {
  name: "app",
  data() {
    return {
      msg: "hello world!"
    };
  }
};
</script>

// scoped 标识这个css样式只对这个组件有用
<style scoped> 
  /* 可以在里面写css 或者使用 @import 导入外部的css */
  @import './assets/css/index.css';
</style>
