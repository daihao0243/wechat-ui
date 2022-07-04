<template>
  <div class="container">
    <div class="side">
      <li class="side-item" v-for="(item, index) in list" :key="index" @click="current = item">
        <div class="title">
          <p>{{ item.title }}</p>
        </div>
        <div class="side-item-body">
          <div class="side-item-wrap">
            <iframe class="side-frame" :src="item.src" frameborder="0"></iframe>
          </div>
        </div>
      </li>
    </div>
    <div class="main">
      <div class="browse">
        <iframe class="browse-frame" :src="current.src" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import menu from './menu'
export default {
  name: 'WechatUiIndex',

  data() {
    return {
      current: {},
      list: menu
    };
  },
  components: {
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
}
.side {
  width: 192px;
  min-width: 192px;
  height: 100%;
  margin-left: 10px;
  overflow: auto;
}
.main {
  float: left;
  margin-left: 310px;
}
.browse{
  width: 400px;
  height: 100%;
}
.browse-frame{
  width: 100%;
  height: 100%;
}
.side-item {
  width: 169px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #fff;
  &:hover {
    border: 1px solid #00a6f7;
  }
  .title {
    width: 100%;
    text-align: left;
    font-size: 14px;
    padding: 10px 0;
    color: #999;
  }
}
.side-item-body {
  width: 169px;
  height: 300px;
}
.side-item-wrap {
  width: 338px;
  height: 600px;
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
}
.side-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>