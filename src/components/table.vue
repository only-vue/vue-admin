<template>
    <section>
        <el-table :data="tableData" highlight-current-row>
            <el-table-column 
					  	type="index" 
					  	width="60" 
						/>
            <el-table-column
                :prop="item.prop"
                :label="item.label"
								:width="item.width&&item.width"
                v-for="(item,index) in columns"
                :key="index"
								:fixed="item.fixed&&item.fixed"
								:formatter="item.formatter"
            />
						<el-table-column 
								label="操作" 
								v-if="operation.length>0" 
								:width="operation[0].width"
								:fixed="operation[0].fixed&&'right'"
							>
							<template slot-scope="scope">
								<a 
									href="#"
									v-for="(item,index) in operation"
									:key="index" 
									@click="item.onclick&&item.onclick(scope.$index, scope.row)"
								>
								 {{item.label}}
								</a>
							</template>
						</el-table-column>
        </el-table>
         <el-pagination
							layout="total,sizes, prev, pager, next, jumper"
							@current-change="onChange"
							@size-change="onSizeChange"
							:page-size="pagination.pageSize"
							:page-sizes="[10, 20, 30, 40, 50]"
							:total="pagination.total"
					/>
    </section>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: ["columns", "tableData","operation","pagination"],
    mounted() {
			page:1
		},
    methods: {
        //选择分页
        onChange(value) {
					  this.$parent.pagination.page=value;
            this.$parent[this.pagination.onChange](value);
				},
				//批量选择
				onSizeChange(value){
					this.$parent.pagination.pageSize=value;
					this.$parent.pagination.page=1;
					this.$parent[this.pagination.onSizeChange](value);

				}
    }
};
</script>

<style scoped lang="scss">
</style>
