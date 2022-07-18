<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="less">
#app,
body {
  height: 100%;
}
body {
  background-color: #f8f8f8 !important;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

ul,
li,
p {
  margin: 0;
  padding: 0;
}
.van-config-provider {
  min-height: calc(100vh - 56px);
}
.app-tip {
  margin: 10px;
  color: #666666;
  font-size: 13px;
}

.cell-list-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-typo-text {
  font-size: 13px;
  line-height: 1.8;
}
.app-text-color-red {
  color: #f4433f;
}
.app-text-color-blue {
  color: #1989fa;
}
</style>