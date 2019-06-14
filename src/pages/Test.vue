<template>
  <div class="test">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" v-permission="['002']">操作</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import permission from "@/directive/permission.js"; // 权限判断指令

export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };

    return {
      tableData: Array(20).fill(item),
      formInline: {
        user: "",
        region: ""
      }
    };
  },

  components: {},

  directives: { permission },

  computed: {},

  methods: {
    onSubmit() {
      // eslint-disable-next-line
      console.log("submit!");
    }
  }
};
</script>

<style>
.test {
}
</style>
