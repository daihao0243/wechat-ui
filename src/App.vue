<template>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name">></component>
  </router-view>
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
.van-config-provider{
  min-height: calc(100vh - 56px);
}
</style>