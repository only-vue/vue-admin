<template>
    <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
		<!--导航菜单  @open="handleopen" @close="handleclose" @select="handleselect"-->
		<el-menu :default-active="$route.path" class="el-menu-vertical-demo expanded" 
				unique-opened router v-show="!collapsed"> 
			<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
				<el-submenu :index="index+''">
					<template slot="title"><i :class="item.iconCls">
						</i>{{item.name}}
					</template>
					<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
					   {{child.name}}
					</el-menu-item>
				</el-submenu>
			</template>
		</el-menu>
		<!--导航菜单-折叠后-->
		<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
			<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
				<template>
					<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"
					     @mouseout="showMenu(index,false)">
						<i :class="item.iconCls"></i>
					</div>
					<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" 
					    @mouseout="showMenu(index,false)"> 
						<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" 
						    style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''"
						    @click="$router.push(child.path)">
							{{child.name}}
						</li>
					</ul>
				</template>
			</li>
		</ul>
	</aside>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    props:['collapsed'],
    mounted() {
      
    },
    methods: {
		showMenu(i,status){
			console.log(i)
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
		}
    }
  }
</script>

<style scoped lang="scss">
	.expanded{
			width: 100%!important;
		}
  	aside {
		flex:0 0 230px;
		width: 230px;
		.el-menu{
			height: 100%;
		}
		.collapsed{
			width:60px;
			.item{
				position: relative;
			}
			.submenu{
				position:absolute;
				top:0px;
				left:60px;
				z-index:99999;
				height:auto;
				display:none;
			}

		}
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}
</style>
