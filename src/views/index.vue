<template>
  <app-header></app-header>
  <div class="main-container">
    <div class="main-wrap" v-if="routePath == '/' || !isMobile">
      <account-info v-if="isMobile"></account-info>
      <app-menu></app-menu>
    </div>
    <div class="main-body">
      <router-view v-slot="{ Component }">
        <keep-alive :include="[]">
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
  min-height: ~'calc(100vh - 51px)';
  max-width: 1024px;
  margin: auto;
  position: relative;
  background: #fff;
  .main-body {
    padding: 20px;
    margin-left: 290px;
  }
  .main-body-header {
    font-size: 25px;
    padding: 0px 0 20px 0;
  }
}
@media (max-width: 800px) {
  .main-container {
    min-height: 100vh;
    background: none;
    .main-body {
      padding: 0;
      margin-left: 0;
    }
    .main-wrap {
      margin: 10px;
    }
  }
}
</style>