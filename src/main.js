import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import axios from 'axios'

Vue.prototype.$axios = axios


Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
