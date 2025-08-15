<script setup>
import Navbar from '@/components/Navbar.vue'
import Filter from '@/components/Filter.vue'
import CryptoGrid from '@/components/CryptoGrid.vue'
import FooterDisclaimer from '@/components/FooterDisclaimer.vue'

import { useCrytproStore } from '@/Stores/cryptoStore'
import { onMounted } from 'vue'
const apiBase = import.meta.env.VITE_API_URL_2
console.log(apiBase)

const cryptoStore = useCrytproStore()

onMounted(() => cryptoStore.fetchCrypro())
</script>

<template>
  <main>
    <header>
      <Navbar />
    </header>

    <section class="main-section">
      <div class="main-header">
        <h1 class="header-title">Crypto Currency</h1>
        <div class="filter">
          <Filter />
        </div>
      </div>

      <div>
        <div v-if="cryptoStore.loading">Loading...</div>
        <div v-else-if="cryptoStore.error">{{ cryptoStore.error }}</div>
        <div v-else-if="cryptoStore.cryptoList.length === 0">No Items</div>
        <div v-else>
          <CryptoGrid v-if="cryptoStore.cryptoList" :crypto-list="cryptoStore.cryptoList" />
        </div>
      </div>
    </section>

    <footer>
      <FooterDisclaimer />
    </footer>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 60px;
}

header,
.main-section {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 1rem;
}

.main-section {
  flex: 1 1 auto;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
}

@media (max-width: 576px) {
  .main-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}

footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
