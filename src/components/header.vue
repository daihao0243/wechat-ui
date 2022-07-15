<template>
  <div class="header">
    <router-link to="/" class="logo">
      <img class="logo-img" src="/static/images/logo.png" mode="aspectFit" />
      <p class="logo-text">南宁住房公积金管理中心</p>
    </router-link>
    <div class="info">
      <p class="user-name">欢迎,邓**</p>
      <!-- <div class="user-icon"><p class="icon iconfont icon-people"></p></div> -->
      <img class="user-img" src="/static/images/icon.png" mode="aspectFit" />
      <div class="user-info">
        <Setting></Setting>
        <!-- <van-cell-group :border="false">
          <van-cell icon="qr" title="二维码" is-link :border="false"></van-cell>
          <van-cell icon="phone-o" title="手机号设置" is-link :border="false"></van-cell>
          <van-cell title="修改密码" is-link :border="false">
            <template #icon>
              <i class="van-cell__left-icon iconfont icon-lock"></i>
            </template>
          </van-cell>
          <van-cell title="安全退出" :border="false" class="exit-cell">
            <template #icon>
              <i class="van-cell__left-icon iconfont icon-exit"></i>
            </template>
          </van-cell>
        </van-cell-group> -->
      </div>
    </div>
  </div>
  <div class="header-cover"></div>
</template>

<script>
import Setting from './setting';
export default {
  data() {
    return {};
  },
  components: {
    Setting,
  },
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: none;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.header-cover {
  height: 50px;
  display: none;
}
.info {
  height: inherit;
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    .user-info {
      // display: block;
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .user-name {
    margin-right: 10px;
  }
  .user-img {
    width: 30px;
    height: 30px;
  }
  .user-icon {
    width: 30px;
    min-width: 30px;
    height: 30px;
    min-height: 30px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #999;
    .icon {
      font-size: 30px;
      color: #999;
    }
  }
  .user-info {
    width: 200px;
    top: 51px;
    right: 10px;
    padding: 10px;
    position: fixed;
    background: #fff;
    box-shadow: 0 2px 4px 0 #0000001a;
    transition: all 0.4s ease;
    // display: none;
    opacity: 0;
    transform: translateY(-51px);
  }
}

.logo {
  display: flex;
  align-items: center;
  color: #282828;
}
.logo-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.logo-text {
  font-size: 20px;
  font-weight: 500;
}
.exit-cell {
  color: #f44336;
}
@media (min-width: 800px) {
  .page {
    padding: 0;
  }
  .account-info {
    display: none;
  }
  .header {
    display: flex;
  }
  .header-cover {
    display: block;
  }
}
</style>
