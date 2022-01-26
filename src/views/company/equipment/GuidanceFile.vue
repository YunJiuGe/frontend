<template>
  <div style="height:100%">
    <el-row style="background-color: #999999">
      <el-page-header
        :icon="ArrowLeft.value"
        content="指导文件查看"
        @back="goBack"
      />
    </el-row>
    <el-row style="background-color: #aaaaaa">
      <el-col :span="4"> </el-col>
      <el-col :span="18">
        <el-input v-model="form.name" placeholder="请输入设备名称"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-search"  @click="query()" style="width:100%" size="large"></el-button>
      </el-col>
    </el-row>
    <el-row style="height:80%">
      <el-col :span="24">
        <el-table
          ref="singleTableRef"
          :data="tableData"
          highlight-current-row
          style="width: 100%"
          @current-change="handleCurrentChange"
          border
          height="100%"
        >
          <el-table-column property="name" label="设备名称" width="auto" />
          <el-table-column property="fileName" label="文件名称" width="auto" />
          <el-table-column property="fileType" label="文件类型" width="auto" />
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width: auto" :span="24">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width: auto;padding:0 5px" :span="24">
        <div style="float: right">
          <el-button type="primary" @click="preview()">预览</el-button>
          <el-button type="primary" @click="downFile()">下载</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { Search, ArrowLeft } from "@element-plus/icons-vue";
import type { ElTable } from "element-plus";

const currentRow = ref();
const singleTableRef = ref<InstanceType<typeof ElTable>>();

const form = reactive({
  name: "",
});

const tableData = ref([{
      name: "清洗机",
      fileName: "清洗机维修指南",
      fileType: "PDF",
    },]);

const handleCurrentChange = (val: any) => {
  currentRow.value = val;
  console.log(val);
};

const goBack = () => {
  console.log("go back");
};

const query = () => {
  console.log("查找" + form.name);
  tableData.value = [
    {
      name: "清洗机",
      fileName: "清洗机维修指南",
      fileType: "PDF",
    },
    {
      name: "缸体机床",
      fileName: "缸体机床修指南",
      fileType: "PDF",
    },
    {
      name: "缸盖机床",
      fileName: "缸盖机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
    {
      name: "连杆机床",
      fileName: "连杆机床修指南",
      fileType: "PDF",
    },
  ];
};

const preview = () => {
  console.log(currentRow.value);
};

const downFile = () => {
  console.log(currentRow.value);
};
</script>

<style  lang="scss" scoped>
.header {
  float: left;
}

.main {
  text-align: center;
}
</style>