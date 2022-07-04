import {
  defineStore
} from 'pinia'
import {
  loginByPhone,
  getCustomerInfo,
  getShopCartCount,
  smsLogin
} from '@/apis/user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    token: ''
  }),

  actions: {
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