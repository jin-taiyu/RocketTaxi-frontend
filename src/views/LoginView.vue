<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

/**
 * 登录表单项
 */
const username = reactive({
  value: '',
  valid: false
})
const password = reactive({
  value: '',
  valid: false
})

/**
 * 登录
 */
const loginLoading = ref(false)
const onLogin = () => {
  loginLoading.value = true

  loginByUsernamePassword(username.value, password.value)
    .then((resp) => {
      console.log(resp.data)

      let user = { id: '000000', username: 'test', avatarUrl: '', phone: '', email: '', auth: 1 }
      userStore.setUserInfo(user)
      //localStorage.setItem('token', token)

      const redirectPath = route.query.redirect as string
      console.log(redirectPath)
      router.push({ path: redirectPath ?? '/home', replace: true })
    })
    .finally(() => (loginLoading.value = false))
}
</script>

<template>
  <div id="login">
    <a-row align="center" justify="center" style="height: 95vh">
      <a-card class="card">
        <!-- Logo -->
        <a-row justify="center">
          <img alt="" src="/logo.svg" style="width: 50%" />
        </a-row>
        <a-space direction="vertical" fill size="medium" style="display: flex; justify-content: center; align-items: center;">
          <img src="/logo.png" style="width: 200px; margin: 0 auto; text-align: center" />
          <!-- 用户名 -->
          <a-input
            v-model="username.value"
            allow-clear
            placeholder="请输入您的用户名"
            size="large"
            @input="username.valid = username.value.length > 0"
          >
          <template #prefix>
            <icon-user />
            </template>
          </a-input>
          <!-- 密码 -->
          <a-input
            v-model="password.value"
            placeholder="请输入您的密码"
            size="large"
            @input="password.valid = password.value.length > 0"
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input>
          <!-- 登录按钮 -->
          <a-button
            :disabled="!username.valid || !password.valid"
            :loading="loginLoading"
            long
            size="large"
            type="primary"
            @click="onLogin"
          >
            登录 / 注册
          </a-button>
        </a-space>
      </a-card>
    </a-row>
  </div>
</template>

<style scoped>
#login {
  height: 100vh;
  background-color: var(--color-fill-1);
}

#login .card {
  width: 400px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 0 16px var(--color-fill-3);
}
</style>
