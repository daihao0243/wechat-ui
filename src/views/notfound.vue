<template>
  <div class="layout">
    <img class="img" src="/static/images/404notfund.png" alt />
    <div class="desc">
      <h1>OOPS!</h1>
      <h2>很抱歉，页面它不小心迷路了！</h2>
      <div>请检查您输入的网址是否正确，请点击<router-link to="/">返回主页</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChsWebNotfound',

  data() {
    return {};
  },
  components: {},
  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.layout {
  width: 90%;
  text-align: center;
  margin: 100px auto;
  .img {
    width: 80%;
    max-width: 500px;
  }
}
</style>