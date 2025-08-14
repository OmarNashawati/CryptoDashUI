<script setup>
import { formatMoney, formatNumber } from '@/composables/useMoney'
import { useUserStore } from '@/Stores/userStore'
import { ref } from 'vue'
const store = useUserStore()

const props = defineProps(['cryptoData'])
const change24hStateStyle = {}

if (props.cryptoData.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD > 0) {
  change24hStateStyle.textColor = 'text--green'
  change24hStateStyle.icon = 'pi-sort-up-fill'
} else if (props.cryptoData.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD < 0) {
  change24hStateStyle.textColor = 'text--red'
  change24hStateStyle.icon = 'pi-sort-down-fill'
} else {
  change24hStateStyle.textColor = ''
  change24hStateStyle.icon = 'pi-equals'
}

const isInFav = ref(store.favorite.includes(props.cryptoData.ID))

function addToFavorite(id) {
  if (!isInFav.value) {
    store.addToFavorite(id)
    isInFav.value = true
  } else {
    let isConfirmed = confirm('Do you sure you want to remove item from favorite')
    if (isConfirmed) {
      isInFav.value = false
      store.removeFromFavorite(id)
    }
  }
}
</script>

<template>
  <div class="currency-card">
    <div class="card-head">
      <div class="currency-icon">
        <img :src="cryptoData.LOGO_URL" :alt="cryptoData.SYMBOL" />
      </div>
      <div @click="addToFavorite(cryptoData.ID)" class="add-to-favorie">
        <i class="pi" :class="isInFav ? 'pi-check' : 'pi-plus'"></i>
      </div>
    </div>
    <div class="card-body">
      <div>
        <h3 class="currency-name">
          {{ cryptoData.NAME }}
          <i class="currency-symbol">({{ cryptoData.SYMBOL }})</i>
        </h3>

        <p class="currency-price">{{ formatMoney(cryptoData.PRICE_USD) }}</p>

        <div class="currency-info-item">
          24h Change:
          <i class="currency-info-item-value" :class="change24hStateStyle.textColor">
            {{ formatNumber(cryptoData.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD) }}%
            <i class="pi" :class="change24hStateStyle.icon"></i>
          </i>
        </div>

        <div class="currency-info-item">
          Market cap:
          <i class="currency-info-item-value">
            {{ formatMoney(cryptoData.CIRCULATING_MKT_CAP_USD) }}
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.currency-card {
  display: flex;
  flex-direction: column;
  min-height: 180px;
  border: 1px solid var(--surface-muted);
  /* gap: 0.5rem; */
  background-color: var(--surface);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.card-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-body {
  display: flex;
  gap: 10px;
}

.add-to-favorie {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
}
.add-to-favorie:hover {
  background: var(--surface-muted);
}

.currency-icon {
  width: 50px;
  height: 50px;
}

.currency-price {
  font-weight: bold;
  font-size: 1.5rem;
}

.currency-symbol {
  font-size: 0.8rem;
  font-style: normal;
}

.currency-info-item {
  font-size: 0.9rem;
}

.currency-info-item-value {
  font-weight: bold;
  padding: 0 10px;
}

.currency-actions {
  display: flex;
  align-items: center;
  justify-content: end;
}

.btn-remove {
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--red-700);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--red-700);
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
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
