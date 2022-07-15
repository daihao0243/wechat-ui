<template>
  <div>
    <nav-bar></nav-bar>
    <van-cell-group :border="false">
      <van-cell
        v-for="item in 100"
        :key="item"
        icon="label-o"
        title="上传测试22222"
        value="10-16"
      ></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ChsWebNews',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>