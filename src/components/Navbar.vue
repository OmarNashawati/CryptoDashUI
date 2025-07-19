<script setup>
  import { ref, watch } from 'vue';

  const emit = defineEmits(['search']) 
  const searchQuery = '';

  const UI_Theme = ref(getSavedTheme());  

  function changeUiTheme () {
    const newTheme = UI_Theme.value === 'dark' ? 'light' : 'dark';
    UI_Theme.value = newTheme;
  }
  
  function getSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
      return savedTheme;
    }else{
      return 'dark';
    }
  }

  watch(UI_Theme, () => {    
    document.documentElement.setAttribute('data-theme', UI_Theme.value);
    localStorage.setItem('theme', UI_Theme.value);
  })
</script>

<template>
  <div class="header-wrapper">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="Logo">
    </div>

    <div class="search-wrapper">
      <button class="search-button">
        <i class="pi pi-search"></i>
      </button>
      <input 
        @input="emit('search', searchQuery)" 
        v-model="searchQuery"
        class="search-input" 
        type="text" placeholder="Bitcoin, BTC">
    </div>

    <div @click="changeUiTheme()" class="theme-switch js-dark-mode-toggle">
      <i class="pi" :class="UI_Theme === 'dark' ? 'pi-sun' : 'pi-moon' "></i>
    </div>
  </div>
</template>

<style scoped>

.search-wrapper {
  padding: 8px 12px;
  background-color: var(--surface-muted);
  border-radius: 0.5rem ;
  display: flex;
  gap: 10px;
  height: 40px; 
}

.search-button,
.search-input {
  background: none;
  border: none;
  outline: none;
}

.header-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface);
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.theme-switch{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface-muted);
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  cursor: pointer;
}

</style>
