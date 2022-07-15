<template>
  <div class="account-info">
    <div class="account-info-action">
      <router-link class="action-button" to="/setting"
        ><van-icon class="icon" name="setting-o"
      /></router-link>
    </div>
    <div class="title">
      <strong class="account-info-text">我的总资产</strong>
      <span class="iconfont icon-attention" @click="show = !show"></span>
    </div>
    <div class="number">
      <strong class="strong">{{ show ? '10000,242.5' : '*****' }}</strong>
      <span class="span">元</span>
    </div>
    <div class="desc">
      上月缴存
      <span class="text">{{ show ? '100' : '****' }}</span>
      元
    </div>
  </div>
</template>

<script>
export default {
  name: 'WechatUiAccountInfo',

  data() {
    return {
      show: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.account-info {
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 18px;
  border-radius: 8px;
  background: #2f78ec;
  box-shadow: 1px 1px 50px 0 rgba(191, 191, 191, 0.3);
  .title {
    display: flex;
    align-items: center;
  }
  .title,
  .desc {
    font-size: 14px;
  }
  .desc {
    .text {
      font-size: 16px;
      font-weight: normal;
    }
  }
  .number {
    .strong {
      font-size: 28px;
      font-weight: normal;
    }
    .span {
      font-size: 13px;
    }
  }
}
.account-info-action {
  top: 15px;
  right: 15px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    border: none;
    background: none;
  }
  .action-button {
    display: inline-block;
    color: #fff;
    .icon {
      font-size: 20px;
    }
  }
}
</style>