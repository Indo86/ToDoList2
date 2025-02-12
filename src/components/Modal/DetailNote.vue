<script setup>
import CardForm from '../Card/CardForm.vue';
defineEmits(['close', 'save'])


</script>



<template>

<div class="background-blur" @click.self="$emit('close')">
  <div class="container d-flex flex-row align-items-center justify-content-center">
    <CardForm 
    @close="$emit('close')"
    @save="$emit('save',  $event)"
    />
  </div>
</div>



</template>



<style scoped>
.background-blur {
  position: fixed; /* Menutupi seluruh layar */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Hitam dengan transparansi */
  backdrop-filter: blur(8px); /* Efek blur */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 500px;
  max-width: 90%;
}

</style>