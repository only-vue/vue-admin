<template>
    <section>
        <!--工具条-->
        
				<Search
				 :formData="formData"
				/>

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
import Search from "@/components/search.vue";
import Table from "@/components/table.vue";
export default {
    components: {
			  Search,
        Table
    },
    data() {
        return {
            formData:[
							{
								prop:'name',
								value:'', 
								type:"input",
								label:'姓名',
								placeholder:'请输入姓名'
							},
							{
								prop:'sex',
								value:'', 
								type:"select",
								label:'性别',
								options:[
                  {
										label:'男',
										value:1
									},
									{
										label:'女',
										value:2
									}
								],
								placeholder:'请选择性别'
							},
							{
								prop:'date',
								value:'', 
								type:"date",
								label:'日期',
								placeholder:'请选择日期'
							},
							{
								prop:'daterange',
								value:'', 
								type:"daterange",
								label:'日期',
								startPlaceholder:'开始日期',
								endPlaceholder:'结束日期'
							},
							{
								type:"button",
								label:'搜索',
								class:'primary',
								onlick:(row)=>{
                  console.log(row)
								}
							}
						],
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
									console.log(1)
                  this.$router.push('/table1/edit')
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
        getLoad(value={}) {
            let params = {
								page: this.pagination.page,
								pageSize:this.pagination.pageSize,
								...value
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