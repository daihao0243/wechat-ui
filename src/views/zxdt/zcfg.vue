<template>
  <div>
    <nav-bar></nav-bar>
    <van-cell-group :border="false">
      <van-cell
        v-for="item in 100"
        title-class="cell-list-title"
        :key="item"
        icon="label-o"
        title="关于调整住房公积金存贷款利率的通知 "
        value="10-16"
      ></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ChsWebZcfg',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less">
</style>