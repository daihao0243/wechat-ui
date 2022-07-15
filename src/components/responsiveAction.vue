<template>
  <!-- 响应式按钮 -->
  <div class="r-action">
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
.r-action {
  display: flex;
  justify-content: center;
  margin: 20px 10px;
}
@media (min-width: 800px) {
  .r-action {
    // justify-content: flex-end;
  }
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