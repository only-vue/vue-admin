<template>
     <section>
        <el-col :span="24" class="header">
					<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
						{{collapsed?'':sysName}}
					</el-col>
					<el-col :span="10">
						<div class="tools" @click.prevent="handleCollapse">
							<i class="fa fa-align-justify"></i>
						</div>
					</el-col>
					<el-col :span="4" class="userinfo">
						<el-dropdown trigger="hover">
							<span class="el-dropdown-link userinfo-inner"><img :src="user.avatar" /> {{user.name}}</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>我的消息	<el-badge :value="12"></el-badge></el-dropdown-item>
								<el-dropdown-item @click.native="$refs.updataPassWord.show=true">修改密码</el-dropdown-item>
								<el-dropdown-item divided @click.native="callbackLogin">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
       </el-col>
        <Dialog :dialogShow="false" :dialogBtns="true" title="修改密码" @handleSave="handleSave" ref="updataPassWord">
				    <el-form ref="form" :model="form" :rules="rules" label-width="80px" slot="main">
								<el-form-item label="新密码" prop="pass">
									<el-input v-model="form.pass" type="password" placeholder="请输入新密码"  ></el-input>
								</el-form-item>
								<el-form-item label="再次输入" prop="again">
									<el-input v-model="form.again" type="password" placeholder="请输入再次输入新密码"  ></el-input>
								</el-form-item>
						</el-form>
			  </Dialog>
		 </section>
</template>


<script>
 import { storage } from '../assets/js/util.js';
 import { Rule } from '@/assets/js/rule.js'
 import Dialog from '@/components/dialog.vue'
  export default {
		components: {
			Dialog
		},
		template:'#updataPassWord',
    data () {
      return {
         sysName:'VUEADMIN',
				 user:{},
				 form:{
					 pass:'',
					 again:''
				 },
					rules:{
						pass:[
							Rule.checkDataNull('请输入新密码','blur')
						],
						again:[
							Rule.checkDataNull('请再次输入新密码','blur'),
							Rule.checkDataValidate(this)
						]
					}
      }
    },
		props:['collapsed'],
    mounted() {
			this.user = JSON.parse(storage.getStorage('user'));
    },
    methods: {
			//退出登录
			callbackLogin () {
				this.$confirm('确认退出吗?', '提示', {
					type: 'warning'
				}).then(() => {
					storage.removeStorage('user');
					this.$router.push('/login');
				})
			},
			//修改密码--提交
			handleSave(){
				this.$refs.form.validate((valid) => {
					if (valid) {
						this.dialogShow=false;
					}
				});
			},
			//收缩
      handleCollapse(){
				this.$emit('handleCollapse')
			}    
    }
  }
</script>

<style scoped lang="scss">
    .header {
			height: 60px;
			line-height: 60px;
			background: #20a0ff;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
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
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		
		}
		
</style>
