<template>
  <div class="app-foot-cover"></div>
  <div class="app-foot">
    <div>
      <p>
        若登录页面出现异常或操作过程中遇到系统报错，
        <a href="javascript:void(0)" @click="onShowMore">请联系我们 </a>。
      </p>
    </div>

    <div>
      <p class="copyright">版权所有：南宁住房公积金管理中心</p>
    </div>
  </div>
  <app-dialog v-model:show="showdialog" title="联系我们">
    <div class="app-foot-list">
      <p>业务咨询：0771-12329</p>
      <br />
      <p>热线咨询服务时间（法定工作日）：</p>
      <p>上午9:00-12:00、下午13:00-17:00</p>
      <br />
      <p>城区营业部办公时间（法定工作日）：</p>
      <p>上午9:00-12:00、下午13:00-17:00</p>
      <br />
      <p>各县管理部办公时间（法定工作日）：</p>
      <p>上午8:00-12:00、下午15:00-18:00</p>
      <br />
    </div>
  </app-dialog>
</template>

<script>
export default {
  name: 'WechatUiFoot',

  data() {
    return {
      showdialog: false,
    };
  },

  mounted() {},

  methods: {
    onShowMore() {
      this.showdialog = true;
    },
  },
};
</script>

<style lang="less" scoped>
.app-foot-cover {
  height: 90px;
}
.app-foot {
  // left: 290px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-left: 290px;
  .copyright {
    color: #999;
  }
  &-list {
    margin: 20px;
    font-size: 13px;
  }
}
@media (max-width: 800px) {
  .app-foot {
    margin-left: 0;
  }
}
</style>