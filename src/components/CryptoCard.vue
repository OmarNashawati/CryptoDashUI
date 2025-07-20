<script setup>
  import { formatMoney } from '@/composables/useMoney';

  const props = defineProps(['cryptoData']);

  
</script>

<template>
  <div class="currency-card">
    <div class="card-body">
      <div class="currency-icon">
        <!-- <img :src="imgUrls[`../assets/images/icons/${cryptoData.icon}`]" :alt="cryptoData.symbol"> -->
        <img :src="cryptoData.icon" :alt="cryptoData.symbol">
      </div>
      <div>
        <h3 class="currency-name">
            {{ cryptoData.name }}
            <i class="currency-symbol">({{ cryptoData.symbol }})</i>
        </h3>
        <p class="currency-price">{{ formatMoney(cryptoData.price) }}</p>
        <p 
          class="currency-change24h" 
          :class="cryptoData.change24h>0? 'text--green': cryptoData.change24h < 0 ?'text--red' : ''"
        >
          <i class="pi" :class="cryptoData.change24h > 0 ? 'pi-sort-up-fill': cryptoData.change24h < 0 ?  'pi-sort-down-fill' : 'pi-equals'"></i>
          {{ cryptoData.change24h }}%</p>
      </div>
    </div>
    <div class="currency-actions">
      <label class="switch">
        <input type="checkbox" :checked="cryptoData.isActive">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<style scoped>


.currency-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--surface-muted);
  gap: 1.5rem;
  background-color: var(--surface);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.currency-icon{
  width: 60px;
  height: 60px;
  
}
.card-body{
  display: flex;
  height: 100px;
  gap: 10px;
}

.currency-price{
  font-weight: bold;
  font-size: 1.5rem;
}

.currency-symbol {
  font-size: 0.8rem;
  font-style: normal;
}

.currency-change24h .pi{
  font-size: 0.7rem;
}
.currency-actions{
  display: flex;
  align-items: center;
  justify-content: end;
}

.btn-remove{
  background: transparent;
  border: 1px solid var(--surface-muted);
  padding: 8px 12px;
  border-radius: 25px;
  color: var(--text);
}

/* ########### SWITCH ############# */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--red-700);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--red-700);
}

input:checked + .slider:before {
  -webkit-transform:  translateX(24px);
  -ms-transform:  translateX(24px);
  transform: translateX(24px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
