<script setup>
import { onMounted, ref } from 'vue'
// import { getCryptos, getTopList } from '@/composables/useCryptos'
import { getCrtpyos } from '@/assets/api/cryptoService'
import Navbar from '@/components/Navbar.vue'
import ActivityFilter from '@/components/ActivityFilter.vue'
import CryptoGrid from '@/components/CryptoGrid.vue'
import FooterDisclaimer from '@/components/FooterDisclaimer.vue'

const cryptoList = ref([])
const loading = ref(false)
const error = ref(null)

const fetchCrypro = async () => {
  loading.value = true
  try {
    let result = await getCrtpyos()
    cryptoList.value = result.Data.LIST
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(fetchCrypro)

const filter = {}

function activityfilter(activityType) {
  // filter.activityFilter = activityType
  // cryptoList.value = getCryptos(filter)
}

function search(query) {
  // filter.search = query
  // cryptoList.value = getCryptos(filter)
}
</script>

<template>
  <main>
    <header>
      <Navbar @search="(query) => search(query)" />
    </header>

    <section class="main-section">
      <div class="main-header">
        <h1 class="header-title">Crypto Currency</h1>

        <div class="filter">
          <ActivityFilter v-on:activty-filter="(value) => activityfilter(value)" />
        </div>
      </div>

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <CryptoGrid v-if="cryptoList" :crypto-list="cryptoList" />
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
