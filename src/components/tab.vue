<template>
     <!-- 
          handleClick 切换方法
          title  数据
          currentName 当前选中状态值
          currentView 当前显示组件
     -->
		<el-tabs v-model="currName" @tab-click="handleClick">
			  <el-tab-pane :label="item.label" :name="item.name" :disabled="item.disabled" v-for="(item,index) in title" :key="index">
            <component :is="currView" ></component>
        </el-tab-pane>
   </el-tabs>			
</template>
<script>
  export default {
    data () {
      return {
         currName:this.currentName, 
         currView:this.currentView
      }
    },
    props:['title','currentName','currentView'],
    mounted() {
		  
    },
    methods: {
	     handleClick(tab, event) {
         let index=parseInt(tab.index)
         this.currView=this.title[index].component
			}
    }
  }
</script>

<style scoped lang="scss">
	
</style>
