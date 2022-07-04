<template>
  <div style="margin: 10px">
    <!-- <div> -->
    <div class="account-info">
      <div class="title">
        <p class="account-info-text">我的总资产</p>
        <i class="iconfont icon-attention" @click="show = !show"></i>
      </div>
      <div class="number">
        <strong>{{ show ? '10000,242.5' : '*****' }}</strong>
        <span>元</span>
      </div>
      <div class="desc">
        上月缴存 <strong>{{ show ? '100' : '****' }}</strong> 元
      </div>
    </div>

    <!-- <div class="phone-info"> -->
    <!-- <i class="icon iconfont icon-notification"></i>
      <vue3-seamless-scroll class="seamless" :list="list" :step="0.2">
        <div class="phone-info-item" v-for="(item, index) in list" :key="index">
          <p class="text">{{ item.title }}</p>
          <span>{{ item.time }}</span>
        </div>
      </vue3-seamless-scroll> -->
    <br>
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in list" :key="index">
          <div class="notice-swipe-item">
            <p>{{ item.title }}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    <!-- </div> -->

    <grid
      v-for="(item, index) in menuList"
      :key="index"
      :title="item.title"
      :style="{ marginTop: '20px' }"
    >
      <grid-item v-for="(sub, subkey) in item.list" :key="subkey">
        <router-link
          :to="{
            path: '/user/menu',
            query: {
              title: sub.title,
              list: JSON.stringify(sub.list),
            },
          }"
          class="menu-item"
        >
          <!-- <i class="icon iconfont"></i> -->
          <div class="icon">
            <img :src="sub.icon" alt="" />
          </div>
          <p>{{ sub.title }}</p>
        </router-link>
      </grid-item>
    </grid>
    <div class="page-bottom">
      <p class="">若登录页面出现异常或操作过程中遇到系统报错，请联系我们。</p>
      <p class="">业务咨询：<span style="color: #00a6f7">0771-12329</span></p>

      <!-- <p class="text">
        热线咨询服务时间（法定工作日）
        <span>上午9:00-12:00、下午13:00-17:00</span>
      </p>

      <p class="text">
        城区营业部办公时间（法定工作日）
        <span>上午9:00-12:00、下午13:00-17:00</span>
      </p>
      <p class="text">
        各县管理部办公时间（法定工作日）
        <span>上午8:00-12:00、下午15:00-18:00</span>
      </p> -->
      <p class="desc">版权所有：南宁住房公积金管理中心</p>
    </div>
  </div>
</template>

