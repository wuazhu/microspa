<template>
  <div
    id="app"
    class="page-vue"
  >
    <div id="nav">
      <!-- <p style="height:40px;line-height:40px;">from app.vue</p> -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item index="/">App1首页</el-menu-item>
        <el-menu-item index="/list">App1列表</el-menu-item>
        <el-menu-item index="/communication">父子应用通信</el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      // this.$router.push(key)
    }
  }
}
</script>
<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-item {
  a {
    text-decoration: none;
  }
}
</style>
