<template>
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
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="callbackLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
</template>
<script>
  export default {
    data () {
      return {
         sysName:'VUEADMIN',
         user:{}
      }
    },
    props:['collapsed'],
    mounted() {
      this.user = JSON.parse(this.getStorage('user'))
    },
    methods: {
			//退出登录
			callbackLogin () {
				this.$confirm('确认退出吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.removeStorage('user')
					this.$router.push('/login');
				})
			},
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
