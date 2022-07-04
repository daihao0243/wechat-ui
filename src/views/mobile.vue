<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <router-link class="list-item-link" :to="item.src">
        <p class="title">{{ item.title }}</p>
        <div class="list-item-body">
          <!-- <div class="frame-wrap"> -->
          <div class="frame-box">
            <iframe class="frame" :src="item.src" frameborder="0"></iframe>
          </div>
          <!-- </div> -->
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import menu from './menu';

export default {
  name: 'WechatUiMobile',

  data() {
    return {
      list: menu,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.list{
  margin-right: 15px;
}
.list-item {
  width: 50%;
  padding-bottom: 63.96%;
  display: flex;
  float: left;
  margin-bottom: 38px;
  position: relative;
}
.list-item-link {
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  display: block;
  padding: 0 10px 10px 10px;
  margin-left: 15px;
  overflow: hidden;
  box-shadow: 1px 4px 8px 1px rgba(112, 112, 112,.2);
  background: #fff;
  .title {
    width: 100%;
    text-align: left;
    font-size: 14px;
    padding: 10px 0;
    color: #999;
  }
}
.list-item-body {
  width: 100%;
  height: 100%;
}
.frame-wrap {
  // width: 169px;
  width: 100%;
  // height: 300px;
  height: 63.96%;
}
.frame-box {
  width: 200%;
  // height: 600px;
  height: 200%;
  transform: scale(0.5);
  transform-origin: left top;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 100;
  }
  .frame {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>