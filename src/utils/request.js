import axios from "axios"
import router from '../router'
import {
  LoadingBar,
  Notice,
  Modal
} from 'view-ui-plus';
const baseURL = process.env.VUE_APP_BASE_URL
const errorCode = {
  '401': '当前操作没有权限',
  '403': '当前操作没有权限',
  '404': '资源不存在',
  'default': '系统未知错误,请反馈给管理员'
}
const request = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  validateStatus: (status) => {
    return status >= 200 && status <= 500 // 默认的
  }
});
request.interceptors.request.use(config => {
  const isToken = (config.headers || {}).isToken === false
  const token = localStorage.getItem('token')
  if (token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + token // token
  }
  LoadingBar.start()
  return config;
}, error => {
  LoadingBar.error()
  Notice.error({
    title: 'error',
    desc: error || '系统异常'
  })
  // 对请求错误做些什么
  return Promise.reject(error);
});

// HTTPresponse拦截
request.interceptors.response.use(res => {
  const status = Number(res.status) || 200;
  const code = Number(res.data.code);
  const message = res.data.msg || errorCode[status] || errorCode['default'];
  LoadingBar.finish()
  if (status == 200 && code == 200) {
    return res.data
  } else if (code == 401) {
    localStorage.removeItem('token')
    router.push({
      path: '/login'
    })
  } else {
    Notice.warning({
      title: '提示',
      desc: res.data.$Message || message,
    });
  }
}, error => {
  Notice.error({
    title: 'error',
    desc: error || '系统异常'
  })
  return Promise.reject(new Error(error))
});
export default request