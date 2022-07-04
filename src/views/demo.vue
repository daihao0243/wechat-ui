<template>
  <div>
    <nav-bar title="缴存信息"></nav-bar>
    <van-cell-group title="单位缴存账户">
      <van-cell title="姓名" value="*昭礼" />
      <van-cell title="证件号" value="4****************8" />
      <van-cell title="单位名称" value="广西前程众人力资源有限公司" />
      <van-cell title="缴存年月" value="202109" />
      <van-cell title="缴存状态">
        <van-tag type="success">正常</van-tag>
      </van-cell>
      <van-cell title="缴存基数">15,313.00元</van-cell>
      <van-cell title="缴存比例">12.0%</van-cell>
      <van-cell title="个人月缴存额">1,838.00元</van-cell>
      <van-cell title="单位月缴存额">1,838.00元</van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'WechatUiDemo',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>