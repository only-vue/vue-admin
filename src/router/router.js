import Layout from '../views/layout.vue'
  
let routes = [
    { 
        path: '/', 
        component: Layout,
        name: '主页', 
        iconCls: 'el-icon-menu',
        hidden: false,
        children:[
            { path: '/main', component: (resolve) => require(['../views/home/home.vue'], resolve), name: '主页' }, 
        ]
      },
      {
          path: '/',
          component: Layout,
          name: '菜单一',
          iconCls: 'el-icon-message',
          hidden: false,
          children: [
              { path: '/table', component: (resolve) => require(['../views/nav1/table.vue'], resolve), name: '列表' },
              { path: '/form', component: (resolve) => require(['../views/nav1/form.vue'], resolve), name: '表单' },
              { path: '/tab', component: (resolve) => require(['../views/nav1/tab.vue'], resolve), name: 'tab' }
          
          ]
      },
      {
          path: '/',
          component: Layout,
          name: '图表',
          iconCls: 'fa fa-bar-chart',
          hidden: false,
          children: [
              { path: '/echarts', component: (resolve) => require(['../views/charts/echarts.vue'], resolve), name: 'echarts' }
          ]
      }
];





export default {
    routes
};