import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import Element from 'element-ui'
import './styles/element-variables.scss'

//全局样式
import './styles/global.scss'

Vue.use(Element, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
