<template>
  <template v-if="isMobile">
    <van-nav-bar
      :title="title || $route.meta.title"
      :left-text="leftText"
      fixed
      left-arrow
      placeholder
      @click-left="onClick"
    >
      <template #right>
        <router-link class="nav-bar-action-item" to="/">
          <van-icon name="wap-home-o" style="color: #282828" size="20"
        /></router-link>
      </template>
    </van-nav-bar>
  </template>
  <template v-else>
    <div class="nav-bar-title">
      <h3>{{ title || $route.meta.__title__ }}</h3>
    </div>
  </template>
</template>

<script>
import { sysStore } from '@/stores/sysInfo';

export default {
  name: 'WechatUiNavBar',
  computed: {
    isMobile() {
      return sysStore().isMobile;
    },
  },
  data() {
    return {};
  },
  props: {
    title: String,
    'left-text': {
      default: '返回',
      type: String,
    },
  },
  mounted() {},

  methods: {
    onClick() {
      window.history.back();
    },
  },
};
</script>

<style lang="less" scoped>
.nav-bar-title {
  padding: 10px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
  h3 {
    color: #333;
    margin-bottom: 5px;
  }
}
</style>