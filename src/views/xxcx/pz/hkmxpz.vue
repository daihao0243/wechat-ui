<template>
  <div>
    <nav-bar></nav-bar>
    <van-empty description="选择日期查询" image="search">
      <van-button round type="primary" class="bottom-button">选择日期</van-button>
    </van-empty>
    <!-- <app-date v-model="dataRange" range></app-date> -->
  </div>
</template>

<script>
export default {
  name: 'ChsWebHkmxpz',

  data() {
    return {
      dataRange: [],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>