<script setup>
import { useFilterStore } from '@/Stores/filterStore'
const store = useFilterStore()
</script>

<template>
  <div class="activity-filter-container">
    <div
      v-for="type in store.filters"
      @click="store.changeFilter(type.value)"
      class="filter-item"
      :class="store.getCurrentFilter() === type.value ? 'active' : ''"
    >
      {{ type.name }}
    </div>
  </div>
</template>

<style scoped>
.activity-filter-container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.filter-item {
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
