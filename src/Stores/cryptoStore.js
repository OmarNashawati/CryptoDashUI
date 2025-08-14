import { defineStore } from 'pinia'
import { getTopListCrtpro, searchCrypto, getFavoriteCryptos } from '@/assets/api/cryptoService'
import { ref } from 'vue'
import { useFilterStore } from '@/Stores/filterStore'
import { useUserStore } from '@/Stores/userStore'

export const useCrytproStore = defineStore('crtpro', () => {
  const userStore = useUserStore()
  const filterstore = useFilterStore()

  const cryptoList = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchCrypro = async () => {
    loading.value = true
    try {
      if (filterstore.getCurrentFilter() === 'all') cryptoList.value = await getTopListCrtpro()
      else {
        cryptoList.value = await getFavoriteCryptos(userStore.favorite)
      }
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const search = async (query) => {
    if (query) {
      loading.value = true
      try {
        cryptoList.value = await searchCrypto(query)
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    } else {
      fetchCrypro()
    }
  }

  return {
    cryptoList,
    loading,
    error,
    fetchCrypro,
    search,
  }
})
