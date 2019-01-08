import Vue from "vue";
import VueRouter from "vue-router";
import Router from '../router/router'
import { storage } from '../assets/js/util.js';

import Login from '../views/login.vue'
import No404 from '../views/404.vue'

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
        component: No404,
        name: '',
        hidden: true
    },
    ...Router.routes
];


var router =  new VueRouter({
    routes
})


/**
 * router拦截 
 * nextRoute 路由权限
 * 
 *  */ 
router.beforeEach((to, from, next) => {
    let user = JSON.parse(storage.getStorage('user'));
    if(user){
        const nextRoute = []; //'主页', '列表'
        routes.map((item,index)=>{
            if(item.children){
              item.children.map((child,key)=>{
                nextRoute.indexOf(child.name) >= 0?child.hidden=true:''
              })
            }
            nextRoute.indexOf(item.name) >= 0?item.hidden=true:''
        })
    }
    !user && to.path != '/login'?next({ path: '/login' }):next()
   
})  

export default router;