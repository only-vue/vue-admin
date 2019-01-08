<template>
		<section>
      <!-- 
         selected 默认选中内容
         level 显示级别 0-2级 1-3级
      -->
	   	<area-cascader type="text" v-model="seled"  :level=level  size="large" :data="pcaa"></area-cascader>
   </section>			
</template>
<script>
  import { AreaCascader } from 'vue-area-linkage'
  import { pca, pcaa } from 'area-data'
  export default {
    data () {
      return {
        seled:this.selected,
        pca: pca,
        pcaa: pcaa

      }
    },
    props:['selected','level'],
    mounted() {
			
    },
    methods: {
	   
    }
  }
</script>

<style scoped lang="scss">
	
</style>
