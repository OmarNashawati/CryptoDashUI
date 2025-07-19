<script setup>
  import Navbar from '@/components/Navbar.vue';
  import CryptoGrid from '@/components/CryptoGrid.vue';
  import { getCryptos } from '@/composables/useCryptos';
  import { ref } from 'vue';

  const cryptoList = ref(getCryptos());
  const currentFilter = ref('all');

  function filter(filter) {
    currentFilter.value = filter;
    if(filter === 'all'){
      cryptoList.value = getCryptos();
    }else if(filter === 'active'){
      cryptoList.value = getCryptos().filter(c => c.isActive);
    }else{
      cryptoList.value = getCryptos().filter(c => !c.isActive);
    }
  }

  function search(query) {
    // const regex = /(?i:).*shirt.*/i;
    const regex = createWholeWordRegex(query);
    const searchResult =  getCryptos().filter(c => c.name.match(regex) || c.symbol.match(regex));
    cryptoList.value = searchResult;
  }

  function createWholeWordRegex(keyword) {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(?i:).*${keyword}.*`, 'i');
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
        <ul class="filter-items">
          <li @click="filter('all')" class="js-filter-item filter-item" :class="currentFilter==='all'?'active':''">All</li>
          <li @click="filter('active')" class="js-filter-item filter-item" :class="currentFilter==='active'?'active':''">Active</li>
          <li @click="filter('inactive')" class="js-filter-item filter-item" :class="currentFilter==='inactive'?'active':''">Inactive</li>
        </ul>
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

  /* ######################### MAIN ############################ */
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

  .filter-items {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .filter-item{
    background-color: var(--surface);
    padding: 8px 24px;
    border-radius: 25px;
    font-size: 0.8rem;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .active {
    background-color: var(--red-700);
    color: var(--neutral-50);
  }
</style>
