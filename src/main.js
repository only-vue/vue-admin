
import Vue from 'vue'
import App from './App'

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
//import './assets/theme/theme-green/index.css'

//util
import './assets/css/base.css'
import util from './assets/js/util.js'

//Vuex
import store from './vuex/store'
import Vuex from 'vuex'

//router
import router from './router/index'

//ueditor
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

//vue-area-linkage 省市区联动选择
import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';

//Mock
import Mock from './mock'
Mock.bootstrap();

//axios
import {post,get} from './http'
Vue.prototype.$post=post;
Vue.prototype.$get=get;

Vue.use(ElementUI)
Vue.use(VueAreaLinkage)
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

