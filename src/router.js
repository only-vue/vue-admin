import Vue from "vue";
import VueRouter from "vue-router";

import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import echarts from './views/charts/echarts.vue'

Vue.use(VueRouter);
  
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    { 
      path: '/', 
      component: Home,
      name: '主页', 
      iconCls: 'el-icon-menu',
      children:[
           { path: '/main', component: Main, name: '主页' }, 
      ]
    },
    {
        path: '/',
        component: Home,
        name: '菜单一',
        iconCls: 'el-icon-message',
        children: [
            { path: '/table', component: Table, name: '列表' },
            { path: '/form', component: Form, name: '表单' },
        
        ]
    },
    {
        path: '/',
        component: Home,
        name: '图表',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];


var router =  new VueRouter({
    routes
})

//router拦截
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})  

export default router;