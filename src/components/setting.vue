<template>
  <van-cell-group :border="false">
    <van-cell icon="qr" title="二维码" is-link @click="onShowQrcode"></van-cell>
    <!-- contact -->
    <van-cell icon="phone-o" title="手机号设置" is-link to="/setting/sjhsz"></van-cell>
    <van-cell title="修改密码" is-link to="/setting/xgmm">
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
  <!-- 二维码展示 -->
  <app-dialog v-model:show="showQrCode" title="标题">
    <img src="/static/images/qrcode_nngjjzx_1.jpg" />
  </app-dialog>
</template>

<script>
export default {
  name: 'ChsWebSetting',

  data() {
    return {
      showQrCode: false,
    };
  },

  mounted() {},

  methods: {
    onShowQrcode() {
      this.$dialog.alert({
        title: '二维码',
        message: <img width="230" height="230" src="/static/images/qrcode_nngjjzx_1.jpg" />,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.exit-cell {
  color: #f44336;
}
</style>