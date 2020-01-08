<template>
    <div id="form">
        <Form :formData="formData" :rulesData="rulesData" />
    </div>
</template>
<script>
import Form from "@/components/form.vue";
import Ueditor from "@/components/ueditor.vue";
import { Rule } from "@/utils/rule.js";
export default {
    components: {
        Form,
        Ueditor
    },
    data() {
        return {
            formData: [
                {
                    prop: "name",
                    value: "",
                    type: "input",
                    label: "姓名",
                    placeholder: "请输入姓名"
                },
                {
                    prop: "rideo",
                    value: "1",
                    type: "radio",
                    label: "rideo选项",
                    options: [
                        {
                            label: "选项1",
                            value: "1"
                        },
                        {
                            label: "选项2",
                            value: "2"
                        }
                    ],
                    placeholder: "请选择性别"
                },
                {
                    prop: "sex",
                    value: "1",
                    type: "select",
                    label: "性别",
                    options: [
                        {
                            label: "男",
                            value: "1"
                        },
                        {
                            label: "女",
                            value: "2"
                        }
                    ],
                    placeholder: "请选择性别"
                },
                {
                    prop: "date",
                    value: "",
                    type: "date",
                    label: "活动日期",
                    placeholder: "请选择活动日期"
                },
                {
                    prop: "checkbox",
                    value: ["1"],
                    type: "checkbox",
                    label: "checkbox选项",
                    options: [
                        {
                            label: "选项1",
                            value: "1"
                        },
                        {
                            label: "选项2",
                            value: "2"
                        }
                    ],
                    placeholder: "请选择性别"
                },
                {
                    prop: "switch",
                    value: true,
                    type: "switch",
                    label: "是否支撑"
                },
                {
                    prop: "upload",
                    value: "",
                    type: "upload",
                    multiple: true,
                    label: "图片上传"
                },
                {
                    prop: "editor",
                    value: "",
                    type: "editor",
                    label: "文本内容"
                }
            ],
            rulesData: {
                name: [Rule.checkDataNull("姓名不能为空", "blur")],
                sex: [Rule.checkDataNull("性别不能为空", "change")],
                date: [Rule.checkDataNull("活动日期不能为空", "blur")]
            }
        };
    },
    mounted() {},
    methods: {
        handleSubmit(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    alert("submit!");
                }
            });
        },
        handleChange(file, fileList) {
            this.fileList3 = fileList.slice(-3);
        },
        getUEContent() {
            let content = this.$refs.ue.getUEContent();
            console.log(content);
        }
    }
};
</script>