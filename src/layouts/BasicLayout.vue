<script lang="ts" setup>
import { AuthEnum } from '@/common/access/authEnum'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const user = userStore.user

/**
 * 导航栏
 */
const navRoutes = router.resolve({ name: 'nav' }).matched[0].children
const selectedKey = computed(() => [route.path])

// 动态显隐导航条目
const showRoutes = computed(() => {
  return navRoutes.filter(
    (navRoute) =>
      ((user.auth as AuthEnum) ?? AuthEnum.GUEST) >= (navRoute.meta?.requiredAuth ?? AuthEnum.GUEST)
  )
})

const onMenuItemClick = (key: string) => {
  router.push({ path: key })
}

/**
 * 用户
 */
const onLogout = () => {
  localStorage.removeItem('token')
  location.reload()
}
</script>

<template>
  <div id="global-header">
    <a-row :wrap="false" align="center">
      <!-- 左侧信息 -->
      <a-col flex="auto">
        <!-- 导航菜单 -->
        <a-menu :selected-keys="selectedKey" mode="horizontal" @menuItemClick="onMenuItemClick">
          <!-- Logo -->
          <a-menu-item key="/">
            <a-image :preview="false" height="32px" src="/logo.svg" />
          </a-menu-item>
          <!-- 菜单项 -->
          <a-menu-item v-for="route in showRoutes" :key="route.path">
            {{ route.meta?.title }}
          </a-menu-item>
        </a-menu>
      </a-col>

      <!-- 右侧信息 -->
      <a-col flex="64px">
        <!-- 用户头像 (已登录) -->
        <a-popover v-if="user.id" :title="user.username" position="br" trigger="click">
          <!-- 信息展示 -->
          <template #content>
            <a-button long size="large" type="outline">
              <template #icon>
                <icon-user />
              </template>
              个人主页
            </a-button>

            <a-divider margin="8px" />

            <a-button long size="large" status="danger" @click="onLogout">
              <template #icon>
                <icon-export />
              </template>
              退出登录
            </a-button>
          </template>

          <!-- 头像展示 -->
          <a-avatar style="cursor: pointer">
            <img
              v-if="userStore.user.avatarUrl"
              :src="userStore.user.avatarUrl"
              alt=""
              style="object-fit: cover"
            />
            <icon-user v-else />
          </a-avatar>
        </a-popover>

        <!-- 用户头像 (未登录) -->
        <a-tooltip v-else content="未登录" mini>
          <a-avatar
            style="cursor: pointer"
            @click="router.push({ path: '/login', query: { redirect: route.fullPath } })"
          >
            <icon-user />
          </a-avatar>
        </a-tooltip>
      </a-col>
    </a-row>
  </div>
</template>
