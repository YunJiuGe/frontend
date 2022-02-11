import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Request } from '@/api/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Request.init()

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
