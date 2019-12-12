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
					tableData 数据
					columns 数据列
					operation 操作项  
					pagination  分页控制器     
        -->
        <Table 
				:columns="columns" 
				:tableData="tableData" 
				:pagination="pagination" 
				:operation="operation"
				/>
    </section>
</template>

<script>
import { util } from "@/utils/util.js";
import { getUserListPage } from "@/api/api";
import Table from "@/components/table.vue";
export default {
    components: {
        Table
    },
    data() {
        return {
            filters: {
                name: ""
            },
            columns: [
                {
                    prop: "name",
										label: "姓名"
                },
                {
                    prop: "sex",
										label: "性别",
										formatter:(row,column)=>{
				              return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知"
										}
                },
                {
                    prop: "age",
										label: "年龄"
                },
                {
                    prop: "birth",
										label: "生日"
                },
                {
                    prop: "addr",
										label: "地址",
                }
            ],
            pagination: {
                total: 10,
								page: 1,
								pageSize:20,
								onChange:'getLoad',
								onSizeChange:'getLoad',
            },
						tableData: [],
						operation:[
							{
								label:'修改',
								width:100,
								onclick:(key,row)=>{
                  console.log(row)
								}
							}
						]
        };
    },
    mounted() {
        this.getLoad();
    },
    methods: {
        //获取数据
        getLoad(page) {
            let params = {
								page: this.pagination.page,
								pageSize:this.pagination.pageSize,
                name: this.filters.name
            };
            getUserListPage(params).then(res => {
                this.pagination.total = res.data.total;
                this.tableData = res.data.users;
            });
        }
    }
};
</script>

<style scoped>
</style>