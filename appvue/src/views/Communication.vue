<!--
 * @Author: your name
 * @Date: 2020-05-20 12:37:05
 * @LastEditTime: 2020-05-21 15:00:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /singleapp/appvue/src/views/Communication.vue
--> 
<template>
  <div class="communication">
    <p style="height:40px;line-height:40px;">子应用通信页面</p>
    <p style="height:40px;line-height:40px;">
      <a href="/react/about">去react</a>
      <el-button @click="gobackParend('/')">回首页</el-button>
      <el-button @click="gobackParend('/react')">去react</el-button>
    </p>
    <h2>登录信息：</h2>
    <ul>
      <li>islogin:{{userinfo.islogin}}</li>
      <li>username: {{userinfo.username}}</li>
      <li>randomId: {{userinfo.randomId}}</li>
    </ul>
  </div>
</template>

<script>
import actions from '../shared/actions'
import SharedModule from "@/shared"
export default {
  data() {
    return {
      userinfo: {

      },
      shared: null
    }
  },
  mounted() {
    this.shared = SharedModule.getShared()
    // 使用 shared 获取 token
    const token = this.shared.getToken()
    console.log(token, this.shared)
    if (!token) {
      this.$message.error("未检测到登录信息！")
      return this.$router.push("/")
    }

    // console.log(actions.injectRoute)
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      console.log('statebefore', state)
      this.userinfo = state
      const { islogin } = state
      if (!islogin) {
        // return this.$router.push("/")
        // actions.setGlobalState({
        //   ...state,
        //   changestate: '/login'
        // })
        // console.log('stateafter', state)
      }

    }, true)
  },
  methods: {
    gobackParend(path) {
      // 用父级路由跳转应用
      this.shared.mainAppRouterPush(path)

    }
  }
}
</script>

<style>
</style>