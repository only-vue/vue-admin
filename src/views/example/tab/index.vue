<template>
     <Tab :currentName="currentName" :title="title" :currentView="currentView"></Tab>
</template>
<script>
	import Tab from '@/components/tab.vue'
	import UesrManage from './uesrManage.vue'
	import ConfigManage from './configManage.vue'
	import RoleManage from './roleManage.vue'
	import TalkTime from './talkTime.vue'
	export default {
		components: {
			Tab
		},
		data() {
			return {
			  title:[
                 {
				   label:'用户管理',
				   name:'first',
				   component:UesrManage,
				   disabled:false  	 
				 },
				 {
				   label:'配置管理',
				   name:'second',
				   component:ConfigManage,
				   disabled:true  	 
				 },
				 {
				   label:'角色管理',
				   name:'third',
				   component:RoleManage,
				   disabled:false  	 
				 },
				 {
				   label:'定时任务补偿',
				   name:'fourth',
				   component:TalkTime,
				   disabled:false  	 
				 }
			  ],
			  currentName: 'first',
			  currentView: UesrManage			
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped>

</style>