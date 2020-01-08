<template>
    <section>
        <el-col :span="24" class="header">
            <el-col
                :span="10"
                class="logo"
                :class="collapsed?'logo-collapse-width':'logo-width'"
            >{{collapsed?'':sysName}}</el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="handleCollapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <img :src="user.avatar" />
                        {{user.name}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item @click.native="dialogStatus=true">修改密码</el-dropdown-item>
                        <el-dropdown-item divided @click.native="callbackLogin">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <Dialog
            :dialogShow="dialogStatus"
            :dialogBtns="true"
            v-if="dialogStatus"
            title="修改密码"
            ref="updataPassWord"
            @handleClose="()=>{this.dialogStatus=false}"
        >
            <div class="updataPassWord" slot="main">
                <Form
                    :formData="formData"
                    :rulesData="rulesData"
                    :formBtns="formBtns"
                    @handleSubmit="handleSubmit"
                />
            </div>
        </Dialog>
    </section>
</template>


<script>
import { storage } from "@/utils/util.js";
import { Rule } from "@/utils/rule.js";
import Dialog from "@/components/dialog.vue";
import Form from "@/components/form.vue";
export default {
    components: {
        Dialog,
        Form
    },
    template: "#updataPassWord",
    data() {
        return {
            sysName: "后台管理系统",
            user: {},
            dialogStatus: false,
            formData: [
                {
                    prop: "userName",
                    value: storage.getStorage("user").name,
                    type: "input",
                    disabled: true,
                    label: "登录名称"
                },
                {
                    prop: "oldPassWord",
                    value: "",
                    type: "password",
                    label: "旧密码",
                    placeholder: "请输入旧密码"
                },
                {
                    prop: "newsPassWord",
                    value: "",
                    type: "password",
                    label: "新密码",
                    placeholder: "请输入新密码"
                },
                {
                    prop: "newsPassWordAgree",
                    value: "",
                    type: "password",
                    label: "再次确认",
                    placeholder: "请再次输入新密码"
                }
            ],
            formBtns: [
                {
                    label: "登录",
                    type: "primary",
                    isVerify: true
                },
                {
                    label: "取消",
                    click: () => {
                        this.dialogStatus = false;
                    }
                }
            ],
            rulesData: {
                oldPassWord: [Rule.checkDataNull("请输入旧密码", "blur")],
                newsPassWord: [Rule.checkDataNull("请输入新密码", "blur")],
                newsPassWordAgree: [
                    Rule.checkDataNull("请再次输入新密码", "blur")
                ]
            }
        };
    },
    props: ["collapsed"],
    mounted() {
        this.user = storage.getStorage("user");
    },
    methods: {
        //退出登录
        callbackLogin() {
            this.$confirm("确认退出吗?", "提示", {
                type: "warning"
            }).then(() => {
                storage.removeStorage("user");
                this.$router.push("/login");
            });
        },
        //修改密码--提交
        handleSubmit(data) {
            console.log(data);
        },
        //收缩
        handleCollapse() {
            this.$emit("handleCollapse");
        }
    }
};
</script>

<style  lang="scss">
.header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
    .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
            cursor: pointer;
            color: #fff;
            img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin: 10px 0px 10px 10px;
                float: right;
            }
        }
    }
    .logo {
        //width:230px;
        height: 60px;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238, 241, 146, 0.3);
        border-right-width: 1px;
        border-right-style: solid;
        img {
            width: 40px;
            float: left;
            margin: 10px 10px 10px 18px;
        }
        .txt {
            color: #fff;
        }
    }
    .logo-width {
        width: 230px;
    }
    .logo-collapse-width {
        width: 60px;
    }
    .tools {
        padding: 0px 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
    }
}
.updataPassWord {
    .form {
        width: 75% !important;
    }
}
</style>
