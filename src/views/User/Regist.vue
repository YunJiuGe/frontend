<template>
  <div class="app">
    <el-form
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="large"
      :status-icon="true"
      style="width: 500px;"
    >
      <el-form-item label="账户" prop="account">
        <div class="left">
          <el-input
            v-model="form.account"
            style="width: 300px"
            placeholder="please input your Account"
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <div class="left">
          <el-input
            v-model="form.password"
            style="width: 300px"
            type="password"
            placeholder="please input your Password"
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <div class="left">
          <el-input
            v-model="form.name"
            style="width: 300px"
            placeholder="please input your Name"
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <div class="left">
          <el-select v-model="form.sex" placeholder="please select your sex" style="width: 300px">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-col :span="11">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="Pick your Birthday"
            style="width: 300px"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="婚否">
        <div class="left">
          <el-switch v-model="form.marriage"></el-switch>
        </div>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <div class="left">
          <el-input
            v-model="form.phone"
            style="width: 300px"
            type="phone"
            placeholder="please input your Phone"
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <div class="left">
          <el-input
            v-model="form.email"
            style="width: 300px"
            type="email"
            placeholder="please input your E-mail"
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <div style="margin-left: -120px;">
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Create</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";
import { resetForm, submitForm } from "../common/ts/utils";
import {post} from "@/api/api"

const ruleFormRef = ref<InstanceType<typeof ElForm>>()

const validatePhone = (rule: any, value: any, callback: any) => {
  var phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
  if (value === "") {
    callback(new Error("Please input the phone"));
  } else if (!phoneReg.test(value)) {
    console.log(!phoneReg.test(value));
    callback(new Error("Please input right phone"));
  } else {
    if (form.phone !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("phone", () => null);
    }
    callback();
  }
};

// do not use same name with ref
const form = reactive({
  account: "",
  password: "",
  name: "",
  sex: "",
  birthday: "",
  marriage: false,
  phone: "",
  email: "",
});

const rules = reactive({
  account: [
    {
      type: "string",
      required: true,
      message: "Please input Account",
      trigger: "blur",
    },
    {
      min: 6,
      max: 10,
      message: "Length should be 6 to 10",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input Password",
      trigger: "blur",
    },
    {
      min: 8,
      max: 12,
      message: "Length should be 8 to 12",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "Please input name",
      trigger: "blur",
    },
    {
      min: 2,
      max: 4,
      message: "Length should be 2 to 4",
      trigger: "blur",
    },
  ],
  sex: [
    {
      required: true,
      message: "Please selected a sex",
      trigger: ["blur", "change"],
    },
  ],
  birthday: [
    {
      type: "date",
      required: true,
      message: "Please pick your Birthday",
      trigger: ["blur", "change"],
    },
  ],
  phone: [
    {
      required: true,
      trigger: "blur",
      validator: validatePhone,
    },
  ],
  email: [
    {
      required: true,
      message: "Please input e-mail",
      trigger: ["change", "blur"],
    },
    {
      type: "email",
      message: "Please input right e-mail",
      trigger: ["change", "blur"],
    },
  ],
});

const onSubmit = () => {
  console.log(form)
  submitForm(ruleFormRef.value)
  post()
};
</script>

<style lang='scss'>
.left {
  text-align: left;
}
.app {
  display: inline-block;
}
</style>
