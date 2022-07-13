<template>
  <div class="header">
    <div class="logo">
      <img class="logo-img" src="/static/images/logo.png" mode="aspectFit" />
      <p class="logo-text">南宁住房公积金管理中心</p>
    </div>
    <div class="info">
      <p class="user-name">欢迎,邓**</p>
      <!-- <div class="user-icon"><p class="icon iconfont icon-people"></p></div> -->
      <img class="user-img" src="/static/images/icon.png" mode="aspectFit" />
      <div class="user-info">
        <!-- <text>邓昭礼</text> -->

        <button type="warn" plain class="app-m-t-2 app-button">退出登录</button>
      </div>
    </div>
  </div>
  <div class="header-cover"></div>
</template>

<script></script>

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
      display: block;
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
    display: none;
    width: 250px;
    top: 51px;
    right: 10px;
    padding: 10px;
    position: fixed;
    background: #fff;
    box-shadow: 0 2px 4px 0 #0000001a;
  }
}

.logo {
  display: flex;
  align-items: center;
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
