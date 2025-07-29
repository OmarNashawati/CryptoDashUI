<script setup>
import { ref, useTemplateRef } from 'vue'
import { getTheme, applayTheme, changeTheme } from '@/composables/useTheme'

const emit = defineEmits(['search'])
const searchQuery = ''
const searchInputEle = useTemplateRef('search-input-element')

function expandSearch() {
  const currentState = searchInputEle.value.style.display
  if (currentState === 'block') {
    searchInputEle.value.style.display = 'none'
  } else {
    searchInputEle.value.style.display = 'block'
  }
}

const UI_Theme = ref(getTheme())
applayTheme(UI_Theme.value)

function changeUiTheme() {
  UI_Theme.value = changeTheme()
}
</script>

<template>
  <div class="header-wrapper">
    <div class="logo">
      <img v-if="UI_Theme === 'dark'" src="../assets/images/logo-dark-theme.svg" alt="Logo" />
      <img v-else src="../assets/images/logo.svg" alt="Logo" />
    </div>

    <div class="right-section">
      <div class="search-wrapper">
        <input
          ref="search-input-element"
          @input="emit('search', searchQuery)"
          v-model="searchQuery"
          class="search-input"
          type="text"
          placeholder="Bitcoin, BTC"
        />

        <button @click="expandSearch()" class="search-button">
          <i class="pi pi-search"></i>
        </button>
      </div>

      <div @click="changeUiTheme()" class="theme-switch js-dark-mode-toggle">
        <i class="pi" :class="UI_Theme === 'dark' ? 'pi-sun' : 'pi-moon'"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-section {
  display: flex;
  gap: 10px;
}

.search-wrapper {
  background-color: var(--surface-muted);
  border-radius: 0.5rem;
  display: flex;
  gap: 10px;
  height: 40px;
}
.search-button {
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  cursor: pointer;
}

.search-input {
  padding: 0 12px;
  color: var(--text);
}
.search-button,
.search-input {
  background: none;
  border: none;
  outline: none;
}

::placeholder {
  color: var(--text-muted);
}

@media (max-width: 576px) {
  .search-wrapper {
    background-color: var(--surface-muted);
    border-radius: 0.5rem;
    display: flex;
    gap: 10px;
    height: 40px;
  }
  .search-input {
    display: none;
  }
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: var(--surface);
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.theme-switch {
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
