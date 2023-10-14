import { queryMyAccount } from '@/api/user'
import type { User } from '@/models/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {} as User
  }),
  actions: {
    setUserInfo(user: User) {
      this.user = user
    },
    async getLoginUserInfo() {
      if (localStorage.getItem('token')) {
        const resp = await queryMyAccount()
        this.user = resp.data.data
      }
    }
  }
})
