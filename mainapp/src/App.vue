<template>
  <div class="home">
    <router-view v-show="$route.meta.withoutLayout"></router-view>
    <el-container v-show="!$route.meta.withoutLayout">
      <el-aside width="200px">
        <h1 class="logo">LOGO HERE</h1>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#409EFF"
          @open="handleOpen"
          @close="handleClose"
          @select="changeRouter"
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">基座应用</span>
          </el-menu-item>
          <el-menu-item index="/vue">
            <i class="el-icon-menu"></i>
            <span slot="title">app2</span>
          </el-menu-item>
          <el-menu-item index="/vue/list">
            <i class="el-icon-menu"></i>
            <span slot="title">vue/list</span>
          </el-menu-item>
          <el-menu-item index="/react">
            <i class="el-icon-document"></i>
            <span slot="title">React</span>
          </el-menu-item>
          <el-menu-item index="/react/about">
            <i class="el-icon-setting"></i>
            <span slot="title">ReactAbout</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="d-flex main-header">
          <i class="el-icon-setting"></i>
        </el-header>
        <el-main>
          <!-- {{值是什么'$route.name}} -->
          <router-view v-show="$route.name"></router-view>
          <section
            v-show="!$route.name"
            id="frame"
          ></section>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    changeRouter (path) {
      this.$router.push(path).catch((err) => {
        console.log(err)
      })
    }
  }
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
