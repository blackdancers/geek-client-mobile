import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入自定义插件
import GeekIcon from '@/components'

Vue.use(Vant)
// 使用插件
Vue.use(GeekIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
