<template>
		<section>
        <!-- 
          dialogShow 显示dialog
          dialogBtns 显示按钮
          title 标题名称
        -->
        <el-dialog
		   		:title="title"
				  :visible.sync="show"
          :before-close="handleClose"
          class="dialog"
          >
          <slot name="main"></slot>
          <span slot="footer" class="dialog-footer" v-if="btns">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleSave">确 定</el-button>
          </span>
			   </el-dialog>         
   </section>			
</template>
<script>
  export default {
    data () {
      return {
          show: this.dialogShow,
          btns: this.dialogBtns
      }
    },
    props:{
      dialogShow:{
          type: Boolean,
          default: false
       },
       dialogBtns:{
          type: Boolean,
          default: true
       },
       title:{
         type: String,
         default: '提示'
       }
    },
    methods: {
       handleClose(){
         this.show=false;
       },
       handleSave(){
         this.$emit('handleSave')
       },
       test(){
         console.log(1)
       }
    }
  }
</script>

<style scoped lang="scss">
	.dialog{
			max-width:1200px;
			margin:0 auto;
	}
</style>
