import {
  defineStore
} from 'pinia'

export const sysStore = defineStore({
  id: 'sysInfo',
  state: () => ({
    isMobile: window.innerWidth <= 800
  }),
  actions: {
    update(isMobile) {
      this.$patch({
        isMobile
      })
    },
  },
})