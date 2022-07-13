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
</style>