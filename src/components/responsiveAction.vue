<template>
  <!-- 响应式按钮 -->
  <div class="flex">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WechatUiResponsive',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: center;
  margin: 20px 10px;
}
</style>
<style>
.van-button {
  min-width: 100px;
}
.van-button + .van-button {
  margin-left: 10px;
}
@media (min-width: 800px) {
  .van-button {
    width: auto;
    min-width: 100px;
  }
}
</style>