import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  let favorite = ref([])

  function addToFavorite(id) {
    favorite.value.push(id)
  }

  const removeFromFavorite = (id) => {
    let newFav = favorite.value.filter((i) => i !== id)

    favorite.value = newFav
  }

  return { favorite, addToFavorite, removeFromFavorite }
})
