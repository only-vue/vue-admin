<template>
	<el-row class="container">
		<Header :collapsed="collapsed" @handleCollapse="collapse"></Header>
		<el-col :span="24" class="main">
			<Menu :collapsed="collapsed"></Menu>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	import Header from '../components/header.vue'
	import Menu from '../components/menu.vue'
	export default {
		components: {
			Header,
			Menu
		},
		data() {
			return {
				collapsed:false //导航收缩状态
			}
		},
		methods: {
			//折叠导航栏
			collapse(){
				this.collapsed=!this.collapsed;
			}
		},
		mounted() {
			// this.$post('/novelApi')
			// .then((response) => {
			// 	console.log(response)
			// })

		}
	}

</script>

<style scoped lang="scss">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			.content-container {
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>