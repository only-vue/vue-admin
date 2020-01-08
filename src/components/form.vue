<template>
    <el-form ref="form" :model="rules" :rules="rulesData" label-width="120px" class="form">
        <el-form-item
            v-for="(item,index) in formData"
            :key="index"
            :label="item.label&&item.label"
            :prop="item.prop&&item.prop"
        >
            <template v-if="item.type==='input'||item.type==='password'">
                <el-input
                    :type="item.type"
                    v-model.trim="rules[item.prop]"
                    :placeholder="item.placeholder"
                    :disabled="item.disabled&&item.disabled"
                />
                <div class="el-pic" v-if="item.picCode" @click="item.click(rules[item.prop])">
                    <img :src="item.picCode" />
                </div>
            </template>
            <template v-if="item.type==='select'">
                <el-select v-model="rules[item.prop]" :placeholder="item.placeholder">
                    <el-option
                        v-for="option in item.options"
                        :key="option.value"
                        :label="option.label"
                        :value="option.value"
                    ></el-option>
                </el-select>
            </template>
            <template v-if="item.type==='radio'">
                <el-radio-group v-model="rules[item.prop]">
                    <el-radio
                        :label="option.value"
                        v-for="option in item.options"
                        :key="option.label"
                    >{{option.label}}</el-radio>
                </el-radio-group>
            </template>
            <template v-if="item.type==='checkbox'&&rules[item.prop]">
                <el-checkbox-group v-model="rules[item.prop]">
                    <el-checkbox
                        :label="option.value"
                        v-for="option in item.options"
                        :key="option.label"
                    >{{option.label}}</el-checkbox>
                </el-checkbox-group>
            </template>
            <template v-if="item.type==='date'">
                <el-date-picker
                    v-model="rules[item.prop]"
                    type="date"
                    :placeholder="item.placeholder"
                    value-format="yyyy-MM-dd"
                />
            </template>
            <template v-if="item.type==='daterange'">
                <el-date-picker
                    v-model="rules[item.prop]"
                    type="daterange"
                    range-separator="-"
                    :start-placeholder="item.startPlaceholder?item.startPlaceholder:'开始日期'"
                    :end-placeholder="item.endPlaceholder?item.endPlaceholder:'结束日期'"
                    value-format="yyyy-MM-dd"
                />
            </template>
            <template v-if="item.type==='switch'">
                <el-switch
                    v-model="rules[item.prop]"
                    :active-text="item.activeText&&item.activeText"
                    :inactive-text="item.inactiveText&&item.inactiveText"
                />
            </template>
            <template v-if="item.type==='upload'">
                <Upload
                    :uploadData="{ 
                    multiple:item.multiple,
										list:rules[item.prop]?rules[item.prop]:[]
								  }"
                />
            </template>
            <template v-if="item.type==='editor'">
                <Editor :editorData="rules[item.prop]" @onChange="value=>{rules[item.prop]=value}" />
            </template>
            <template v-if="item.type==='button'">
                <el-button :type="item.class" @click="item.onlick(formData)">{{item.label}}</el-button>
            </template>
        </el-form-item>
        <el-form-item class="btns">
            <el-button
                v-for="(item,index) in formBtns"
                :key="index"
                :type="item.type&&item.type"
                @click="item.isVerify?handleSubmit('form'):item.click()"
            >{{item.label}}</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { Rule } from "@/utils/rule.js";
import Upload from "@/components/upload.vue";
import Editor from "@/components/editor.vue";
export default {
    components: {
        Upload,
        Editor
    },
    data() {
        return {
            datas: {},
            rules: {}
        };
    },
    props: ["formData", "rulesData", "formBtns"],
    watch: {
        rules: {
            handler(news, old) {
                this.datas = news;
            },
            deep: true
        }
    },
    mounted() {
        this.getRules();
    },
    methods: {
        //校验表单的数据项
        getRules() {
            if (this.formData.length > 0) {
                this.formData.forEach(item => {
                    this.rules = Object.assign({}, this.rules, {
                        [item.prop]: item.value ? item.value : ""
                    });
                });
            }
        },
        //提交
        handleSubmit(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    this.$emit("handleSubmit", this.datas);
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
</style>