<script>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import Grid from '@/components/grid';
import GridItem from '@/components/grid/item';
export default {
  name: 'user',

  data() {
    return {
      show: true,
      list: [
        { title: '公积金还贷提取已上线，请到进入对应菜单办理' },
        { title: '结息期间，暂停办理销户提取业务' },
      ],
      menuList: [
        {
          title: '业务办理',
          list: [
            {
              url: '${ctx}/yyfw/list/wdcx.html',
              icon: '/img/icon09.png',
              title: '个人预约业务',
            },
            {
              url: '${ctx}/ywbl/zftqsm/view.html',
              icon: '/img/icon10.png',
              title: '提取业务',
              list: [
                {
                  url: '${ctx}/ywbl/zftqsm/view.html',
                  icon: '/img/icon10.png',
                  title: '租房提取申请',
                },
                {
                  url: '${ctx}/ywbl/xhtq/view.html',
                  icon: '/img/icon11.png',
                  title: '离退休提取申请',
                },
                {
                  url: '${ctx}/ywbl/lztqxx/view.html',
                  icon: '/img/icon17.png',
                  title: '离职提取申请',
                },
                {
                  url: '${ctx}/ywbl/ydtqsm.html',
                  icon: '/img/icon14.png',
                  title: '约定提取申请',
                },
                {
                  url: '${ctx}/ywbl/ydtqqx/view.html',
                  icon: '/img/icon18.png',
                  title: '约定提取取消',
                },
                {
                  url: '${ctx}/sdtq/smview.html',
                  icon: '/img/icon14.png',
                  title: '商贷提取申请',
                },
                {
                  url: '${ctx}/hdtq/smview.html',
                  icon: '/img/icon14.png',
                  title: '公积金还贷提取申请',
                },
                {
                  url: '${ctx}/gftq/smview.html',
                  icon: '/img/zican07.png',
                  title: '购房提取申请',
                },
              ],
            },
            {
              url: '${ctx}/ywbl/ywkbd/view.html',
              icon: '/img/icon15.png',
              title: '银行信息维护',
              list: [
                {
                  url: '${ctx}//dkyw/dkqy/qy.html',
                  icon: '/img/icon14.png',
                  title: '银行卡代扣签约',
                },
                {
                  url: '${ctx}/ywbl/ywkbd/view.html',
                  icon: '/img/icon15.png',
                  title: '业务卡绑定',
                },
                {
                  url: '${ctx}/ywbl/ywkjb/view.html',
                  icon: '/img/icon16.png',
                  title: '业务卡解绑',
                },
              ],
            },
            {
              url: '${ctx}/frame/dkywMain.html',
              icon: '/img/icon14.png',
              title: '贷款业务',
            },
            {
              url: '${ctx}/frame/lhjyson',
              icon: '/img/chaxun04.png',
              title: '灵活就业',
            },
            {
              url: '${ctx}/ywbl/ywkbd/view.html',
              icon: '/img/set01.png',
              title: '其他业务',
              list: [
                {
                  url: '${ctx}/ksfsqqr/list.html',
                  icon: '/img/icon18.png',
                  title: '开发商授权确认',
                },
                {
                  url: '${ctx}/ydcrsqgl/findZczxxx/view.html',
                  icon: '/img/icon14.png',
                  title: '异地转入申请',
                },
                {
                  url: '${ctx}/frame/kstbMain.html',
                  icon: '/img/icon14.png',
                  title: '跨省通办',
                },
              ],
            },
          ],
        },
        {
          title: '信息查询',
          list: [
            {
              url: '${ctx}/xxcx/grjcxx/view.html',
              icon: '/img/chaxun01.png',
              title: '账户信息',
              list: [
                {
                  url: '${ctx}/xxcx/grjcxx/view.html',
                  icon: '/img/chaxun01.png',
                  title: '缴存信息',
                },
                {
                  url: '${ctx}/xxcx/jcmx/list.html',
                  icon: '/img/chaxun02.png',
                  title: '账户明细',
                },
                {
                  url: '${ctx}/xxcx/dkxx/view.html',
                  icon: '/img/chaxun03.png',
                  title: '贷款信息',
                },
                {
                  url: '${ctx}/xxcx/dkhkmx/view.html',
                  icon: '/img/chaxun04.png',
                  title: '贷款还款明细',
                },
              ],
            },
            {
              url: '${ctx}/xxcx/dkjdcx/view.html',
              icon: '/img/chaxun05.png',
              title: '业务查询',
              list: [
                {
                  url: '${ctx}/xxcx/dkjdcx/view.html',
                  icon: '/img/chaxun05.png',
                  title: '贷款进度查询',
                },
                {
                  url: '${ctx}/xxcx/tqjdcx/view.html',
                  icon: '/img/chaxun06.png',
                  title: '提取进度查询',
                },
                {
                  url: '${ctx}/yyfw/list/yycx.html',
                  icon: '/img/chaxun07.png',
                  title: '预约信息查询',
                },
                {
                  url: '${ctx}/ydcrsqgl/ydzrqkcx.html',
                  icon: '/img/zican01.png',
                  title: '转入进度查询',
                },
                {
                  url: '${ctx}/lhjy/wxhjqkcx',
                  icon: '/img/chaxun07.png',
                  title: '汇缴情况查询',
                },
                {
                  url: '${ctx}/lhjy/bgqkcx',
                  icon: '/img/chaxun04.png',
                  title: '变更情况查询',
                },
              ],
            },
            {
              url: '${ctx}/xxcx/wdpdqkcx/list.html',
              icon: '/img/icon14.png',
              title: '凭证下载',
              list: [
                {
                  url: '${ctx}/xxcx/pz/dkjqpzcx',
                  icon: '/img/zican02.png',
                  title: '贷款结清凭证',
                },
                {
                  url: '${ctx}/xxcx/pz/hkmxpzcx',
                  icon: '/img/zican03.png',
                  title: '还款明细凭证',
                },
                {
                  url: '${ctx}/xxcx/pz/dkdzdpzcx',
                  icon: '/img/zican04.png',
                  title: '贷款对账单凭证',
                },
              ],
            },
            {
              url: '${ctx}/xxcx/wdpdqkcx/list.html',
              icon: '/img/chaxun08.png',
              title: '网点排队情况查询',
            },
            {
              url: '${ctx}/xxcx/dkjsq/view.html',
              icon: '/img/zican06.png',
              title: '贷款计算器',
            },

            {
              url: '${ctx}/dkyw/dkqy/qycx.html',
              icon: '/img/zican01.png',
              title: '银行卡代扣签约查询',
            },
          ],
        },
        {
          title: '资讯动态',
          list: [
            {
              url: '${ctx}/zxdt/newlist/view.html',
              icon: '/img/zican01.png',
              title: '新闻动态',
            },
            {
              url: '${ctx}/zxdt/zcfglist/view.html',
              icon: '/img/zican02.png',
              title: '政策法规',
            },
            {
              url: '${ctx}/zxdt/zxjbwd/view.html',
              icon: '/img/zican04.png',
              title: '业务网点',
            },
            {
              url: '${ctx}/zxdt/dkll/view.html',
              icon: '/img/zican05.png',
              title: '公积金利率',
            },
            {
              url: '${ctx}/zxdt/zxdh/view.html',
              icon: '/img/zican08.png',
              title: '咨询电话',
            },
          ],
        },
      ],
    };
  },
  components: {
    Grid,
    GridItem,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.account-info {
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 18px;
  border-radius: 8px;
  background: #2f78ec;
  box-shadow: 1px 1px 50px 0 rgba(191, 191, 191, 0.3);
  .title {
    display: flex;
    align-items: center;
  }
  .title,
  .desc {
    font-size: 14px;
  }
  .desc {
    strong {
      font-size: 16px;
      font-weight: normal;
    }
  }
  .number {
    strong {
      font-size: 28px;
      font-weight: normal;
    }
    span {
      font-size: 13px;
    }
  }
}
.menu-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #282828;
  .icon {
    width: 40px;
    height: 40px;
    display: block;
    margin: 15px 0 5px 0;
    font-size: 40px;
    display: flex;
    // background: #ebebeb;
    img {
      width: 80%;
      margin: auto;
    }
  }
  p {
    padding: 5px 0;
    height: 30px;
    display: block;
    font-size: 13px;
    line-height: 15px;
    padding: 0 5px;
    text-align: center;
  }
}
.page-bottom {
  margin-top: 50px;
  padding: 10px;
  font-size: 13px;
  text-align: center;
  color: #9195a3;
  .text {
    padding: 5px 0;
    span {
      display: block;
      color: #00a6f7;
    }
  }
  .desc {
    color: #9195a3;
    text-align: center;
  }
}
.phone-info {
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
  height: 50px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  box-shadow: 1px 1px 50px 0 rgba(191, 191, 191, 0.3);
  .icon {
    width: 25px;
    font-size: 25px;
    margin-right: 8px;
    display: inline-block;
  }
  .phone-info-item {
    margin-bottom: 10px;
  }
  .text {
    font-size: 13px;
  }
  span {
    font-size: 13px;
    color: #00a6f7;
  }
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.notice-swipe-item {
}
</style>