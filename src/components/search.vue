<template>
    <el-row class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
            <el-form-item
                v-for="(item,index) in formData"
                :key="index"
                :label="item.type!=='button'&&(item.label&&item.label)"
            >
                <template v-if="item.type==='input'">
                    <el-input v-model="item.value" :placeholder="item.placeholder" />
                </template>
                <template v-if="item.type==='select'">
                    <el-select v-model="item.value" :placeholder="item.placeholder">
                        <el-option
                            v-for="option in item.options"
                            :key="option.value"
                            :label="option.label"
                            :value="option.value"
                        ></el-option>
                    </el-select>
                </template>
                <template v-if="item.type==='date'">
                    <el-date-picker
                        v-model="item.value"
                        type="date"
                        :placeholder="item.placeholder"
                        value-format="yyyy-MM-dd"
                    />
                </template>
                <template v-if="item.type==='daterange'">
                    <el-date-picker
                        v-model="item.value"
                        type="daterange"
                        range-separator="-"
                        :start-placeholder="item.startPlaceholder?item.startPlaceholder:'开始日期'"
                        :end-placeholder="item.endPlaceholder?item.endPlaceholder:'结束日期'"
                        value-format="yyyy-MM-dd"
                    />
                </template>
                <template v-if="item.type==='button'">
                    <el-button :type="item.class" @click="item.onlick(formData)">{{item.label}}</el-button>
                </template>
            </el-form-item>
        </el-form>
    </el-row>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: ["formData"],
    mounted() {},
    methods: {}
};
</script>

<style scoped lang="scss">
</style>
