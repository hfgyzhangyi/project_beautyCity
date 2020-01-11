import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import MyBottom from '@/components/Bottom'

Vue.config.productionTip = false
Vue.component(MyBottom.name, MyBottom)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
