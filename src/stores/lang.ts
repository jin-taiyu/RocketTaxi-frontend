import { defineStore } from 'pinia'

export const useLangStore = defineStore('langStore', {
  state: () => ({
    lang: 'C'
  }),
  actions: {
    switchLang(lang: string) {
      this.lang = lang
    }
  }
})
