import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import {
  createPinia
} from 'pinia'
import {
  sysStore
} from './stores/sysInfo'
import {
  ConfigProvider
} from 'vant';
import {
  Toast,
  Dialog,
  Notify,
} from 'vant';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';

import NavBar from './components/nav-bar'

import AppPicker from '@/components/appFormPicker';
import ResponsiveAction from '@/components/responsiveAction'
import './assets/iconfont/iconfont.css';

import './assets/less/index.less'


const pinia = createPinia()
const app = createApp(App)

window.addEventListener('resize', e => {
  if (e.currentTarget.innerWidth <= 800) {
    sysStore().update(true)
  } else {
    sysStore().update(false)
  }
});
app.use(ConfigProvider);
app.use(pinia);
app.use(router)
app.use(Toast);
app.use(Notify);
app.use(Dialog);
app.component('AppDialog', Dialog.Component)

app.component('NavBar', NavBar)
app.component('AppPicker', AppPicker)
app.component('ResponsiveAction', ResponsiveAction)

// app.config.globalProperties.isMobile = sysStore().isMobile;
app.mount('#app')