<template>
  <div class="grid">
    <div class="grid-header">{{ title }}</div>
    <div class="grid-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WechatUiIndex',

  data() {
    return {};
  },
  props: ['title'],
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.grid {
  overflow: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 1px 50px 0 rgba(191, 191, 191, 0.3);
}
.grid-header {
  font-size: 15px;
  height: 45px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}
.grid-body {
  overflow: auto;
  padding: 5px;
}
</style>