<template>
  <div>
    <nav-bar></nav-bar>
    <van-cell-group :border="false">
      <van-cell icon="qr" title="二维码" is-link></van-cell>
      <!-- contact -->
      <van-cell icon="phone-o" title="手机号设置" is-link></van-cell>
      <van-cell title="修改密码" is-link>
        <template #icon>
          <i class="van-cell__left-icon iconfont icon-lock"></i>
        </template>
      </van-cell>
    </van-cell-group>
    <br />
    <van-cell-group :border="false">
      <van-cell title="安全退出" class="exit-cell" is-link>
        <template #icon>
          <i class="van-cell__left-icon iconfont icon-exit"></i>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ChsWebSetting',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.exit-cell {
  color: #f44336;
}
</style>