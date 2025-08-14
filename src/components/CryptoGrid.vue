<script setup>
import CryptoCard from './CryptoCard.vue'

const props = defineProps(['cryptoList'])
</script>

<template>
  <div class="extensions-gird js-extensions-gird">
    <CryptoCard v-for="crtpto in cryptoList" :key="crtpto.ID" :crypto-data="crtpto" />
  </div>
</template>

<style scoped>
.extensions-gird {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
}

@media (max-width: 576px) {
  .extensions-gird {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}
</style>
