import { defineStore } from 'pinia'
import * as moduleService from '../service/weddingService'

export const useModuleStore = defineStore('module', {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  actions: {
    async stAll() {
      try {
        this.loading = true
        this.items = await moduleService.sAll()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})