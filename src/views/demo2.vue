<template>
  <div>
    <nav-bar title="贷款还款明细"></nav-bar>
    <van-cell-group v-for="item in 10" title="2021年11月22日" :key="item" border>
      <van-cell center title="还款类型">
        <van-tag type="success" plain>正常还款</van-tag>
      </van-cell>
      <van-cell center title="本金" value="919.56元"/>
      <van-cell center title="利息" value="1,212.86元"/>
      <van-cell center title="罚息" value="0元"/>
      <van-cell center title="合计" value="2,132.51元"/>
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