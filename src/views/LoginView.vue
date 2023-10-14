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
const phone = reactive({
  value: '',
  valid: false
})
const code = reactive({
  value: '',
  valid: false,
  cooling: false,
  coolingTime: 60
})

/**
 * 验证码
 */
const onSendCode = () => {
  sendVerificationCode(phone.value).then(() => {
    setCodeCooling()
  })
}
const setCodeCooling = () => {
  code.cooling = true
  let timer = setInterval(() => {
    code.coolingTime--
    if (code.coolingTime === 0) {
      code.coolingTime = 60
      code.cooling = false
      clearInterval(timer)
    }
  }, 1000)
}

/**
 * 登录
 */
const loginLoading = ref(false)
const onLogin = () => {
  loginLoading.value = true

  loginByCode(phone.value, code.value)
    .then((resp) => {
      console.log(resp.data)

      let user = { id: '000000', username: 'test', avatarUrl: '', phone: '', email: '', auth: 1 }
      userStore.setUserInfo(user)
      //localStorage.setItem('token', token)

      const redirectPath = route.query.redirect as string
      console.log(redirectPath)
      router.push({ path: redirectPath ?? '/home', replace: true })
      /*
      let { user, token } = resp.data.data
      userStore.setUserInfo(user)
      localStorage.setItem('token', token)

      const redirectPath = route.query.redirect as string
      router.push({ path: redirectPath ?? '/', replace: true })
      */
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
        <a-space direction="vertical" fill size="medium">
          <h1 style="text-align: center">KZOJ</h1>
          <!-- 手机号 -->
          <a-input
            v-model="phone.value"
            allow-clear
            placeholder="请输入您的手机号"
            size="large"
            @input="phone.valid = /^1[3-9]\d{9}$/.test(phone.value)"
          >
            <template #prepend>+86</template>
          </a-input>
          <!-- 验证码 -->
          <a-row :gutter="16">
            <a-col :flex="2">
              <a-input
                v-model="code.value"
                placeholder="请输入您的验证码"
                size="large"
                @input="code.valid = /^\d{6}$/.test(code.value)"
              >
                <template #prefix>
                  <icon-email />
                </template>
              </a-input>
            </a-col>
            <a-col :flex="1">
              <a-button
                :disabled="code.cooling || !phone.valid"
                long
                size="large"
                type="outline"
                @click="onSendCode"
              >
                {{ code.cooling ? `重新发送 (${code.coolingTime})` : '获取验证码' }}
              </a-button>
            </a-col>
          </a-row>
          <!-- 登录按钮 -->
          <a-button
            :disabled="!phone.valid || !code.valid"
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
