<script setup>
  import CryptoCard from './CryptoCard.vue';
  import { getCryptos } from '@/composables/useCryptos';

</script>

<template>
  <div class="extensions-gird js-extensions-gird">
    <CryptoCard v-for="crtpto in getCryptos()" :key="crtpto.id" :crypto-data="crtpto"/>
  </div>
</template>

<style scoped>
.extensions-gird {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 5px;
}

@media(max-width: 576px) {
 .extensions-gird {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

}
</style>
