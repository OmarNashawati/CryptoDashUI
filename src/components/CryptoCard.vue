<script setup>
  const props = defineProps(['cryptoData']);

   const imgUrls = import.meta.glob('../assets/images/icons/*.png', {
    import: 'default',
    eager:true
  });  
  
</script>

<template>
  <div class="extension-card">
    <div class="card-body">
      <div class="extension-icon">
        <img :src="imgUrls[`../assets/images/icons/${cryptoData.icon}`]" :alt="cryptoData.symbol">
      </div>
      <div>
        <h3 class="extension-title">{{ cryptoData.name }}</h3>
        <p class="extension-description">{{ cryptoData.price }}</p>
      </div>
    </div>
    <div class="extension-actions">
      <button class="btn btn-remove">Remove</button>
      <label class="switch">
        <input type="checkbox" :checked="cryptoData.isActive">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<style scoped>


.extension-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--surface-muted);
  gap: 1.5rem;
  background-color: var(--surface);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.extension-icon{
  width: 60px;
  height: 60px;
  
}
.card-body{
  display: flex;
  height: 100px;
  gap: 10px;
}

.extension-actions{
  display: flex;
  align-items: center;
  justify-content: space-between;
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
