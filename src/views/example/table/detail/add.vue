<template>
	<el-form ref="form" :model="form" :rules="rules" label-width="80px" class="form">
		<el-form-item label="姓名" prop="name">
			<el-input v-model="form.name" placeholder="请输入姓名"  ></el-input>
		</el-form-item>
		<el-form-item label="性别" prop="sex">
		   <el-select v-model="form.sex" placeholder="请选择性别">
				<el-option label="男" value="1"></el-option>
				<el-option label="女" value="2"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="年龄">
			<el-input v-model="form.age" placeholder="请输入年龄"></el-input>
		</el-form-item>
		<el-form-item label="生日">
			<el-date-picker v-model="form.birth" type="date" placeholder="请选择生日"> </el-date-picker>
		</el-form-item>
		<el-form-item label="地址">
            <Cascader ref="cascader" :selected="form.addr" :level="level"></Cascader>
		</el-form-item>
		<el-form-item>
			<el-button type="primary"  @click="handleSubmit('form')">保存</el-button>
			<el-button @click="Back()">返回</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import Cascader from '@/components/cascader.vue' 
	import { Rule } from '@/assets/js/rule.js'
	export default {
		components: {
			Cascader
		},
		data() {
			return {
				level:1,
				form: {
					name: '',
					sex: '',
					age: '',
					birth: '',
					addr: []
				},
				rules:{
					name:[
					   Rule.checkDataNull('姓名不能为空','blur')
					],
					sex:[
					   Rule.checkDataType('','请选择性别','change')
					]
				}
			}
		},
		mounted() {
		 
		},
		methods: {
			//保存
			handleSubmit(form) {
			 this.$refs[form].validate((valid) => {
				if (valid) {
				  this.$router.push({ 
				     path:'/table2'
			      })
				}
		   	  });
			}
		
			
		}
	}

</script>