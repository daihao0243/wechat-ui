import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import { ConfigProvider } from 'vant';
// Toast
import {
  Toast
} from 'vant';
import 'vant/es/toast/style';

// Dialog
import {
  Dialog
} from 'vant';
import 'vant/es/dialog/style';

// Notify
import {
  Notify
} from 'vant';
import 'vant/es/notify/style';

import NavBar from './components/nav-bar'

// ImagePreview
import {
  ImagePreview
} from 'vant';
import 'vant/es/image-preview/style';
import './assets/iconfont/iconfont.css';

const app = createApp(App)
app.use(ConfigProvider);
app.use(router)
app.use(Toast);
app.use(Notify);
app.use(Dialog);
app.component('Dialog', Dialog.Component)
app.component('NavBar', NavBar)
app.use(ImagePreview);
app.mount('#app')