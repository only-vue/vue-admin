<template>
    <div id="upload">
        <el-upload
            class="upload-demo"
            :action="action"
						:multiple="loadData.multiple?loadData.multiple:false"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture-card"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
    </div>
</template>
<script>
export default {
    data() {
        return {
					  action:'https://jsonplaceholder.typicode.com/posts/',//上传路径
            fileList: [] //图片数组
        };
		},
		props:['loadData'],
    mounted() {
			this.fileList=this.loadData.list;
		},
    methods: {
			  //移除图片
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
				//查看图片
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>

<style scoped lang="scss">
</style>
