<template>
  <!-- 菜单 -->
  <van-notice-bar v-if="isMobile" style="margin-top: 20px" left-icon="volume-o" :scrollable="false">
    <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item
        >热线咨询服务时间（法定工作日）：上午9:00-12:00、下午13:00-17:00</van-swipe-item
      >
      <van-swipe-item
        >城区营业部办公时间（法定工作日）：上午9:00-12:00、下午13:00-17:00</van-swipe-item
      >
      <van-swipe-item
        >各县管理部办公时间（法定工作日）：上午8:00-12:00、下午15:00-18:00</van-swipe-item
      >
    </van-swipe>
  </van-notice-bar>
  <div class="side-bar">
    <div class="side-item" v-if="!isMobile">
      <div class="side-item-container">
        <div class="side-item-list" :class="{ 'current-active': '' }">
          <router-link class="menu-item" to="/">
            <div class="menu-item-title">
              <div class="icon bg-color-5">
                <van-icon name="wap-home" size="16" />
              </div>
              <p class="title">首页</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="side-item" v-for="(item, index) in list" :key="index">
      <div class="side-item-header">
        <p>{{ item.title }}</p>
      </div>
      <div class="side-item-container">
        <div
          class="side-item-list"
          v-for="(menu, menuIndex) in item.list"
          :key="menuIndex"
          :class="{ 'current-active': currentPath == menu.url }"
        >
          <router-link class="menu-item" :to="menu.url" v-if="menu.url">
            <div class="menu-item-title">
              <div class="icon" :class="[menu.color]">
                <img class="img" :src="menu.icon" mode="aspectFit" />
              </div>
              <p class="title">{{ menu.title }}</p>
            </div>
          </router-link>
          <div class="menu-item" v-else @click="onMenuClick(menu)">
            <div class="menu-item-title">
              <div class="icon" :class="[menu.color]">
                <img class="img" :src="menu.icon" mode="aspectFit" />
              </div>
              <p class="title">{{ menu.title }}</p>
              <p class="arrow iconfont icon-right" :class="{ open: menu.open }"></p>
            </div>
          </div>
          <div class="menu-secondary" v-if="menu.open">
            <router-link
              class="menu-secondary-item"
              v-for="(secondary, secondaryindex) in menu.list"
              :to="secondary.url"
              :key="secondaryindex"
            >
              <div class="menu-item-title">
                <div class="icon" :class="[secondary.color]">
                  <img class="img" :src="secondary.icon" mode="aspectFit" />
                </div>
                <p class="title">{{ secondary.title }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-popup v-model:show="showPopup" position="bottom">
    <app-grid
      class="ift-row ift-row-xs-4 ift-row-sm-6 ift-row-md-10 ift-row-lg-12"
      :title="current.title"
    >
      <app-grid-cell class="ift-col" v-for="(item, index) in current.list" :key="index">
        <div class="menu-item menu-item-title" @tap="onItemClick(item)">
          <div class="icon" :class="[item.color]">
            <img class="img" :src="item.icon" mode="aspectFit" />
          </div>
          <p class="title">{{ item.title }}</p>
        </div>
      </app-grid-cell>
    </app-grid>
  </van-popup>
</template>

<script>
import { sysStore } from '@/stores/sysInfo';
import { userStore } from '@/stores/user';

export default {
  data() {
    return {
      showPopup: false,
      current: {
        title: '',
        list: [],
      },
      currentPath: '',
      menuList: [],
      iconIndex: -1,
    };
  },
  computed: {
    isMobile() {
      return sysStore().isMobile;
    },
    list() {
      const menu = userStore().getMenu();
      return menu;
    },
  },
  methods: {
    onMenuClick(e) {
      let innerWidth = window.innerWidth;
      if (innerWidth > 800) {
        e.open = !e.open;
      } else {
        this.current.title = e.title;
        this.current.list = e.list;
        // this.$refs.popup.open('bottom');
        this.showPopup = true;
      }
    },
    onItemClick(e) {
      this.$refs.popup.close();
      uni.navigateTo({
        url: e.url || '/',
      });
    },
  },
  created() {
    // this.currentPath==
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.side-bar {
  width: 100%;
}
.side-item {
  margin-top: 15px;
  padding-bottom: 10px;
  overflow: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 1px 50px 0 rgba(191, 191, 191, 0.3);
}
.side-item-container {
  overflow: hidden;
  padding: 5px;
}
.side-item-list {
  width: 25%;
  position: relative;
  float: left;
}

.side-item-header {
  font-size: 14px;
  height: 45px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}
.menu-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #282828;
}
.menu-item-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: flex-start;
  .icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    display: block;
    margin: 15px 0 5px 0;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    // background: #ebebeb;
    .img {
      width: 50%;
      // height: 80%;
      margin: auto;
    }
  }
  .title {
    padding: 5px 0;
    height: 30px;
    display: block;
    font-size: 13px;
    line-height: 15px;
    padding: 0 5px;
    text-align: center;
  }
  .arrow {
    margin-right: 10px;
    display: none;
    transition: all 0.3s;
  }
  .arrow.open {
    transform: rotate(90deg);
  }
}
.menu-secondary {
  display: none;
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
}
.menu-secondary-item {
  display: block;
  padding-left: 20px;
  &:hover {
    background: #ebebeb;
  }
}

@media (min-width: 800px) {
  .side-bar {
    width: 290px;
    // height: 100%;
    position: fixed;
    top: 51px;
    // left: 0;
    bottom: 0;
    overflow: auto;
    border-right: 1px solid #f8f8f8;
    background: #fff;
  }
  .side-item {
    border-radius: 0;
    box-shadow: none;
    background: none;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 0;
      right: 10px;
      height: 1px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.1);
      transform-origin: 0 0;
      transform: scaleY(0.5);
      z-index: 2;
    }
  }
  .side-item-list {
    width: auto;
    float: none;
    cursor: pointer;

    .menu-item {
      align-items: flex-start;
      &:hover {
        background: #ebebeb;
      }
    }
    .menu-item-title {
      width: 100%;
      padding: 5px;
      flex: 1;
      flex-direction: row;
      .icon {
        margin: 0;
        width: 25px;
        min-width: 25px;
        height: 25px;
        min-height: 25px;
        border-radius: 50%;
        // background: #f00;
        .img {
          width: 60%;
          height: 60%;
          margin: auto;
        }
      }
      .title {
        height: auto;
        color: #262626;
      }
      .arrow {
        display: block;
        margin-left: auto;
        font-size: 15px;
        color: #888;
      }
    }
  }

  .router-link-exact-active {
    background: #dbdbdb;
  }
  .side-item-header {
    // font-size: 15px;
    height: auto;
    padding: 10px;
    // border-bottom: 1px solid #e8e8e8;
    border: none;
    color: rgb(113, 113, 113);
  }
  .menu-secondary {
    display: block;
  }
}
</style>
<style>
.bg-color-0 {
  background: #3077e9;
}
.bg-color-1 {
  background: #facd89;
}
.bg-color-2 {
  background: #c490bf;
}
.bg-color-3 {
  background: #fd6470;
}
.bg-color-4 {
  background: #80c269;
}
.bg-color-5 {
  background: #84ccc9;
}
.bg-color-6 {
  background: #00a0e9;
}
.bg-color-7 {
  background: #7ecef4;
}
.bg-color-8 {
  background: #fa92fa;
}
.bg-color-9 {
  background: #7ce7e5;
}
.bg-color-10 {
  background: #13b5b1;
}
.bg-color-11 {
  background: #88abda;
}
.bg-color-12 {
  background: #f8b551;
}
</style>
