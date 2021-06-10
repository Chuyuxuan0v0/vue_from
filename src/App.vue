<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :router="true" >
            <el-menu-item index="info_input">
              <i class="el-icon-menu"></i>
              <span slot="title">信息填写</span>
            </el-menu-item>
            <el-menu-item index="info_show">
              <i class="el-icon-menu"></i>
              <span slot="title">信息展示</span>
            </el-menu-item>
          </el-menu>
          </el-aside>
        <el-container>
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
.container{
  width: 100%;
  height: 700px;
}
.header {
text-align: center;
}
.footer{
  text-align: center;
}
</style>

<script>
export default {
  name: "Vue",
  data() {
    return {
      msg: "你好！",
    };
  },
};
</script>
