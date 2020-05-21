<template>
  <div class="login">
    <div class="login-box">
      <h1 class="text-center login-logo">
        <img
          src="../assets/images/dino.png"
          alt
          class="logoimg"
        />
      </h1>
      <el-form
        label-position="top"
        label-width="80px"
        :model="loginForm"
      >
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          class="no-margin"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-col
            :span="24"
            class="text-right"
          >
            <el-link type="primary">忘记密码</el-link>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="block"
            @click="login"
            :loading="loading"
          >登录</el-button>
          <el-button
            type="primary"
            class="block"
            @click="loginByShared"
            :loading="loading"
          >登录loginByShared</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import actions from '@/shared/actions'
import shared from '@/shared/index'
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'password'
      },
      loading: false,
    }
  },
  mounted() {
    // 注册观察者
    actions.onGlobalStateChange((state, prevState) => {
      console.log('主应用观察者， 改变前的值为：', prevState)
      console.log('主应用观察者， 改变后的值为：', state)
    })
  },
  methods: {
    async loginByShared() {
      this.loading = true
      // const token = 'istoken'
      shared.setToken({
        islogin: true,
        randomId: Math.random(),
        username: this.loginForm.username,
        password: this.loginForm.password,
        changestate: ''
      })
      this.loading = false
      this.$router.push('/')
    },
    async login() {
      this.loading = true
      // console.log(params)
      setTimeout(() => {
        const state = {
          islogin: true,
          randomId: Math.random(),
          username: this.loginForm.username,
          password: this.loginForm.password,
          changestate: ''
        }

        actions.setGlobalState(state)
        this.loading = false
        this.$router.push('/')
      }, 2000)
    }
  }

}
</script>
