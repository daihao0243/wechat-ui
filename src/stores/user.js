import {
  defineStore
} from 'pinia'
import {
  toTree
} from '@/utils';
export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    token: '',
    hasRouter: false,
    menu: [{
      "id": 1,
      "title": "业务办理",
      "parentId": 0
    }, {
      "id": 2,
      "title": "个人预约业务",
      "parentId": 1,
      "url": "/tqyw/wdcx",
      "icon": "/static/images/icons/gryy-icon.png"
    }, {
      "id": 3,
      "title": "提取业务",
      "parentId": 1,
      "icon": "/static/images/icons/tqyw-icon.png"
    }, {
      "id": 4,
      "title": "租房提取申请",
      "parentId": 3,
      "url": "/tqyw/zftqxx",
      "icon": "/static/images/icons/zftqsq-icon.png"
    }, {
      "id": 5,
      "title": "离退休提取申请",
      "parentId": 3,
      "url": "/tqyw/xhtqSq",
      "icon": "/static/images/icons/ltx-icon.png"
    }, {
      "id": 6,
      "title": "离职提取申请",
      "parentId": 3,
      "url": "",
      "icon": "/static/images/icons/lztqsq-icon.png"
    }, {
      "id": 7,
      "title": "约定提取申请",
      "parentId": 3,
      "url": "",
      "icon": "/static/images/icons/ydtqsq-icon.png"
    }, {
      "id": 8,
      "title": "约定提取取消",
      "parentId": 3,
      "url": "",
      "icon": "/static/images/icons/ydtqqx-icon.png"
    }, {
      "id": 9,
      "title": "商贷提取申请",
      "parentId": 3,
      "url": "",
      "icon": "/static/images/icons/sd-icon.png"
    }, {
      "id": 10,
      "title": "公积金还贷提取申请",
      "parentId": 3,
      "url": "",
      "icon": "/static/images/icons/hk-icon.png"
    }, {
      "id": 11,
      "title": "购房提取申请",
      "parentId": 3,
      "url": "",
      "icon": "/static/images/icons/fwfw-icon.png"
    }, {
      "id": 12,
      "title": "银行信息维护",
      "parentId": 1,
      "icon": "/static/images/icons/yhxxwh-icon.png"
    }, {
      "id": 13,
      "title": "银行卡代扣签约",
      "parentId": 12,
      "url": "",
      "icon": "/static/images/icons/yhkdkqy-icon.png"
    }, {
      "id": 14,
      "title": "业务卡绑定",
      "parentId": 12,
      "url": "",
      "icon": "/static/images/icons/ywkbd-icon.png"
    }, {
      "id": 15,
      "title": "业务卡解绑",
      "parentId": 12,
      "url": "",
      "icon": "/static/images/icons/ywkjb-icon.png"
    }, {
      "id": 16,
      "title": "贷款业务",
      "parentId": 1,
      "url": "",
      "icon": "/static/images/icons/dkyw-icon.png"
    }, {
      "id": 17,
      "title": "灵活就业",
      "parentId": 1,
      "icon": "/static/images/icons/lhjy-icon.png"
    }, {
      "id": 18,
      "title": "付款银行变更",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 19,
      "title": "付款模式变更",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 20,
      "title": "付款方式变更",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 21,
      "title": "月缴存额调整",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 22,
      "title": "个人汇缴",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 23,
      "title": "补缴",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 24,
      "title": "缴存变更",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 25,
      "title": "灵活就业转单位缴存",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 26,
      "title": "单位缴存转灵活就业",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 27,
      "title": "灵活就业销户提取",
      "parentId": 17,
      "url": "/lhjy",
      "icon": ""
    }, {
      "id": 28,
      "title": "其他业务",
      "parentId": 1,
      "icon": "/static/images/icons/qtyw-icon.png"
    }, {
      "id": 29,
      "title": "开发商授权确认",
      "parentId": 28,
      "url": "",
      "icon": "/static/images/icons/kfssqqr-icon.png"
    }, {
      "id": 30,
      "title": "异地转入申请",
      "parentId": 28,
      "url": "",
      "icon": "/static/images/icons/ydzrsq-icon.png"
    }, {
      "id": 31,
      "title": "跨省通办",
      "parentId": 28,
      "url": "",
      "icon": "/static/images/icons/kstb-icon.png"
    }, {
      "id": 32,
      "title": "信息查询",
      "parentId": 0
    }, {
      "id": 33,
      "title": "账户信息",
      "parentId": 32,
      "icon": "/static/images/icons/zhxx-icon.png"
    }, {
      "id": 34,
      "title": "缴存信息",
      "parentId": 33,
      "url": "/xxcx/zhxx/jcxx",
      "icon": "/static/images/icons/jcxx-icon.png"
    }, {
      "id": 35,
      "title": "账户明细",
      "parentId": 33,
      "url": "/xxcx/zhxx/zhmx",
      "icon": "/static/images/icons/zhmx-icon.png"
    }, {
      "id": 36,
      "title": "贷款信息",
      "parentId": 33,
      "url": "/xxcx/zhxx/dkxx",
      "icon": "/static/images/icons/dkxx-icon.png"
    }, {
      "id": 37,
      "title": "贷款还款明细",
      "parentId": 33,
      "url": "/xxcx/zhxx/dkhkmx",
      "icon": "/static/images/icons/dkhkmx-icon.png"
    }, {
      "id": 38,
      "title": "业务查询",
      "parentId": 32,
      "icon": "/static/images/icons/ywcx-icon.png"
    }, {
      "id": 39,
      "title": "贷款进度查询",
      "parentId": 38,
      "url": "",
      "icon": "/static/images/icons/dkjdcx-icon.png"
    }, {
      "id": 40,
      "title": "提取进度查询",
      "parentId": 38,
      "url": "",
      "icon": "/static/images/icons/gtqjd-icon.png"
    }, {
      "id": 41,
      "title": "预约信息查询",
      "parentId": 38,
      "url": "",
      "icon": "/static/images/icons/yyxxcx-icon.png"
    }, {
      "id": 42,
      "title": "转入进度查询",
      "parentId": 38,
      "url": "",
      "icon": "/static/images/icons/jdck-icon.png"
    }, {
      "id": 43,
      "title": "汇缴情况查询",
      "parentId": 38,
      "url": "",
      "icon": "/static/images/icons/hkqkcx-icon.png"
    }, {
      "id": 44,
      "title": "变更情况查询",
      "parentId": 38,
      "url": "",
      "icon": "/static/images/icons/bgqkcx-icon.png"
    }, {
      "id": 45,
      "title": "凭证下载",
      "parentId": 32,
      "icon": "/static/images/icons/pzxz-icon.png"
    }, {
      "id": 46,
      "title": "贷款结清凭证",
      "parentId": 45,
      "url": "",
      "icon": "/static/images/icons/dkjqpz-icon.png"
    }, {
      "id": 47,
      "title": "还款明细凭证",
      "parentId": 45,
      "url": "",
      "icon": "/static/images/icons/hkmxpz-icon.png"
    }, {
      "id": 48,
      "title": "贷款对账单凭证",
      "parentId": 45,
      "url": "",
      "icon": "/static/images/icons/dkdzdpz-icon.png"
    }, {
      "id": 49,
      "title": "网点排队情况查询",
      "parentId": 32,
      "url": "",
      "icon": "/static/images/icons/pdcx-icon.png"
    }, {
      "id": 50,
      "title": "贷款计算器",
      "parentId": 32,
      "url": "",
      "icon": "/static/images/icons/dkjsq-icon.png"
    }, {
      "id": 51,
      "title": "银行卡代扣签约查询",
      "parentId": 32,
      "url": "",
      "icon": "/static/images/icons/yhk-icon.png"
    }, {
      "id": 52,
      "title": "资讯动态",
      "parentId": 0
    }, {
      "id": 53,
      "title": "新闻动态",
      "parentId": 52,
      "url": "/zxdt/news",
      "icon": "/static/images/icons/xw-icon.png"
    }, {
      "id": 54,
      "title": "政策法规",
      "parentId": 52,
      "url": "/zxdt/zcfg",
      "icon": "/static/images/icons/zcfg-icon.png"
    }, {
      "id": 55,
      "title": "业务网点",
      "parentId": 52,
      "url": "/zxdt/ywwd",
      "icon": "/static/images/icons/fwwd-icon.png"
    }, {
      "id": 56,
      "title": "公积金利率",
      "parentId": 52,
      "url": "/zxdt/gjjll",
      "icon": "/static/images/icons/ll-icon.png"
    }, {
      "id": 57,
      "title": "咨询电话",
      "parentId": 52,
      "url": "",
      "icon": "/static/images/icons/zxdh-icon.png"
    }]
  }),

  actions: {
    getMenu() {
      let index = 0
      return toTree(this.menu.map((item) => {
        if (index >= 13) {
          index = 0;
        }
        item.color = 'bg-color-' + index
        index++;
        return item
      }), 'id', 'parentId')
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('supplierUser');
      this.$patch({
        user: {},
        token: ''
      })
    },
    //获取最新用户信息
    getUserInfo() {
      return getCustomerInfo(this.user.userId).then(user => {
        let userInfo = this.user
        userInfo = Object.assign(userInfo, user.map);
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.$patch({
          user: userInfo,
        })
        return userInfo;
      })
    },
    /**
     * Attempt to login a user
     * @param {Object} userInfo 
     */
  },
})