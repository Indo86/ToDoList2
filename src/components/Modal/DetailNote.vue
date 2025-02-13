<script setup>
import CardSingle from '../Card/CardSingle.vue';
defineEmits(['close', 'update', 'show'])
defineProps(['note'])

</script>



<template>

<div class="background-blur" @click.self="$emit('close')">
  <div class="container d-flex flex-row align-items-center justify-content-center">
    <CardSingle :note="note" @close="$emit('close')" @update="$emit('update', $event)"/>
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