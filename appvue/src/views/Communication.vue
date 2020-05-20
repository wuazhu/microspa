<template>
  <div class="communication">
    <p style="height:40px;line-height:40px;">子应用通信页面</p>
    <p style="height:40px;line-height:40px;">
      <a href="/react/about">去react</a>
      <el-button @click="gobackParend">react</el-button>
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
export default {
  data() {
    return {
      userinfo: {

      }
    }
  },
  mounted() {
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
    gobackParend() {
      console.log(actions.injectRoute)

    }
  }
}
</script>

<style>
</style>