import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCrytproStore } from './cryptoStore'

export const useFilterStore = defineStore('filter', () => {
  const store = useCrytproStore()

  const filters = [
    {
      name: 'All',
      value: 'all',
    },
    {
      name: 'Favorite',
      value: 'active',
    },
  ]

  const currentFilter = ref(filters[0].value)

  const getCurrentFilter = () => {
    return currentFilter.value
  }

  const changeFilter = (val) => {
    currentFilter.value = val
    store.fetchCrypro()
  }

  return { filters, getCurrentFilter, changeFilter }
})
