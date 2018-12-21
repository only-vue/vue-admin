
import Vue from 'vue'
import App from './App'

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
//import './assets/theme/theme-green/index.css'

//util
import util from './assets/js/util.js'

//Vuex
import store from './vuex/store'
import Vuex from 'vuex'

//router
import router from './router'

//ueditor
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

//Mock
import Mock from './mock'
Mock.bootstrap();

//axios
import {post,get} from './http'
Vue.prototype.$post=post;
Vue.prototype.$get=get;

Vue.use(ElementUI)
Vue.use(util)
Vue.use(Vuex)




new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

