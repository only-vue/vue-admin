<template>
    <el-col :span="24" class="toolbar">
		<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0" v-if="control.selection">批量删除</el-button>
		<el-pagination layout="total, prev, pager, next, jumper" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
		</el-pagination>
	</el-col>
</template>
<script>
  export default {
    data () {
      return {
          pageChange:''
      }
    },
    props:['control','total','sels'],
    mounted() {
      
    },
    methods: {
	    handleCurrentChange(val) {
			this.pageChange=val
		    this.$emit('handleCurrentChange',val)
		},
		//批量删除
		batchRemove: function () {
      let paramsMore={
				ids:this.sels.map(item => item.id).toString()
			}
			this.$confirm('确认删除选中记录吗？', '提示', {
				type: 'warning'
			}).then(() => {
				this.$emit('batchRemove',this.pageChange,paramsMore)
			});
		}
    }
  }
</script>

<style scoped lang="scss">
	
</style>
