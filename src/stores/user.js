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
        "title": "智能审批提取",
        "parentId": 1
      }, {
        "id": 3,
        "title": "租房提取",
        "parentId": 2
      }, {
        "id": 4,
        "title": "离退休提取",
        "parentId": 2
      }, {
        "id": 5,
        "title": "离职提取",
        "parentId": 2
      }, {
        "id": 6,
        "title": "商贷还款提取",
        "parentId": 2
      }, {
        "id": 7,
        "title": "购房提取",
        "parentId": 2
      }, {
        "id": 8,
        "title": "公积金还贷提取",
        "parentId": 2
      }







      , {
        "id": 9,
        "title": "人工审批提取",
        "parentId": 1
      }, {
        "id": 10,
        "title": "租房提取申请",
        "parentId": 9
      }, {
        "id": 11,
        "title": "购房提取申请",
        "parentId": 9
      }, {
        "id": 12,
        "title": "离职提取申请",
        "parentId": 9
      }, {
        "id": 13,
        "title": "离退休提取申请",
        "parentId": 9
      }, {
        "id": 14,
        "title": "商业还贷提取申请",
        "parentId": 9
      }, {
        "id": 15,
        "title": "公积金贷款提取申请",
        "parentId": 9
      }, {
        "id": 16,
        "title": "建造、翻建住房提取申请",
        "parentId": 9
      }, {
        "id": 17,
        "title": "既有加装电梯提取申请",
        "parentId": 9
      }, {
        "id": 18,
        "title": "大修住房提取申请",
        "parentId": 9
      }, {
        "id": 19,
        "title": "组合贷款提取申请",
        "parentId": 9
      }, {
        "id": 20,
        "title": "重疾提取申请",
        "parentId": 9
      }, {
        "id": 21,
        "title": "低保提取申请",
        "parentId": 9
      }, {
        "id": 22,
        "title": "完全或部分丧失劳动能力提取申请",
        "parentId": 9
      }, {
        "id": 23,
        "title": "出境定居提取申请",
        "parentId": 9
      }, {
        "id": 24,
        "title": "死亡提取申请",
        "parentId": 9
      }, {
        "id": 25,
        "title": "约定提取及冲还贷",
        "parentId": 1
      }, {
        "id": 26,
        "title": "约定提取登记",
        "parentId": 25
      }, {
        "id": 27,
        "title": "冲还贷登记",
        "parentId": 25
      }, {
        "id": 28,
        "title": "贷款业务",
        "parentId": 1
      }, {
        "id": 29,
        "title": "贷款资格试算器",
        "parentId": 28
      }, {
        "id": 30,
        "title": "贷款预申请",
        "parentId": 28
      }, {
        "id": 31,
        "title": "开发商授权确认",
        "parentId": 28
      }, {
        "id": 32,
        "title": "还款账号变更",
        "parentId": 28
      }, {
        "id": 33,
        "title": "提前还款申请",
        "parentId": 28
      }, {
        "id": 34,
        "title": "跨省通办",
        "parentId": 1
      }

      , {
        "id": 35,
        "title": "异地转入申请",
        "parentId": 34
      }, {
        "id": 36,
        "title": "跨省通办",
        "parentId": 34
      }, {
        "id": 37,
        "title": "个人信息维护",
        "parentId": 1
      }, {
        "id": 38,
        "title": "手机号变更",
        "parentId": 37
      }, {
        "id": 39,
        "title": "密码修改",
        "parentId": 37
      }, {
        "id": 40,
        "title": "信息变更",
        "parentId": 37
      }, {
        "id": 41,
        "title": "预约业务",
        "parentId": 1
      }, {
        "id": 42,
        "title": "个人预约业务",
        "parentId": 41
      }, {
        "id": 43,
        "title": "疫情企业缓缴预约",
        "parentId": 41
      }, {
        "id": 44,
        "title": "疫情延期还款预约",
        "parentId": 41
      }, {
        "id": 45,
        "title": "撤销预约业务",
        "parentId": 41
      }, {
        "id": 46,
        "title": "灵活就业缴存",
        "parentId": 1
      }, {
        "id": 47,
        "title": "灵活就业开户",
        "parentId": 46
      }, {
        "id": 48,
        "title": "缴存额调整",
        "parentId": 46
      }

      , {
        "id": 49,
        "title": "付款银行变更",
        "parentId": 46
      }

      , {
        "id": 50,
        "title": "缴存变更",
        "parentId": 46
      }, {
        "id": 51,
        "title": "补缴",
        "parentId": 46
      }, {
        "id": 52,
        "title": "主动汇缴",
        "parentId": 46
      }, {
        "id": 53,
        "title": "缴存方式变更",
        "parentId": 46
      }, {
        "id": 54,
        "title": "缴存模式变更",
        "parentId": 46
      }, {
        "id": 55,
        "title": "汇补缴情况查询",
        "parentId": 46
      }, {
        "id": 55,
        "title": "变更信息查询",
        "parentId": 46
      }, {
        "id": 56,
        "title": "灵活就业销户提取申请",
        "parentId": 46
      }, {
        "id": 57,
        "title": "灵活就业转单位缴存",
        "parentId": 46
      }, {
        "id": 58,
        "title": "单位缴存转灵活就业",
        "parentId": 46
      }, {
        "id": 59,
        "title": "业务查询",
        "parentId": 0
      }, {
        "id": 60,
        "title": "账户查询",
        "parentId": 59
      }, {
        "id": 61,
        "title": "公积金缴存账户",
        "parentId": 60
      }, {
        "id": 62,
        "title": "贷款信息",
        "parentId": 60
      }, {
        "id": 63,
        "title": "办理进度查询",
        "parentId": 59
      }, {
        "id": 64,
        "title": "网点排队情况查询",
        "parentId": 63
      }, {
        "id": 65,
        "title": "提取进度查询",
        "parentId": 63
      }, {
        "id": 66,
        "title": "网厅约定提取登记查询",
        "parentId": 63
      }, {
        "id": 67,
        "title": "贷款进度查询",
        "parentId": 63
      }, {
        "id": 68,
        "title": "异地转入进度查询",
        "parentId": 63
      }, {
        "id": 69,
        "title": "提前还款查询",
        "parentId": 63
      }, {
        "id": 70,
        "title": "还款账号变更查询",
        "parentId": 63
      }, {
        "id": 71,
        "title": "手机号变更查询",
        "parentId": 63
      }, {
        "id": 72,
        "title": "证明开具",
        "parentId": 59
      }, {
        "id": 73,
        "title": "公积金缴存证明",
        "parentId": 72
      }, {
        "id": 74,
        "title": "异地贷款缴存证明",
        "parentId": 72
      }, {
        "id": 75,
        "title": "结清证明打印",
        "parentId": 72
      }, {
        "id": 76,
        "title": "还款明细打印",
        "parentId": 72
      }, {
        "id": 77,
        "title": "贷款对账单",
        "parentId": 72
      }, {
        "id": 78,
        "title": "银行卡签约及绑定",
        "parentId": 1
      }, {
        "id": 79,
        "title": "银行卡代扣签约",
        "parentId": 78
      }, {
        "id": 80,
        "title": "银行卡代扣签约查询",
        "parentId": 78
      }, {
        "id": 81,
        "title": "业务卡绑定申请",
        "parentId": 78
      }, {
        "id": 82,
        "title": "撤销业务卡绑定",
        "parentId": 78
      }, {
        "id": 83,
        "title": "资讯动态",
        "parentId": 0
      }, {
        "id": 82,
        "title": "资讯动态",
        "parentId": 83
      }, {
        "id": 84,
        "title": "新闻动态",
        "parentId": 82
      }, {
        "id": 85,
        "title": "业务指南",
        "parentId": 82
      }, {
        "id": 86,
        "title": "其他功能",
        "parentId": 1
      }, {
        "id": 87,
        "title": "扫描功能",
        "parentId": 86
      }, {
        "id": 88,
        "title": "文件上传",
        "parentId": 86
      }, {
        "id": 89,
        "title": "刷脸登录",
        "parentId": 86
      }, {
        "id": 90,
        "title": "刷身份证及银行卡",
        "parentId": 86
      }

      , {
        "id": 91,
        "title": "打印功能",
        "parentId": 86
      }












    ]
  }),

  actions: {
    getMenu() {
      let index = 0
      return toTree(this.menu.map((item) => {
        if (index >= 13) {
          index = 0;
        }
        item.url = !item.url ? '/404' : item.url
        item.color = 'bg-color-' + index
        item.icon = "/static/images/icons/dkxx-icon.png"
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