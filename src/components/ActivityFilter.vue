<script setup>
  import { ref } from 'vue';

  const currentFilter = ref('all');

  const props = defineProps(['currentFilter']);
  const emit = defineEmits(['activty-filter']);

  const filter = (filterValue) => {
    currentFilter.value = filterValue;
    emit('activty-filter', filterValue);
  }

</script>

<template>
  <ul class="filter-items">
    <li 
      @click="filter('all')" 
      class="js-filter-item filter-item" 
      :class="currentFilter==='all'?'active':''"
    >All</li>
    <li 
      @click="filter('active')" 
      class="js-filter-item filter-item" 
      :class="currentFilter==='active'?'active':''"
    >Active</li>
    <li 
      @click="filter('inactive')" 
      class="js-filter-item filter-item" 
      :class="currentFilter==='inactive'?'active':''"
    >Inactive</li>
  </ul>
</template>

<style scoped>
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