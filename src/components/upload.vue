<template>
    <div id="upload">
        <el-upload
            class="upload-demo"
            :action="action"
            :multiple="uploadData.multiple?uploadData.multiple:false"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture-card"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <xh-image-preview 
					:visible.sync="visible" 
					:images="fileList" 
					:defaultImage="defaultImage" 
				/>
    </div>
</template>
<script>
import Vue from "vue";
import xhImagePreview from "xh-image-preview";
Vue.use(xhImagePreview);
export default {
    data() {
        return {
            action: "https://jsonplaceholder.typicode.com/posts/", //上传路径
            fileList: [], //图片数组
            visible: false,
            defaultImage: ""
        };
    },
    props: ["uploadData"],
    mounted() {
        this.fileList = this.uploadData.list;
    },
    methods: {
        //上传之前
        beforeUpload(file) {
            const isSize =
                file.size / 1024 / 1024 <
                (this.uploadData.size ? this.uploadData.size : 20);
            if (!isSize) {
                this.MessageBox(
                    "提示",
                    `上传图片不能小于${this.uploadData.size}M`,
                    "error"
                );
                return;
            }
        },
        //上传成功
        handleSuccess(res, file, fileList) {
            this.fileList = [];
            fileList.forEach(item => {
                this.fileList.push(item.url);
            });
        },
        //移除内容
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        //查看内容
        handlePreview(file) {
            this.defaultImage = file.url;
            this.visible = true;
        }
    }
};
</script>

<style scoped lang="scss">
</style>
