<script setup>
import { ref } from 'vue'

const activityTypes = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Active',
    value: 'active',
  },
  {
    name: 'Inactive',
    value: 'inactive',
  },
]

const currentFilter = ref(activityTypes[0].value)
const emit = defineEmits(['activty-filter'])

function filter(newValue) {
  currentFilter.value = newValue
  emit('activty-filter', newValue)
}
</script>

<template>
  <div class="activity-filter-container">
    <div
      v-for="type in activityTypes"
      @click="filter(type.value)"
      class="filter-item"
      :class="currentFilter === type.value ? 'active' : ''"
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
