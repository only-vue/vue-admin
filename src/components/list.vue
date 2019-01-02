<template>
		<div>
			<el-table-column type="selection" width="55" v-if="control.selection">
			</el-table-column>
			<el-table-column type="index" width="60" v-if="control.rank">
			</el-table-column>
      <el-table-column :prop="item.prop" :label="item.label" sortable v-for="(item,index) in columns" :key="index">
			</el-table-column>
   </div>			
</template>
<script>
  export default {
    data () {
      return {
         
      }
    },
    props:['control','columns'],
    mounted() {
			
    },
    methods: {
	   
    }
  }
</script>

<style scoped lang="scss">
	
</style>
