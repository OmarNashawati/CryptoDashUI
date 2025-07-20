<script setup>
  import { ref } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import ActivityFilter from '@/components/ActivityFilter.vue';
  import CryptoGrid from '@/components/CryptoGrid.vue';
  import { getCryptos } from '@/composables/useCryptos';

  const cryptoList = ref(getCryptos());
  const cryptoFilter = {};
  
  function filter(filterValue) {
    cryptoFilter.filter = {
      filterType: 'activeCryptos',
      value: filterValue,
    }
    
    updateList();
  }
  
  function search(query) {
    cryptoFilter.search = {
      query
    }

    updateList();
  }

  function updateList() {
    cryptoList.value = getCryptos(cryptoFilter);
  }
</script>

<template>
  <header>
    <Navbar @search="q => search(q)"/>
  </header>

  <main>
    <div class="main-header">
      <h1 class="header-title">Crypto Currency</h1>

      <div class="filter">
        <ActivityFilter 
          v-on:activty-filter="(value) => filter(value)"
        />
      </div>
    </div>

     <CryptoGrid :crypto-list="cryptoList"/>
  </main>
</template>

<style scoped>
  header,
  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem 1rem;
  }

  .main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem ;
  }

  @media(max-width: 576px) {
    .main-header {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>
