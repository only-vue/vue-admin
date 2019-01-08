<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getListData(page)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!-- 
          List 列表
		  columns 数据列
		  control 控制器       
    		-->
		<el-table :data="listData" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<List :control="control" :columns="columns"></List>
		</el-table>

		<!-- Pagination 分页  
		     control 控制项
			 sels 选中
             total 总计
		     handleCurrentChange分页切换    
			 batchRemove 批量删除
	    -->
		<Pagination :total="total" @handleCurrentChange="getListData" @batchRemove="getListData"></Pagination>		
	</section>
</template>

<script>
	import {util,ListConfig} from '@/assets/js/util'
	import { getUserListPage } from '@/api/api';
	import List from '@/components/list.vue'
    import Pagination from '@/components/pagination.vue'
	export default {
		components: {
			List,
			Pagination
		},
		data() {
			return {
				filters: {
					name: ''
				},
				control:ListConfig.state4,
				columns:[
					{
					  prop:'name',
					  label:'姓名'
					},
					{
					  prop:'sex',
					  label:'性别',
					},{
					  prop:'age',
					  label:'年龄',
					},
					{
					  prop:'birth',
					  label:'生日',
					},
					{
					  prop:'addr',
					  label:'地址'
					}
				],
				listData: [],
				total: ListConfig.total,
				page: ListConfig.page,
				listLoading: false
			}
		},
		methods: {
			//性别显示转换
			handleColumn: function (data) {
				 data.map(item=>item.sex=item.sex == 1 ?'男' : item.sex == 0 ? '女' : '未知');
			},
			//获取用户列表
			getListData(page,paramsMore={}) {
				this.listLoading = true;
				let params={
                      page:page?page:this.page,
					  name: this.filters.name,
					  ...paramsMore
				 }
				getUserListPage(params).then((res) => {
					this.total = res.data.total;
					this.handleColumn(res.data.users)
					this.listData=res.data.users
					this.listLoading = false;
				});
			}
			
		},
		mounted() {
			this.getListData();
		}
	}

</script>

<style scoped>

</style>