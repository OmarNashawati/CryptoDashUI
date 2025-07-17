<script setup>
  import Navbar from '@/components/Navbar.vue';
  import CryptoGrid from '@/components/CryptoGrid.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
     <CryptoGrid />
  </main>
</template>

<style scoped>
  header,
  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem 1rem;
  }
</style>
