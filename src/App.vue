<template>
  <el-container style="height: 100vh">
    <el-header style="padding: 0 0">
      <div style="width: auto">
        <el-menu
          :default-active="0"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#83cbac"
        >
          <el-menu-item index="1">
            <router-link to="/">主页</router-link>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title
              ><router-link to="/Regist">注册</router-link></template
            >
            <el-menu-item index="2-1">
              <router-link to="/Guid">指导文件查看</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              111
            </el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
          <el-sub-menu index="5" popper-append-to-body="true">
            <template #title
              ><router-link to="/Regist">我</router-link></template
            >
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item two</el-menu-item>
            <el-menu-item index="5-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </el-header>
    <el-container style="height: auto">
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="0"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              style="background-color: #ffffff"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
  width: 100%;
}

.el-footer {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 50px;
}

.el-aside {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
  height: auto;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  height: auto;
  width: auto;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

<script lang="ts" setup>
/* Header导航标签 */

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

/* aside导航标签 */
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  ArrowDown,
} from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
