import {
  defineStore
} from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    token: '',
    menu: [{
        title: '业务办理',
        list: [{
            url: '${ctx}/yyfw/list/wdcx.html',
            icon: '/static/images/icons/gryy-icon.png',
            title: '个人预约业务',
          },
          {
            icon: '/static/images/icons/tqyw-icon.png',
            title: '提取业务',
            list: [{
                url: '/tqyw/zftqxx',
                icon: '/static/images/icons/zftqsq-icon.png',
                title: '租房提取申请',
              },
              {
                url: '/tqyw/xhtqSq',
                icon: '/static/images/icons/ltx-icon.png',
                title: '离退休提取申请',
              },
              {
                url: '${ctx}/ywbl/lztqxx/view.html',
                icon: '/static/images/icons/lztqsq-icon.png',
                title: '离职提取申请',
              },
              {
                url: '${ctx}/ywbl/ydtqsm.html',
                icon: '/static/images/icons/ydtqsq-icon.png',
                title: '约定提取申请',
              },
              {
                url: '${ctx}/ywbl/ydtqqx/view.html',
                icon: '/static/images/icons/ydtqqx-icon.png',
                title: '约定提取取消',
              },
              {
                url: '${ctx}/sdtq/smview.html',
                icon: '/static/images/icons/sd-icon.png',
                title: '商贷提取申请',
              },
              {
                url: '${ctx}/hdtq/smview.html',
                icon: '/static/images/icons/hk-icon.png',
                title: '公积金还贷提取申请',
              },
              {
                url: '${ctx}/gftq/smview.html',
                icon: '/static/images/icons/fwfw-icon.png',
                title: '购房提取申请',
              },
            ],
          },
          {
            icon: '/static/images/icons/yhxxwh-icon.png',
            title: '银行信息维护',
            list: [{
                url: '${ctx}//dkyw/dkqy/qy.html',
                icon: '/static/images/icons/yhkdkqy-icon.png',
                title: '银行卡代扣签约',
              },
              {
                url: '${ctx}/ywbl/ywkbd/view.html',
                icon: '/static/images/icons/ywkbd-icon.png',
                title: '业务卡绑定',
              },
              {
                url: '${ctx}/ywbl/ywkjb/view.html',
                icon: '/static/images/icons/ywkjb-icon.png',
                title: '业务卡解绑',
              },
            ],
          },
          {
            url: '${ctx}/frame/dkywMain.html',
            icon: '/static/images/icons/dkyw-icon.png',
            title: '贷款业务',
          },
          {
            url: '${ctx}/frame/lhjyson',
            icon: '/static/images/icons/lhjy-icon.png',
            title: '灵活就业',
          },
          {
            icon: '/static/images/icons/qtyw-icon.png',
            title: '其他业务',
            list: [{
                url: '${ctx}/ksfsqqr/list.html',
                icon: '/static/images/icons/kfssqqr-icon.png',
                title: '开发商授权确认',
              },
              {
                url: '${ctx}/ydcrsqgl/findZczxxx/view.html',
                icon: '/static/images/icons/ydzrsq-icon.png',
                title: '异地转入申请',
              },
              {
                url: '${ctx}/frame/kstbMain.html',
                icon: '/static/images/icons/kstb-icon.png',
                title: '跨省通办',
              },
            ],
          },
        ],
      },
      {
        title: '信息查询',
        list: [{
            icon: '/static/images/icons/zhxx-icon.png',
            title: '账户信息',
            list: [{
                url: '${ctx}/xxcx/grjcxx/view.html',
                icon: '/static/images/icons/jcxx-icon.png',
                title: '缴存信息',
              },
              {
                url: '${ctx}/xxcx/jcmx/list.html',
                icon: '/static/images/icons/zhmx-icon.png',
                title: '账户明细',
              },
              {
                url: '${ctx}/xxcx/dkxx/view.html',
                icon: '/static/images/icons/dkxx-icon.png',
                title: '贷款信息',
              },
              {
                url: '${ctx}/xxcx/dkhkmx/view.html',
                icon: '/static/images/icons/dkhkmx-icon.png',
                title: '贷款还款明细',
              },
            ],
          },
          {
            icon: '/static/images/icons/ywcx-icon.png',
            title: '业务查询',
            list: [{
                url: '${ctx}/xxcx/dkjdcx/view.html',
                icon: '/static/images/icons/dkjdcx-icon.png',
                title: '贷款进度查询',
              },
              {
                url: '${ctx}/xxcx/tqjdcx/view.html',
                icon: '/static/images/icons/gtqjd-icon.png',
                title: '提取进度查询',
              },
              {
                url: '${ctx}/yyfw/list/yycx.html',
                icon: '/static/images/icons/yyxxcx-icon.png',
                title: '预约信息查询',
              },
              {
                url: '${ctx}/ydcrsqgl/ydzrqkcx.html',
                icon: '/static/images/icons/jdck-icon.png',
                title: '转入进度查询',
              },
              {
                url: '${ctx}/lhjy/wxhjqkcx',
                icon: '/static/images/icons/hkqkcx-icon.png',
                title: '汇缴情况查询',
              },
              {
                url: '${ctx}/lhjy/bgqkcx',
                icon: '/static/images/icons/bgqkcx-icon.png',
                title: '变更情况查询',
              },
            ],
          },
          {
            icon: '/static/images/icons/pzxz-icon.png',
            title: '凭证下载',
            list: [{
                url: '${ctx}/xxcx/pz/dkjqpzcx',
                icon: '/static/images/icons/dkjqpz-icon.png',
                title: '贷款结清凭证',
              },
              {
                url: '${ctx}/xxcx/pz/hkmxpzcx',
                icon: '/static/images/icons/hkmxpz-icon.png',
                title: '还款明细凭证',
              },
              {
                url: '${ctx}/xxcx/pz/dkdzdpzcx',
                icon: '/static/images/icons/dkdzdpz-icon.png',
                title: '贷款对账单凭证',
              },
            ],
          },
          {
            url: '${ctx}/xxcx/wdpdqkcx/list.html',
            icon: '/static/images/icons/pdcx-icon.png',
            title: '网点排队情况查询',
          },
          {
            url: '${ctx}/xxcx/dkjsq/view.html',
            icon: '/static/images/icons/dkjsq-icon.png',
            title: '贷款计算器',
          },

          {
            url: '${ctx}/dkyw/dkqy/qycx.html',
            icon: '/static/images/icons/yhk-icon.png',
            title: '银行卡代扣签约查询',
          },
        ],
      },
      {
        title: '资讯动态',
        list: [{
            url: '${ctx}/zxdt/newlist/view.html',
            icon: '/static/images/icons/xw-icon.png',
            title: '新闻动态',
          },
          {
            url: '${ctx}/zxdt/zcfglist/view.html',
            icon: '/static/images/icons/zcfg-icon.png',
            title: '政策法规',
          },
          {
            url: '${ctx}/zxdt/zxjbwd/view.html',
            icon: '/static/images/icons/fwwd-icon.png',
            title: '业务网点',
          },
          {
            url: '${ctx}/zxdt/dkll/view.html',
            icon: '/static/images/icons/ll-icon.png',
            title: '公积金利率',
          },
          {
            url: '${ctx}/zxdt/zxdh/view.html',
            icon: '/static/images/icons/zxdh-icon.png',
            title: '咨询电话',
          },
        ],
      },
    ]
  }),

  actions: {
    getMenu() {
      let index = 0;
      this.menu.forEach((item) => {
        item.list.forEach((element) => {
          ++index;
          if (index >= 13) {
            index = 0;
          }
          let _index = 0;
          element.color = 'bg-color-' + index;
          element.list &&
            element.list.forEach((list) => {
              ++_index;
              if (_index >= 13) {
                _index = 0;
              }
              list.color = 'bg-color-' + _index;
            });
        });
      });
      return this.menu
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
    async login(userInfo) {
      return new Promise((resolve, reject) => {
        loginByPhone(userInfo.phone, userInfo.vcode).then(res => {
          if (res.code != 200) {
            return resolve(res);
          }
          localStorage.setItem('token', res.data.token);
          getCustomerInfo(res.userId).then(user => {
            let userInfo = {
              loginStatus: res.loginStatus,
              userId: res.userId,
              id: res.id,
              isAudit: res.isAudit,
              childrenDepartements: res.childrenDepartements,
              departementId: res.departementId,
              auditLevel: res.auditLevel,
              customerManager: res.customerManager,
              customerManagerPhone: res.customerManagerPhone,
            }
            userInfo = Object.assign(userInfo, user.map);
            localStorage.setItem('user', JSON.stringify(userInfo));
            this.$patch({
              user: userInfo,
              token: res.data.token
            })
            resolve(res);
          })
        }).catch(error => {
          reject(error);
        })
      })

    },
    async loginBySms(userInfo) {

      return new Promise((resolve, reject) => {
        smsLogin(userInfo.phone, userInfo.loginCode).then(res => {
          if (res.code != 200) {
            return resolve(res);
          }
          localStorage.setItem('token', res.data.token);
          getCustomerInfo(res.userId).then(user => {
            let userInfo = {
              loginStatus: res.loginStatus,
              userId: res.userId,
              id: res.id,
              isAudit: res.isAudit,
              childrenDepartements: res.childrenDepartements,
              departementId: res.departementId,
              auditLevel: res.auditLevel,
              customerManager: res.customerManager,
              customerManagerPhone: res.customerManagerPhone,
            }
            userInfo = Object.assign(userInfo, user.map);
            localStorage.setItem('user', JSON.stringify(userInfo));
            this.$patch({
              user: userInfo,
              token: res.data.token
            })
            resolve(res);
          })
        }).catch(error => {
          reject(error);
        })
      })

    },
  },
})