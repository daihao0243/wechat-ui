<template>
  <app-header></app-header>
  <div class="main-container">
    <account-info v-if="routePath == '/' && isMobile"></account-info>
    <app-menu v-if="routePath == '/' || !isMobile"></app-menu>
    <div class="main-body">
      <router-view v-slot="{ Component }">
        <keep-alive :exclude="['sysStatus']">
          <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name"></component>
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name">></component>
      </router-view>
    </div>
    <app-foot></app-foot>
  </div>
</template>

<script>
import accountInfo from '@/components/accountInfo';
import { sysStore } from '@/stores/sysInfo';
import appHeader from '@/components/header';
import appMenu from '@/components/menu';
import appFoot from '@/components/foot';

export default {
  name: 'App',
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isMobile() {
      return sysStore().isMobile;
    },
    routePath() {
      return this.$route.path;
    },
  },
  components: {
    appHeader,
    appMenu,
    accountInfo,
    appFoot,
  },
  mounted() {},
};
</script>

<style lang="less">
.main-container {
  max-width: 1024px;
  margin: auto;
  position: relative;
  // height: 100vh;
  background: #fff;

  min-height: ~'calc(100vh - 51px)';
  // display: flex;
  .main-body {
    padding: 20px;
    // overflow: auto;
    margin-left: 290px;
    flex: 1;
  }
  .main-body-header {
    font-size: 25px;
    padding: 0px 0 20px 0;
  }
}
@media (max-width: 800px) {
  .main-container {
    margin: 10px;
    background: none;
    .main-body {
      padding: 0;
      margin-left: 0;
    }
  }
}
</style>