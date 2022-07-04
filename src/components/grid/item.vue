<template>
  <li class="grid-item">
    <div class="grid-item-wrap">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'WechatUiItem',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.grid-item {
  width: 25%;
  padding-bottom: 25%;
  position: relative;
  float: left;
}
.grid-item-wrap{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
</style>