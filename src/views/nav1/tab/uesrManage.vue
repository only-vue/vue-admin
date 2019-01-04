<template>
	  <el-form ref="form" :model="form" label-width="80px" style="margin:20px;width:60%;min-width:600px;">
			<el-form-item label="活动名称">
			<el-input v-model="form.name" placeholder="请输入名称"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
			</el-form-item>
			<el-form-item label="活动时间">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col>
			</el-form-item>
			<el-form-item>
			<el-button type="primary" >保存</el-button>
			<el-button>取消</el-button>
			</el-form-item>
        </el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
				  	name: '',
				  	region: '',
				  	date1: '',
				  	date2: ''
			  	}
			}
		},
		mounted() {
		  
		},
		methods: {
			
			
		}
	}

</script>