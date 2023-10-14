import { AuthEnum } from '@/common/access/authEnum'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { Notification } from '@arco-design/web-vue'

/**
 * 路由权限校验
 */
router.beforeEach(async (to) => {
  const userStore = useUserStore()

  // 若未存储已登录用户信息则尝试获取
  if (!userStore.user?.id) {
    await userStore.getLoginUserInfo()
  }

  const requiredAuth = to.meta.requiredAuth ?? AuthEnum.GUEST
  const userAuth = (userStore.user.auth as AuthEnum) ?? AuthEnum.GUEST
  if (userAuth < requiredAuth) {
    if (requiredAuth == AuthEnum.USER) {
      Notification.warning({
        title: '请登录以继续',
        content: '已自动跳转至登录页面'
      })
      return { path: '/login', query: { redirect: to.fullPath } }
    }
    Notification.error({
      title: '权限不足',
      content: '您的权限不足以访问该页面'
    })
    return { path: '/' }
  }
  document.title = ('KZOJ - ' + to.meta.title) as string
})
