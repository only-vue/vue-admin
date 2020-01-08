<template>
    <div class="login">
        <div class="demo-ruleForm login-container">
            <h3 class="title">系统登录</h3>
            <Form
                :formData="formData"
                :rulesData="rulesData"
                :formBtns="formBtns"
                @handleSubmit="handleSubmit"
            />
        </div>
    </div>
</template>

<script>
import { storage } from "@/utils/util.js";
import { Rule } from "@/utils/rule.js";
import Form from "@/components/form.vue";
export default {
    components: {
        Form
    },
    data() {
        return {
            logining: false,
            formData: [
                {
                    prop: "userName",
                    value: "admin",
                    type: "input",
                    label: "账号",
                    placeholder: "请输入账号"
                },
                {
                    prop: "password",
                    value: "123456",
                    type: "password",
                    label: "密码",
                    placeholder: "请输入密码"
                },
                {
                    prop: "code",
                    value: "3m3d",
                    type: "input",
                    label: "验证码",
                    picCode: "",
                    placeholder: "请输入验证码",
                    click: data => {
                        this.getLoad();
                    }
                }
            ],
            formBtns: [
                {
                    label: "登录",
                    type: "primary",
                    isVerify: true
                }
            ],
            rulesData: {
                userName: [Rule.checkDataNull("请输入账号", "blur")],
                password: [Rule.checkDataNull("请输入密码", "blur")],
                code: [Rule.checkDataNull("请输入验证码", "blur")]
            }
        };
    },
    mounted() {
        this.getLoad();
    },
    methods: {
        //初始化请求
        getLoad() {
            this.formData[2].picCode = require("../assets/images/login/code.jpg");
        },
        //获取子组件返回数据
        handleSubmit(data) {
            storage.setStorage("user", {
                avatar: require("../assets/images/user.png"),
                name: "超级管理员"
            });
            this.$router.push({ path: "/main" });
        }
    }
};
</script>

<style lang="scss" >
@import "../assets/css/login/index.scss";
</style>