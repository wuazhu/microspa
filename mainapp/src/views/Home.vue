<template>
  <div class="home">Home Page</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
}
</script>

<style>
.home .logo {
  height: 50px;
  padding: 5px 10px;
  line-height: 50px;
  font-weight: 900;
  text-indent: 1em;
  color: #fff;
  background-color: #041d36;
}

.home .el-menu {
  border-right: none;
}
.el-aside {
  background-color: #001529;
}
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #dce6f1;
}
.el-header i {
  line-height: 60px;
}
/* .el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
} */

.el-aside {
  color: #222;
  text-align: left;
  height: 100vh;
  /* border-right: 1px solid #d7dae2; */
  box-shadow: rgba(0, 0, 0, 0.12) 2px 0px 14px 5px;
  overflow-y: auto;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
