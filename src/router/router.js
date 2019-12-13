import Layout from '../views/layout.vue'
  
let routes = [
    { 
        path: '/', 
        component: Layout,
        name: '主页', 
				iconCls: 'el-icon-menu',
        hidden: false,
        children:[
						{ 
						 path: '/main',
						 component: (resolve) => require(['../views/home/home.vue'], resolve), 
						 name: '首页', 
						 hidden: false 
						}
        ]
      },
      
      {
          path: '/',
          component: Layout,
          name: '列表',
          iconCls: 'el-icon-document',
          hidden: false,
          children: [
							{ 
							path: '/table1', 
							component: (resolve) => require(['../views/example/table/table1.vue'], resolve), 
							name: '列表1', 
							hidden: false,
						},
						{ 
							path: '/table1/edit', 
							component: (resolve) => require(['../views/example/table/detail/edit.vue'], resolve), 
							name: '编辑', 
							hidden: true 
						}
            
          ]
      },
      {
        path: '/',
        component: Layout,
        name: '表单',
        iconCls: 'el-icon-message',
        hidden: false,
        children: [
            { path: '/form', component: (resolve) => require(['../views/example/form/form1.vue'], resolve), name: '表单1', hidden: false }
        ]
      },
      {
        path: '/',
        component: Layout,
        name: 'tab切换',
        iconCls: 'el-icon-setting',
        hidden: false,
        children: [
            { 
							path: '/tab', 
							component: (resolve) => require(['../views/example/tab/index.vue'], resolve),
							name: 'tab', 
							hidden: false 
						}
           
        ]
     },
      {
          path: '/',
          component: Layout,
          name: '图表',
          iconCls: 'fa fa-bar-chart',
          hidden: false,
          children: [
              { path: 'echarts', component: (resolve) => require(['../views/example/charts/echarts.vue'], resolve), name: 'echarts', hidden: false }
          ]
      }
];





export default {
    routes
};