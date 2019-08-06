import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueSocketIo from 'vue-socket.io'
import { vueBaberrage } from 'vue-baberrage'

import router from '@router/router'
import store from './store/index'
import '@assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@assets/font/iconfont.css'

Vue.use(ElementUI)
Vue.use(vueBaberrage)

// Vue.use(new VueSocketIo({
//   dubug: true,
//   connection: 'http://localhost:3000'
// }))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
