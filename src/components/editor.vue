<template>
    <div id="editor">
        <quill-editor
            class="editor"
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
        />
    </div>
</template>
<script>
import Vue from "vue";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);
export default {
    data() {
        return {
            content: ``,
            editorOption: {
                placeholder: "",
                placeholder: "您想说点什么？",
                modules: {
                    toolbar: {
                        container: [
                            ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
                            ["blockquote", "code-block"], // 引用  代码块
                            [{ header: 1 }, { header: 2 }], // 1、2 级标题
                            [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
                            [{ script: "sub" }, { script: "super" }], // 上标/下标
                            [{ indent: "-1" }, { indent: "+1" }], // 缩进
                            [{'direction': 'rtl'}],                         // 文本方向
                            [{ size: ["small", false, "large", "huge"] }], // 字体大小
                            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
                            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
                            [{ font: [] }], // 字体种类
                            [{ align: [] }], // 对齐方式
                            ["clean"], // 清除文本格式
                            ["link", "image", "video"] // 链接、图片、视频
                        ],
                        // container: "#toolbar",
                        // handlers: {
                        //     image: function(value) {
												// 			if (value) {
												// 				document.querySelector(".avatar-uploader input").click();
												// 			}else {
												// 				this.quill.format("image", false);
												// 				}
                        // }
                    }
                }
            }
        };
    },
    props: ["editorData"],
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    mounted() {
        this.content = this.editorData && this.editorData;
    },
    methods: {
        // 准备编辑器
        onEditorReady(editor) {},
        // 失去焦点事件
        onEditorBlur() {},
        // 获得焦点事件
        onEditorFocus() {},
        // 内容改变事件
        onEditorChange(value) {
					this.$emit("onChange", value.html);
				}
    }
};
</script>
<style >
.editor {
    height: 260px;
    display: inline-block;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
    content: "请输入链接地址:" !important;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: "保存" !important;
    padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
    content: "请输入视频地址:" !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: "14px" !important;
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
    content: "10px" !important;
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
    content: "18px" !important;
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
    content: "32px" !important;
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "文本" !important;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "标题1" !important;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "标题2" !important;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "标题3" !important;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: "标题4" !important;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: "标题5" !important;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: "标题6" !important;
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: "标准字体" !important;
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
    content: "衬线字体" !important;
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
    content: "等宽字体" !important;
}
</style>